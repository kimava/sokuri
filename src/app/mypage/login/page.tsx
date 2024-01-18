'use client';

import { useEffect } from 'react';

export default function Kakao() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    console.log('code is', code);
    const login = async () => {
      await fetch(
        `http://13.209.208.58:8080/login/oauth2/code/kakao?code=${code}`,
        {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
          },
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
