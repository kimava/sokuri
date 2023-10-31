import { EventDetailWithMeta } from '@/service/events';
import Image from 'next/image';
import React from 'react';

type Props = {
  post: EventDetailWithMeta;
};

export default function EventPostContentSection({ post }: Props) {
  return (
    <div className='px-4 py-8 text-left'>
      <section className='mb-15 '>
        <h3 className='H300 text-gray-09'>상세 정보</h3>
        <p className='mt-4 CONTENT text-gray-09 whitespace-pre-line'>
          {post.content}
        </p>
        {post.images && (
          <div className='mt-7'>
            {post.images.map((image) => (
              <div className='relative mb-2 w-full h-[486px] rounded-lg'>
                <Image
                  key={image}
                  src={image}
                  alt={image}
                  fill
                  sizes='100%'
                  className='rounded-lg'
                />
              </div>
            ))}
          </div>
        )}
      </section>
      <section>
        <h3 className='mb-4 H300 text-gray-09'>위치</h3>
        <p className='mb-4 CONTENT text-gray-09'>{post.venue}</p>
      </section>
    </div>
  );
}