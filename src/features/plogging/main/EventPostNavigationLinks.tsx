import { Event } from '@/services/events';
import Link from 'next/link';
import React from 'react';

type Props = {
  prev: Event | null;
  next: Event | null;
};

const BOX_CLASS = 'px-4 py-3.5 w-full text-left justify-start';
const CATEGORY_CLASS = 'mr-6 B300 text-gray-09';
const TITLE_CLASS = 'B300 text-gray-07';

export default function EventPostNavigationLinks({ prev, next }: Props) {
  return (
    <section>
      <div className={BOX_CLASS}>
        <span className={CATEGORY_CLASS}>이전</span>
        {prev && (
          <Link href={prev.id} className={TITLE_CLASS}>
            {prev.title}
          </Link>
        )}
      </div>
      <div className='w-full h-[1px] bg-gray-02' />
      <div className={BOX_CLASS}>
        <span className={CATEGORY_CLASS}>다음</span>
        {next && (
          <Link href={next.id} className={TITLE_CLASS}>
            {next.title}
          </Link>
        )}
      </div>
    </section>
  );
}
