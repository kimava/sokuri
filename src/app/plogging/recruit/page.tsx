import RecruitGrid from '@/features/plogging/crew/RecruitGrid';
import { getAllRecruitPosts } from '@/services/recruits';
import Image from 'next/image';
import React from 'react';
import RecruitImg from '../../../../public/images/recruit.png';

export default async function RecruitPage() {
  const posts = await getAllRecruitPosts();
  return (
    <div className='pt-6 px-4 bg-white'>
      <h1 className='H700 mb-1 text-gray-12 text-left'>
        함께 할수록
        <br />더 맑아지는 우리 지구 🌏
      </h1>
      <p className='B300 mb-8 text-gray-07 text-left'>
        이번 주말, 여럿이 플로깅 해보는건 어때요?
      </p>
      <section>
        <RecruitGrid posts={posts} />
      </section>
      <div className='sticky bottom-[108px] w-full flex justify-end'>
        <div className='px-3 py-3 w-[52px] rounded-full bg-white'>
          <Image src={RecruitImg} width={28} height={28} alt='recruit image' />
        </div>
      </div>
    </div>
  );
}
