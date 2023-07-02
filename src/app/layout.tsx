import Image from 'next/image';
import { Pretendard } from '@/app/fonts';
import Sokuri from '../../public/images/logo.svg';
import './globals.css';

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
    <html lang='en'>
      <body className={Pretendard.className}>
        <section className='header'>
          <Image src={Sokuri} alt='logo' />
        </section>
        {children}
        <section className='footer'>GNB</section>
      </body>
    </html>
  );
}
