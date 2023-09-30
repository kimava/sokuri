import React from 'react';
import PloggingPostSlider from './PloggingPostSlider';
import { getAllPloggingPosts } from '@/service/ploggingPosts';

export default async function PloggingPost() {
  const posts = await getAllPloggingPosts();
  return (
    <section className='px-4 pb-[21px] text-left'>
      <h2 className='H500 mb-4 text-gray-12'>지금 지구를 청소하는 사람들 ✨</h2>
      <PloggingPostSlider posts={posts} />
    </section>
  );
}
