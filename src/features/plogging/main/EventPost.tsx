import Link from 'next/link';
import EventPostSlider from './EventPostSlider';
import { getAllPosts } from '@/services/events';
import Carousel from './Carousel';

export default async function EventPost() {
  const posts = await getAllPosts();
  return (
    <section className='mt-6 mb-9.5 text-left'>
      <div className='mr-4 flex justify-between items-center'>
        <h2 className='pl-4 H500 text-gray-12'>모집 중인 행사</h2>
        <Link href='/plogging/event' className='B300 text-gray-06'>
          전체보기
        </Link>
      </div>
      <div className='w-full pl-2'>
        <Carousel
          slides={<EventPostSlider posts={posts} />}
          options={{ loop: false, align: 'start' }}
        />
      </div>
    </section>
  );
}
