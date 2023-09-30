'use client';

import Image from 'next/image';
import Link from 'next/link';
import Sokuri from '../../public/images/logo.svg';

export default function Header() {
  return (
    <header className='sticky top-0 px-4 py-[15px] flex justify-center items-center border-b border-gray-02 bg-white z-50'>
      <Link href='/'>
        <Image src={Sokuri} alt='logo' priority />
      </Link>
    </header>
  );
}
