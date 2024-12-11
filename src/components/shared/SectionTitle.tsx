import React from 'react';
import { useInView } from '../../hooks/useInView';
import { TRANSITIONS, COLORS } from '../../constants/theme';

interface SectionTitleProps {
  title: string;
  icon?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = React.memo(({
  title,
  icon,
  className = ''
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center space-x-3 mb-8 ${
        TRANSITIONS.slide
      } ${
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {icon && (
        <i className={`fas ${icon} text-${COLORS.primary.light} dark:text-${COLORS.primary.dark} text-2xl`} />
      )}
      <h2 className={`text-3xl font-bold text-${COLORS.text.light} dark:text-${COLORS.text.dark}`}>
        {title}
      </h2>
    </div>
  );
});

SectionTitle.displayName = 'SectionTitle';

export default SectionTitle;
