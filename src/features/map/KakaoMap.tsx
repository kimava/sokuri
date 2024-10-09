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
            src: 'https://sokuri-bucket.s3.ap-northeast-2.amazonaws.com/map_marker.png',
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
