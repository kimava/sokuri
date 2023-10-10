import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default function EventDetailPage({ params: { slug } }: Props) {
  // 1. 전달된 slug에 해당하는 포스트 데이터 읽어오기
  // 2. 스타일링 적용
  return <div>page</div>;
}
