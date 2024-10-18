import EventPost from '@/features/plogging/main/EventPost';
import RecruitPost from '@/features/plogging/main/RecruitPost';
import PloggingPost from '@/features/plogging/main/PloggingPost';

export default function PloggingPage() {
  return (
    <div className='bg-white h-full'>
      <EventPost />
      <RecruitPost />
      <PloggingPost />
    </div>
  );
}
