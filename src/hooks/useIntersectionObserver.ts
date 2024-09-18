import { useEffect, useRef, useState } from 'react';

interface UseObserverOptions {
  onIntersect: () => void;
}

const useIntersectionObserver = ({ onIntersect }: UseObserverOptions) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    if (!target) return;

    observerRef.current = new IntersectionObserver(([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        onIntersect();
      }
    }, options);

    observerRef.current.observe(target);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [onIntersect, target]);

  return { setTarget };
};

export default useIntersectionObserver;
