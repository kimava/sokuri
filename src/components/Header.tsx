'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sokuri from '../../public/images/logo.svg';

export default function Header() {
  return (
    <header className='sticky top-0 px-4 py-3.5 border-b border-[#F5F5F5]'>
      <Link href='/'>
        <Image src={Sokuri} alt='logo' />
      </Link>
    </header>
  );
}
