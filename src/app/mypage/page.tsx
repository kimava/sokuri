import { KAKAO_AUTH_URL } from '@/services/kakaoLogin';
import Link from 'next/link';
import React from 'react';

export default function MyPage() {
  return (
    <div>
      <Link href={KAKAO_AUTH_URL}>카카오로 로그인하기</Link>
    </div>
  );
}
