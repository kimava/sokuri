'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from 'embla-carousel-react';

type Props = {
  slides: any;
  options?: EmblaOptionsType;
};

export default function CarouselWithDots({ slides, options }: Props) {
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
    <>
      <div className='overflow-hidden mx-4' ref={emblaRef}>
        <div className='flex'>{slides}</div>
      </div>
      <div className='absolute right-7 flex justify-center items-center bottom-0 pb-5'>
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
    </>
  );
}
