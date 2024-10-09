'use client';

import { use, useState } from 'react';
import Lottie from 'react-lottie-player';
import Heart from '../../../public/lotties/heart.json';

type Props = {
  onClick: () => void;
};

export default function LottieHeart({ onClick }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState<undefined | 1 | -1>(undefined);

  const handleToggle = () => {
    setDirection(direction === undefined ? 1 : direction === 1 ? -1 : 1);
    setIsPlaying(true);
    onClick();
  };

  return (
    <div onClick={handleToggle}>
      <Lottie
        animationData={Heart}
        play={isPlaying}
        loop={false}
        direction={direction}
        speed={3}
        style={{ width: 46, height: 46 }}
      />
    </div>
  );
}
