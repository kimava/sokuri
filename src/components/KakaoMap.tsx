'use client';

import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';

type Props = {
  position: {
    lat: number;
    lng: number;
  };
};

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = ({ position }: Props) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapLoaded) {
      const script = document.createElement('script');
      script.src = KAKAO_SDK_URL;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          setMapLoaded(true);
        });
      };
      document.body.appendChild(script);
    }
  }, [mapLoaded]);

  if (!mapLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy='beforeInteractive' />
      <Map center={position} className='w-full h-full rounded-lg' level={3}>
        <MapMarker
          position={position}
          image={{
            // 이미지 url 변경 필요
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
            size: { width: 28, height: 38 },
            options: {
              offset: {
                x: 14,
                y: 38,
              },
            },
          }}
        />
      </Map>
    </>
  );
};

export default KakaoMap;
