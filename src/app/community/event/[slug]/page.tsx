import { getPostDetail } from '@/service/events';
import { countDDay } from '@/util/util';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

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

  return (
    <div>
      <div className='w-full h-[375px] relative'>
        <Image src={images[0]} alt={title} fill sizes='100%' />
      </div>
      <div className='mb-2.5'>
        {countDDay(post.beginEvent) < 0 ? (
          <span className='mr-2 py-0.5 px-1.5 B100 text-gray-07 bg-gray-03 rounded-lg'>
            행사종료
          </span>
        ) : (
          <span className='mr-2 py-0.5 px-1.5 B100 text-white bg-gray-09 rounded-lg'>
            {countDDay(post.beginEvent) === 0
              ? `D-day`
              : `${countDDay(post.beginEvent)}일 남음`}
          </span>
        )}
        <span className='S100 text-gray-07'>{post.location}</span>
        {post.dues ? null : (
          <span className='S100 text-blue-01'>
            <span className='mx-0.5 S100 text-gray-07'>·</span>
            참가비 무료
          </span>
        )}
      </div>
      <div>
        <h1>{title}</h1>
        <p>{organizer}</p>
      </div>
      <div>
        <span>행사 일정</span>
        <span>
          {new Date(beginEvent).toLocaleDateString()} -{' '}
          {new Date(finishEvent).toDateString()}
        </span>
      </div>
      <div>
        <span>행사 장소</span>
        <span>{venue}</span>
      </div>
      <div>
        <span>모집 기간</span>
        <span>{new Date(dueDate).toDateString()}까지</span>
      </div>
      <div>
        <span>모집 인원</span>
        <span>{numOfPeople}</span>
      </div>
      <div>
        <span>참가비</span>
        <span>{dues}</span>
      </div>
      <div>
        <span>이전</span>
        {prev && <span>{prev.title}</span>}
      </div>
      <div>
        <span>다음</span>
        {next && <span>{next.title}</span>}
      </div>
    </div>
  );
}
