'use client';

import { API_ENDPOINT } from '@/app/constant';
import { useEffect } from 'react';

export default function Kakao() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('code is', code);
    const login = async () => {
      await fetch(`${API_ENDPOINT}/login/oauth2/code/kakao?code=${code}`, {
        next: { revalidate: 0 },
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      }).then((res) => {
        console.log(res);
      });
    };
    login();
  }, []);

  return (
    <div className='spinner'>
      <h2>
        잠시만 기다려 주세요!
        <br />
        로그인 중입니다.
      </h2>
    </div>
  );
}
