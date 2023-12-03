import { Recruit } from '@/service/recruits';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  posts: Recruit[];
};

export default function RecruitGrid({ posts }: Props) {
  return (
    <div className='grid grid-cols-2 gap-[7px]'>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <Link
            key={post.id}
            href={`/community/recruit/${post.id}`}
            className='mb-[5px] w-full h-[208px] rounded-xl bg-gradient-gray relative'
          >
            {post.images && post.images.length > 0 ? (
              <Image
                src={post.images[0]}
                alt='thumbnail'
                fill
                sizes='100%'
                className='rounded-xl'
              />
            ) : null}
            <div className='absolute left-3 right-4 bottom-[14px]'>
              <h3 className='S500 mb-1 text-white'>{post.title}</h3>
              <p className='B100 text-gray-04'>{`${post.location} | 1-${post.maxParticipants}명`}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
