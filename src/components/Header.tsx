'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sokuri from '../../public/images/logo.svg';

export default function Header() {
  return (
    <header className='sticky top-0 px-4 py-3.5 border-b border-gray-02 bg-white'>
      <Link href='/'>
        <Image src={Sokuri} alt='logo' priority />
      </Link>
    </header>
  );
}