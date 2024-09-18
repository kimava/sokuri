import CarouselForThumbnail from '@/components/CarouselForThumbnail';
import EventPostContentSection from '@/components/EventPostContentSection';
import EventPostNavigationLinks from '@/components/EventPostNavigationLinks';
import ShareLinkButtonSet from '@/components/ShareLinkButtonSet';
import { getPostDetail } from '@/service/events';
import { countDDay } from '@/util/util';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const CATEGORY_BOX_CLASS = 'mb-3';
const CATEGORY_CLASS = 'mr-6 inline-block w-[52px] B300 text-gray-07';
const CONTENT_CLASS = 'B300 text-gray-12';
const DIVIDER_CLASS = 'w-full h-2 bg-gray-01';

export default async function EventDetailPage({ params: { slug } }: Props) {
  const post = await getPostDetail(slug);
  const {
    id,
    title,
    beginEvent,
    finishEvent,
    organizer,
    location,
    dues,
    venue,
    dueDate,
    numOfPeople,
    content,
    position,
    images,
    website,
    prev,
    next,
  } = post;

  if (!post) {
    return <div>page not found</div>;
  }

  // popup
  const imageSlider =
    images &&
    images.map((image: string, index: number) => (
      <div
        key={image + index}
        className='flex-embla1 min-w-0 h-[375px] relative'
      >
        <Image src={image} alt={image + index} fill sizes='100%' />
      </div>
    ));

  return (
    <div className='h-full bg-white'>
      {images?.length > 0 ? (
        <CarouselForThumbnail
          slides={imageSlider}
          options={{ loop: false, align: 'start' }}
        />
      ) : (
        <span className='w-full h-[375px] relative'>No Image</span>
      )}
      <div className='px-4 pt-3.5 pb-5 text-start'>
        <div className='mb-3.5 flex B100 text-center'>
          {countDDay(post.beginEvent) < 0 ? (
            <span className='mr-2 py-0.5 px-1.5 B100 text-gray-07 bg-gray-03 rounded-lg'>
              행사종료
            </span>
          ) : (
            <span className='mr-1.5 py-0.5 px-1.5 text-white bg-gray-09 rounded-lg'>
              {countDDay(post.beginEvent) === 0
                ? `D-day`
                : `${countDDay(post.beginEvent)}일 남음`}
            </span>
          )}
          <span className='mr-1.5 py-0.5 px-1.5 text-gray-12 bg-gray-03 rounded-lg'>
            {post.location}
          </span>
          {post.dues ? null : (
            <span className='py-0.5 px-1.5 text-blue-01 bg-blue-03 rounded-lg'>
              참가비 무료
            </span>
          )}
        </div>
        <h1 className='mb-2 H500 text-gray-12'>{title}</h1>
        <p className='mb-4 B300 text-gray-07'>{organizer}</p>
        <div className='mb-5 w-full h-[1px] bg-gray-02' />
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>행사 일정</span>
          <span className={CONTENT_CLASS}>
            {new Date(beginEvent).toLocaleDateString()} -{' '}
            {new Date(finishEvent).toDateString()}
          </span>
        </div>
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>행사 장소</span>
          <span className={CONTENT_CLASS}>{venue}</span>
        </div>
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>모집 기간</span>
          <span className={CONTENT_CLASS}>
            {new Date(dueDate).toDateString()}까지
          </span>
        </div>
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>모집 인원</span>
          <span className={CONTENT_CLASS}>{numOfPeople}</span>
        </div>
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>참가비</span>
          {dues ? (
            <span className={CONTENT_CLASS}>{dues}</span>
          ) : (
            <span className='B300 text-blue-01'>무료</span>
          )}
        </div>
      </div>
      <div className={DIVIDER_CLASS} />
      <EventPostNavigationLinks prev={prev} next={next} />
      <div className={DIVIDER_CLASS} />
      <EventPostContentSection post={post} />
      <div className='w-full'>
        <ShareLinkButtonSet path={`communtiy/event/${slug}`} url={website} />
      </div>
    </div>
  );
}
