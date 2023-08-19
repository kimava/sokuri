import React from 'react';
import CarouselWithDots from './CarouselWithDots';
import EventBannerSlider from './EventBannerSlider';

export default function EventBanner() {
  return (
    <section className='mb-10 relative'>
      <CarouselWithDots
        slides={<EventBannerSlider />}
        options={{ loop: false, align: 'start' }}
      />
    </section>
  );
}
