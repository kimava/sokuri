'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Share from '../../../../public/images/share.png';

// Props Type 재정의
export default function ShareLinkButtonSet({
  path,
  url,
}: {
  path: string;
  url: string;
}) {
  // navigator.share fallback for Android
  const handleClickShareBtn = async () => {
    try {
      await navigator.share({
        title: 'Sokuri',
        url: `https://sokuri.vercel.app/${path}`,
      });
    } catch (e) {
      console.log(e);
    }
  };

  function ensureHttps(url: string) {
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      return 'https://' + url;
    }
    return url;
  }

  return (
    <div className='px-4 py-1 flex justify-between items-center'>
      <div
        className='mr-[7px] px-6 py-3.5 bg-gray-02 rounded-lg'
        onClick={handleClickShareBtn}
      >
        <Image src={Share} alt='share button' width={24} height={24} />
      </div>
      <Link
        href={ensureHttps(url) || ''}
        className='S500 py-[15px] flex-grow text-white text-center bg-blue-01 rounded-lg'
      >
        신청하러 가기
      </Link>
    </div>
  );
}
