import { v1 as uuidv1 } from 'uuid';

const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const REDIRECT_URI = 'https://sokuri.vercel.app/mypage/login';
const uuid = uuidv1();

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&state=${uuid}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
