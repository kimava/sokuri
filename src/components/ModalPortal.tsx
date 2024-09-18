import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: Props) {
  const [isCSR, setIsCSR] = useState<boolean>(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === 'undefined') return null;
  if (!isCSR) return null;

  const portalRoot = document.getElementById('portal') as Element;

  return ReactDOM.createPortal(children, portalRoot);
}
