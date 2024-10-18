import localFont from 'next/font/local';
import '@/styles/globals.css';
import GNB from '@/components/GNB';
import Header from '@/components/Header';

const Pretendard = localFont({
  src: '../../public/fonts/Pretendard.woff2',
  display: 'swap',
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
