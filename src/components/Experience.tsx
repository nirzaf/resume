import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExperienceProps } from '../types/experience';
import ExperienceCard from './experience/ExperienceCard';

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.5,
  });

  const midPoint = Math.ceil(experiences.length / 2);
  const leftColumnExperiences = experiences.slice(0, midPoint);
  const rightColumnExperiences = experiences.slice(midPoint);

  return (
    <section className="mb-8">
      <h2
        ref={titleRef}
        className={`text-2xl font-bold text-gray-800 dark:text-white mb-6 transform transition-all duration-700 ${
          isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        Professional Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <ExperienceColumn experiences={leftColumnExperiences} startIndex={0} />
        <ExperienceColumn experiences={rightColumnExperiences} startIndex={midPoint} />
      </div>
    </section>
  );
};

const ExperienceColumn: FC<{ experiences: WorkExperience[]; startIndex: number }> = ({ 
  experiences, 
  startIndex 
}) => (
  <div className="space-y-6 flex flex-col">
    {experiences.map((exp, index) => (
      <div key={index} className="flex-1">
        <ExperienceCard exp={exp} index={index + startIndex} />
      </div>
    ))}
  </div>
);

export default Experience;
