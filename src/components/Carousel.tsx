'use client';

import React from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

type Props = {
  slides: any;
  options?: EmblaOptionsType;
};

export default function Carousel({ slides, options }: Props) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className='overflow-hidden pl-2' ref={emblaRef}>
      <div className='flex'>{slides}</div>
    </div>
  );
}
