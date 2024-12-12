import { useRef, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useInView = <T extends HTMLElement>(_props?: UseInViewOptions): [RefObject<T>, boolean] => {
  const elementRef = useRef<T>(null);
  const isInView = true;

  return [elementRef, isInView];
};
