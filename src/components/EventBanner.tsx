import React from 'react';
import CarouselWithDots from './CarouselWithDots';
import EventBannerSlider from './EventBannerSlider';

export default function EventBanner() {
  return (
    <section className='relative'>
      <CarouselWithDots
        slides={<EventBannerSlider />}
        options={{ loop: false, align: 'start' }}
      />
    </section>
  );
}
