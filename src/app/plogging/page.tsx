import EventBanner from '@/components/EventBanner';
import EventPost from '@/components/EventPost';
import RecruitPost from '@/components/RecruitPost';
import PloggingPost from '@/components/PloggingPost';

export default function PloggingPage() {
  return (
    <div className='bg-white h-full'>
      <EventPost />
      <EventBanner />
      <RecruitPost />
      <PloggingPost />
    </div>
  );
}
