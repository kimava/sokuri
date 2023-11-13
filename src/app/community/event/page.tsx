import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/service/events';
import { countDDay, formatDate } from '@/util/util';

export default async function Eventpage() {
  const posts = await getAllPosts();
  return (
    <div className='px-4 pt-6 h-full bg-white'>
      <h1 className='mb-2 H700 text-gray-12 text-left'>
        전국 곳곳의
        <br /> 플로깅 행사를 모아왔어요! 🏃🏻️
      </h1>
      <section>
        {posts.map((post) => (
          <Link
            href={`/community/event/${post.id}`}
            key={post.thumbnail}
            className='py-5 flex flex-col items-start border-solid border-b-2 border-b-gray-02'
          >
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
            <div className='flex flex-row justify-between items-center w-full'>
              <div className='text-left inline'>
                <h3 className='mb-2 H300 text-gray-12'>{post.title}</h3>
                <p className='mb-2 S300 text-gray-08'>
                  {formatDate(post.beginEvent)} ~ {formatDate(post.finishEvent)}
                </p>
                <p className='B300 text-gray-06'>{post.organizer}</p>
              </div>
              <div className='w-[73px] h-[73px] relative'>
                <Image
                  src={post.images?.[0]}
                  alt={post.title}
                  fill
                  sizes='100%'
                  className='rounded-lg'
                />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
