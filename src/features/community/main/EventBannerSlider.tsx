import React from 'react';

export default function EventBannerSlider() {
  return (
    <>
      {[
        '이벤트 배너(1)',
        '이벤트 배너(2)',
        '이벤트 배너(3)',
        '이벤트 배너(4)',
      ].map((post) => (
        <div
          key={post}
          className='h-20 flex-embla1 min-w-0 bg-yellow-02 flex justify-center items-center rounded-lg'
        >
          <p className='H300 text-gray-09'>{post}</p>
        </div>
      ))}
    </>
  );
}
