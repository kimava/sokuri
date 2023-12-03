import Image from 'next/image';
import React from 'react';
import CloseButton from '../../public/images/close-white.png';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function FullPageModal({ onClose, children }: Props) {
  return (
    <section
      className='max-w-[414px] w-full h-full fixed top-0 flex bg-black z-50'
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {children}
      <button onClick={() => onClose()} className='absolute top-[13px] right-4'>
        <Image src={CloseButton} alt='close button' width={24} height={24} />
      </button>
    </section>
  );
}
