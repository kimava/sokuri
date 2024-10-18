'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

type Props = {
  slides: any;
  options?: EmblaOptionsType;
};

export default function CarouselForThumbnail({ slides, options }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className='relative'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>{slides}</div>
      </div>
      {scrollSnaps.length > 1 ? (
        <div className='pb-4.5 absolute bottom-0 left-0 right-0 flex justify-center items-center'>
          {scrollSnaps.map((_, index) => (
            <div
              key={index}
              onClick={() => scrollTo(index)}
              className={`ml-1 w-1.5 h-1.5 flex items-center rounded-full ${
                selectedIndex === index ? `bg-gray-08` : `bg-gray-03`
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
