const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
const REDIRECT_URI = 'http://localhost:3000/mypage/login';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
