import { useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInView = <T extends HTMLElement>(_props?: UseInViewOptions): [RefObject<T>, boolean] => {
  // Using RefObject<T | null> to explicitly handle null values
  const elementRef = useRef<T | null>(null) as RefObject<T>;
  const isInView = true;

  return [elementRef, isInView];
};
