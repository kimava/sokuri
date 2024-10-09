import EventBanner from '@/features/community/main/EventBanner';
import EventPost from '@/features/community/main/EventPost';
import RecruitPost from '@/features/community/main/RecruitPost';
import PloggingPost from '@/features/community/main/PloggingPost';

export default function CommunityPage() {
  return (
    <div className='bg-white h-full'>
      <EventPost />
      <EventBanner />
      <RecruitPost />
      <PloggingPost />
    </div>
  );
}
