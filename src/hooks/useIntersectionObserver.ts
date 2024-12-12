import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = <T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        setIsVisible(isElementVisible);
        
        if (isElementVisible && observerRef.current && entry.target) {
          observerRef.current.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const element = elementRef.current;
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
};
