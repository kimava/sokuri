'use client';

import Slider from 'react-slick';
import { Event } from '@/service/events';
import { countDDay } from '@/util/util';
import styles from '../components/slider.module.css';

type Props = { posts: Event[] };

export default function EventPostSlider({ posts }: Props) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 1.1,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.slider}>
      <Slider {...sliderSettings} className='pl-3.5'>
        {posts.map((post) => (
          // fix px-4 to 18px, rounded-2xl to 20px shadow
          <div
            key={post.title}
            className='my-4 pt-4 pb-5 px-4 text-left bg-white rounded-2xl shadow-md'
          >
            <div className='mb-3 flex text-xs text-center font-medium'>
              <span className='mr-1.5 py-0.5 px-1.5 text-white bg-[#525252] rounded-lg'>
                {countDDay(post.beginEvent) === 0
                  ? `D-day`
                  : `${countDDay(post.beginEvent)}일 남음`}
              </span>
              <span className='mr-1.5 py-0.5 px-1.5 text-[#1A1A1A] bg-[#EDEDED] rounded-lg'>
                {post.location}
              </span>
              {post.dues ? null : (
                <span className='py-0.5 px-1.5 text-[#2068E1] bg-[#E3F3FF] rounded-lg'>
                  참가비 무료
                </span>
              )}
            </div>
            <p className='mb-3 text-lg text-[#1A1A1A] font-bold'>
              {post.title}
            </p>
            <p className='mb-1.5 text-sm text-[#707070] font-semibold'>{`${post.beginEvent} ~ ${post.finishEvent}`}</p>
            <p className='text-sm text-[#A4A4A4] font-medium'>
              {post.organizer}
            </p>
          </div>
        ))}
        <div className='py-3 px-4 bg-[#525252] rounded-3xl shadow-sm'>
          <span className='text-base text-center text-white'>
            더 많은 행사 보러가기 👉🏻
          </span>
        </div>
      </Slider>
    </div>
  );
}
