import { FC } from 'react';
import { QualificationCardProps } from './types';
import { QualificationHeader } from './QualificationHeader';
import { QualificationDetails } from './QualificationDetails';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { getEnhancedDescription } from './utils';

export const QualificationCard: FC<QualificationCardProps> = ({
  index,
  title,
  issuer,
  date,
  description,
  score,
}) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  const enhancedDescription = getEnhancedDescription({ title, issuer, date, description, score });

  return (
    <div
      ref={elementRef}
      className={`card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col h-full">
        <QualificationHeader title={title} issuer={issuer} />
        <QualificationDetails
          date={date}
          score={score}
          description={enhancedDescription}
        />
      </div>
    </div>
  );
};
