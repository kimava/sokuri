'use client';

import React, { useCallback } from 'react';
import Image from 'next/image';
import { PloggingPost } from '@/service/ploggingPosts';
import Avatar from '../../public/images/avatar.png';
import LottieHeart from './icon/LottieHeart';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

type Props = { posts: PloggingPost[] };

export default function PloggingPostSlider({ posts }: Props) {
  const onIntersect = useCallback(() => {
    console.log('intersecting!');
  }, []);

  const { setTarget } = useIntersectionObserver({ onIntersect });

  const handleLottieClick = () => {
    console.log('oh yeah lottie clicked');
  };

  return (
    <div className='grid grid-cols-2 gap-x-[7px] gap-y-3'>
      {posts.map((post, index) => (
        // FIX ME : key prop post ID로 변경하기
        <div
          key={`${post.thumbnail}${index}`}
          className='relative w-full h-[218px] rounded-[11px]'
        >
          <div className='absolute top-0 right-0'>
            <LottieHeart onClick={handleLottieClick} />
          </div>
          <img
            src={post.thumbnail}
            alt='thumbnail'
            className='w-full h-full object-cover rounded-[11px]'
          />
          <div className='pl-2.5 pb-2.5 absolute bottom-0 left-0 flex flex-row items-center w-full'>
            {post.user.avatar ? (
              <Image
                src={post.user.avatar}
                alt='avatar'
                width={28}
                height={28}
              />
            ) : (
              <Image src={Avatar} alt='avatar' className='mr-2 w-8 h-8' />
            )}
            <div>
              <p className='B100 text-white'>{post.user.name}</p>
              <p className='text-gray-04 text-[9px] '>{post.createdAt}</p>
            </div>
          </div>
        </div>
      ))}
      <div ref={setTarget} className=' bg-blue-01 w-full h-4' />
    </div>
  );
}
