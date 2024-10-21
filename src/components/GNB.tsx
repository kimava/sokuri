'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MapIcon,
  PloggingIcon,
  UserIcon,
  MapActiveIcon,
  PloggingActiveIcon,
  UserActiveIcon,
} from '../../public/svgs';

const menu = [
  {
    href: '/map',
    icon: MapIcon,
    activeIcon: MapActiveIcon,
    name: 'MAP',
    alt: 'map icon',
  },
  {
    href: '/plogging',
    icon: PloggingIcon,
    activeIcon: PloggingActiveIcon,
    name: 'PLOGGING',
    alt: 'plogging icon',
  },
  {
    href: '/mypage',
    icon: UserIcon,
    activeIcon: UserActiveIcon,
    name: 'MY PAGE',
    alt: 'my page icon',
  },
];

export default function GNB() {
  const pathName = usePathname();

  // FIX ME: font size and padding bottom
  return (
    <nav className='sticky bottom-0 flex justify-around items-center B100 border-t border-[#eeeeee] bg-white'>
      {menu.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className='pt-[11px] pb-[39px] w-32 flex flex-col items-center'
        >
          {
            <Image
              src={pathName.startsWith(item.href) ? item.activeIcon : item.icon}
              alt={
                pathName.startsWith(item.href) ? `active ${item.alt}` : item.alt
              }
              width={24}
              height={24}
            />
          }
          <span
            className={`mt-0.5 ${
              pathName.startsWith(item.href) ? `text-blue-01` : `text-gray-08`
            }`}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
}
