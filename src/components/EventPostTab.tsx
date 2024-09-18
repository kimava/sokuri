'use client';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {
  contentId: string;
  locationId: string;
};

export default function EventPostTab({ contentId, locationId }: Props) {
  const [focused, setFocused] = useState<'content' | 'location'>('content');
  const STYLE = `py-[15px] S300 border-b-2`;

  return (
    <section className='grid grid-cols-2'>
      <Link
        href={contentId}
        scroll={false}
        className={`${STYLE} ${
          focused === 'content'
            ? 'text-gray-12 border-b-blue-01'
            : 'text-gray-07 border-b-gray-02'
        }`}
        onClick={() => setFocused('content')}
      >
        상세 정보
      </Link>
      <Link
        href={locationId}
        scroll={false}
        className={`${STYLE} ${
          focused === 'location'
            ? 'text-gray-12 border-b-blue-01'
            : 'text-gray-07 border-b-gray-02'
        }`}
        onClick={() => setFocused('location')}
      >
        위치
      </Link>
    </section>
  );
}
