'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

type Props = {
  slides: any;
  options?: EmblaOptionsType;
};

export default function CarouselWithIndex({ slides, options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [index, setIndex] = useState(1);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setIndex(emblaApi.selectedScrollSnap() + 1);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi]);

  return (
    <>
      <span className='B300 text-white absolute top-4 left-0 right-0 mx-auto'>
        {index}
        {`/`}
        {slides.length}
      </span>
      <div className='overflow-hidden place-self-center w-full' ref={emblaRef}>
        <div className='flex'>{slides}</div>
      </div>
    </>
  );
}
