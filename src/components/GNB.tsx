'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Map from '../../public/images/map.svg';
import Trash from '../../public/images/trash.svg';
import User from '../../public/images/user.svg';
import MapActive from '../../public/images/map-active.svg';
import TrashActive from '../../public/images/trash-active.svg';
import UserActive from '../../public/images/user-active.svg';

const menu = [
  {
    href: '/map',
    icon: <Image src={Map} alt='지도' width={24} height={24} />,
    activatedIcon: <Image src={MapActive} alt='지도' width={24} height={24} />,
    iconText: '지도',
  },
  {
    href: '/plogging',
    icon: <Image src={Trash} alt='플로깅' width={24} height={24} />,
    activatedIcon: (
      <Image src={TrashActive} alt='플로깅' width={24} height={24} />
    ),
    iconText: '플로깅',
  },
  {
    href: '/mypage',
    icon: <Image src={User} alt='마이페이지' width={24} height={24} />,
    activatedIcon: (
      <Image src={UserActive} alt='마이페이지' width={24} height={24} />
    ),
    iconText: '마이페이지',
  },
];

export default function GNB() {
  const pathName = usePathname();

  return (
    // Fix the padding horizontal
    <nav className='sticky bottom-0 flex justify-around items-center B100 border-t border-[#eeeeee] bg-white'>
      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className='pt-2 pb-8 w-32 flex flex-col items-center'
        >
          {pathName === item.href ? item.activatedIcon : item.icon}
          <span
            className={`mt-0.5 ${
              pathName === item.href ? `text-blue-01` : `text-gray-08`
            }`}
          >
            {item.iconText}
          </span>
        </Link>
      ))}
    </nav>
  );
}
