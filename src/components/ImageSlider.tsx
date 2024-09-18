'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ModalPortal from './ModalPortal';
import FullPageModal from './FullPageModal';
import CarouselWithIndex from './CarouselWithIndex';

type Props = {
  images: string[];
};

export default function ImageSlider({ images }: Props) {
  const [openViewer, setOpenViewer] = useState(false);

  const slides =
    images &&
    images.map((image: string, index: number) => (
      <div
        key={image + index}
        className='flex-embla1 min-w-0 h-[375px] relative'
        onClick={() => setOpenViewer(true)}
      >
        <Image src={image} alt={image + index} fill sizes='100%' />
      </div>
    ));

  return (
    <>
      {slides}
      {openViewer && (
        <ModalPortal>
          <FullPageModal onClose={() => setOpenViewer(false)}>
            <CarouselWithIndex
              slides={slides}
              options={{ loop: false, align: 'start' }}
            />
          </FullPageModal>
        </ModalPortal>
      )}
    </>
  );
}
