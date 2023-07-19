import Link from 'next/link';
import EventPostSlider from './EventPostSlider';
import { getAllPosts } from '@/service/events';

export default async function EventPost() {
  const posts = await getAllPosts();
  return (
    <section className='mt-6 text-left'>
      <div className='mr-4 flex justify-between items-center'>
        <h2 className='pl-4 H500 text-gray-12'>모집 중인 행사</h2>
        <Link href='' className='B300 text-gray-06'>
          전체보기
        </Link>
      </div>
      <EventPostSlider posts={posts} />
    </section>
  );
}
