import localFont from 'next/font/local';
import './globals.css';
import GNB from '@/components/GNB';
import Header from '@/components/Header';

const Pretendard = localFont({
  src: [
    {
      path: './Pretendard-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Pretendard-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Pretendard-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Sokuri',
  description: '플로깅',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={Pretendard.className}>
      <body className='flex flex-col'>
        <Header />
        <main className='grow'>{children}</main>
        <GNB />
        <div id='portal' />
      </body>
    </html>
  );
}
