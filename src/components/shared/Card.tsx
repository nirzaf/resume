import React from 'react';
import { useInView } from '../../hooks/useInView';
import { TRANSITIONS } from '../../constants/theme';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = React.memo(({
  children,
  className = '',
  animate = true,
  delay = 0
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const animationClass = animate
    ? `transform ${TRANSITIONS.slide} ${
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0'
      }`
    : '';

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${animationClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
