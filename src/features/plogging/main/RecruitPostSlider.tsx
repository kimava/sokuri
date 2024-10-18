import { Recruit } from '@/services/recruits';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { posts: Recruit[] };

export default function RecruitPostSlider({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/plogging/recruit/${post.id}`}
          className='mr-[7px] flex-embla2 w-[168px] h-[208px] relative rounded-xl bg-gradient-gray'
        >
          {post.images && post.images.length > 0 ? (
            <Image
              src={post.images[0]}
              alt='thumbnail'
              fill
              sizes='100%'
              className='w-full h-full rounded-xl'
            />
          ) : null}
          <div className='absolute left-3 right-4 bottom-[14px]'>
            <h3 className='S500 mb-1 text-white'>{post.title}</h3>
            <p className='B100 text-gray-04'>{`${post.location} | ${post.maxParticipants}`}</p>
          </div>
        </Link>
      ))}
      <Link
        href='/plogging/recruit'
        className='mr-4 flex-embla2 w-[168px] h-[208px] relative rounded-xl flex justify-center items-center'
      >
        <Image
          src='https://images.unsplash.com/photo-1597348989645-46b190ce4918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
          alt='thumbnail'
          fill
          sizes='100%'
          className='rounded-xl'
        />
        <div className='relative h-fit px-3.5 py-2 S500 text-gray-12 bg-white rounded-3xl'>
          더 보기 👉🏻
        </div>
      </Link>
    </>
  );
}
