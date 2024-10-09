import CarouselForThumbnail from '@/features/community/events/CarouselForThumbnail';
import EventPostContentSection from '@/features/community/main/EventPostContentSection';
import ImageSlider from '@/features/community/main/ImageSlider';
import ShareLinkButtonSet from '@/features/community/events/ShareLinkButtonSet';
import { getRecruitDetail } from '@/services/recruits';
import { countDDay } from '@/util/util';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const CATEGORY_BOX_CLASS = 'mb-3 flex';
const CATEGORY_CLASS = 'mr-6 w-[52px] shrink-0 B300 text-gray-07';
const CONTENT_CLASS = 'B300 text-gray-12 break-words';
const DIVIDER_CLASS = 'w-full h-2 bg-gray-01';

// user 정보 추가, website를 openChatLink로 변경 필요
export default async function RecruitDetailPage({ params: { slug } }: Props) {
  const post = await getRecruitDetail(slug);
  const {
    id,
    title,
    beginEvent,
    finishEvent,
    location,
    venue,
    images,
    dueDate,
    numOfPeople,
    website,
    content,
    position,
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
          slides={<ImageSlider images={images} />}
          options={{ loop: false, align: 'start' }}
        />
      ) : (
        <span className='w-full h-[375px] relative'>No Image</span>
      )}
      <div className='px-4 pt-3.5 pb-5 text-start'>
        <div className='mb-3.5 flex B100 text-center'>
          {/* 시안님과 확인 */}
          {countDDay(post.beginEvent) < 0 ? (
            <span className='mr-2 py-0.5 px-1.5 B100 text-gray-07 bg-gray-03 rounded-lg'>
              모집마감
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
        </div>
        <h1 className='mb-2 H500 text-gray-12'>{title}</h1>
        <div className='mb-5 w-full h-[1px] bg-gray-02' />
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>모임 일정</span>
          <span className={CONTENT_CLASS}>
            {new Date(beginEvent).toLocaleDateString()} -{' '}
            {new Date(finishEvent).toLocaleDateString()}
          </span>
        </div>
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>모임 장소</span>
          <span className={CONTENT_CLASS}>{venue}</span>
        </div>
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>모집 기간</span>
          <span className={CONTENT_CLASS}>
            {new Date(dueDate).toLocaleDateString()}까지
          </span>
        </div>
        <div className={CATEGORY_BOX_CLASS}>
          <span className={CATEGORY_CLASS}>모집 인원</span>
          <span className={CONTENT_CLASS}>{numOfPeople}</span>
        </div>
      </div>
      <div className={DIVIDER_CLASS} />
      {/* user info goes here */}
      <div className={DIVIDER_CLASS} />
      <EventPostContentSection post={post} />
      <div className='w-full'>
        <ShareLinkButtonSet path={`communtiy/recruit/${slug}`} url={website} />
      </div>
    </div>
  );
}
