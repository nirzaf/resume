import { FC } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { EducationCardProps } from './types';
import { EducationHeader } from './EducationHeader';
import { EducationDetails } from './EducationDetails';
import { EducationAchievements } from './EducationAchievements';

export const EducationCard: FC<EducationCardProps> = ({
  index,
  degree,
  institution,
  location,
  duration,
  description,
  achievements,
  gpa,
  major,
  minor,
  honors,
}) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  return (
    <div
      ref={elementRef}
      className={`card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full">
        <EducationHeader degree={degree} institution={institution} />
        <EducationDetails
          location={location}
          duration={duration}
          gpa={gpa}
          major={major}
          minor={minor}
          description={description}
        />
        <EducationAchievements achievements={achievements} honors={honors} />
      </div>
    </div>
  );
};
