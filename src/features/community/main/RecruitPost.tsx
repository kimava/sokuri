import { getTopRecruitPosts } from '@/services/recruits';
import Link from 'next/link';
import React from 'react';
import RecruitPostSlider from './RecruitPostSlider';
import Carousel from './Carousel';

export default async function RecruitPost() {
  const posts = await getTopRecruitPosts();
  return (
    <section className=' mb-15'>
      <div className='mx-4 mb-4 flex justify-between items-center'>
        <h2 className='H500 text-gray-12'>함께 플로깅 하러 가실래요?🔥</h2>
        <Link href='/community/recruit' className='B300 text-gray-06'>
          전체보기
        </Link>
      </div>
      <div className='w-full mb-4 pl-4'>
        <Carousel
          slides={<RecruitPostSlider posts={posts} />}
          options={{ loop: false, dragFree: true }}
        />
      </div>
      <div className='mx-4 py-2 flex justify-center rounded-lg bg-gray-02 B300 text-gray-12'>
        👀 함께 플로깅 할 크루를 모집해 보세요!
      </div>
    </section>
  );
}
