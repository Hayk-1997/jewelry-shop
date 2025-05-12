import React, { useEffect, useState } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionOptions,
): { isVisible: boolean } => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options?.threshold ?? 0.1,
        rootMargin: options?.rootMargin ?? '0px',
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { isVisible };
};
