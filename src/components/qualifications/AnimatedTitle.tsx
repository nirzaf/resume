import { FC } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedTitleProps {
  title: string;
}

export const AnimatedTitle: FC<AnimatedTitleProps> = ({ title }) => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.5,
  });

  return (
    <h2
      ref={titleRef}
      className={`text-2xl font-bold text-gray-800 dark:text-white mb-6 transform transition-all duration-700 ${
        isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {title}
    </h2>
  );
};
