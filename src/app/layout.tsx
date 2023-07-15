import localFont from 'next/font/local';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import GNB from '@/components/GNB';
import Header from '@/components/Header';

const Pretendard = localFont({
  src: './PretendardVariable.woff2',
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
      </body>
    </html>
  );
}
