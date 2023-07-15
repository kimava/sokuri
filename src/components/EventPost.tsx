import Link from 'next/link';
import EventPostSlider from './EventPostSlider';
import { getAllPosts } from '@/service/events';

export default async function EventPost() {
  const posts = await getAllPosts();
  return (
    <section className='mt-6 text-left'>
      <div className='mr-4 flex justify-between items-center'>
        <h2 className='pl-4 text-lg text-[#1A1A1A] font-bold'>
          모집 중인 행사
        </h2>
        <Link href='' className='text-sm font-medium text-[#A4A4A4]'>
          전체보기
        </Link>
      </div>
      <EventPostSlider posts={posts} />
    </section>
  );
}
