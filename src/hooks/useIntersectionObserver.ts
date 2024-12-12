import { useRef } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = <T extends HTMLElement>(_props?: UseIntersectionObserverProps) => {
  const elementRef = useRef<T | null>(null);
  const isVisible = true;

  return { elementRef, isVisible };
};
