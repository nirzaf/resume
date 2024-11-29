import { FC } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { WorkExperience } from '../../types/experience';
import { ExperienceHeader } from './ExperienceHeader';
import { ExperienceMetadata } from './ExperienceMetadata';
import { ContentList } from './ExperienceContent';
import { TechnologyTags } from './TechnologyTags';

interface ExperienceCardProps {
  exp: WorkExperience;
  index: number;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ exp, index }) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  return (
    <div
      ref={elementRef}
      className={`h-full card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col h-full justify-between">
        <ExperienceHeader exp={exp} />
        <div>
          <ExperienceMetadata exp={exp} />
          {exp.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {exp.description}
            </p>
          )}
          <ContentList
            items={exp.responsibilities}
            title="Key Responsibilities"
            icon="fa-tasks"
            itemIcon="fa-check-circle"
          />
          <ContentList
            items={exp.achievements}
            title="Key Achievements"
            icon="fa-trophy"
            itemIcon="fa-star"
          />
        </div>
        <TechnologyTags technologies={exp.technologies} />
      </div>
    </div>
  );
};

export default ExperienceCard; 