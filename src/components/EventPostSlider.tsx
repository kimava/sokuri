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
            className='my-4 pt-4 pb-5 px-4 text-left bg-white rounded-2xl shadow'
          >
            <div className='mb-3 flex B100 text-center'>
              <span className='mr-1.5 py-0.5 px-1.5 text-white bg-gray-09 rounded-lg'>
                {countDDay(post.beginEvent) === 0
                  ? `D-day`
                  : `${countDDay(post.beginEvent)}일 남음`}
              </span>
              <span className='mr-1.5 py-0.5 px-1.5 text-gray-12 bg-gray-03 rounded-lg'>
                {post.location}
              </span>
              {post.dues ? null : (
                <span className='py-0.5 px-1.5 text-blue-01 bg-blue-03 rounded-lg'>
                  참가비 무료
                </span>
              )}
            </div>
            <p className='mb-3 H500 text-gray-12'>{post.title}</p>
            <p className='mb-1.5 S300 text-gray-08'>{`${post.beginEvent} ~ ${post.finishEvent}`}</p>
            <p className='B300 text-gray-06'>{post.organizer}</p>
          </div>
        ))}
        <div className='py-3 px-4 bg-gray-09 rounded-3xl shadow-md'>
          <span className='S500 text-center text-white'>
            더 많은 행사 보러가기 👉🏻
          </span>
        </div>
      </Slider>
    </div>
  );
}
