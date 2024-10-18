'use client';

import { API_ENDPOINT } from '@/constants/constant';
import { useEffect } from 'react';

export default function Kakao() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const state = new URL(window.location.href).searchParams.get('state');

    console.log('code is', code);
    console.log('state is', state);
    const login = async () => {
      await fetch(
        `${API_ENDPOINT}/login/oauth2/code/kakao?code=${code}&state=${state}`,
        {
          next: { revalidate: 0 },
        }
      ).then((res) => {
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
