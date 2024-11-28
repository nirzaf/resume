import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  location: string;
  project?: string;
  responsibilities: string[];
  technologies: string[];
}

interface ExperienceProps {
  experiences: WorkExperience[];
}

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  // Split experiences into two arrays for two columns
  const midPoint = Math.ceil(experiences.length / 2);
  const leftColumnExperiences = experiences.slice(0, midPoint);
  const rightColumnExperiences = experiences.slice(midPoint);

  const ExperienceCard = ({ exp, index }: { exp: WorkExperience; index: number }) => {
    const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
      threshold: 0.2,
      rootMargin: '-50px',
    });

    return (
      <div
        ref={elementRef}
        className={`card mb-6 transform transition-all duration-700 ease-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-16 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="flex flex-col mb-4">
          <div>
            <h3 className="text-lg font-semibold text-primary dark:text-white">
              {exp.title}
            </h3>
            <p className="text-md text-gray-700 dark:text-gray-300">
              {exp.company}
            </p>
            {exp.project && (
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
                Project: {exp.project}
              </p>
            )}
            <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
              <p>{exp.duration}</p>
              <p>{exp.location}</p>
            </div>
          </div>
        </div>
        
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 mb-3">
          {exp.responsibilities.map((item, i) => (
            <li key={i} className="leading-tight">{item}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-1">
          {exp.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-gray-100 dark:bg-dark-lighter rounded-full text-xs text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const { elementRef: titleRef, isVisible: isTitleVisible } = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.5,
  });

  return (
    <section>
      <h2 
        ref={titleRef}
        className={`section-title mb-8 transform transition-all duration-700 ${
          isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        Professional Experience
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {leftColumnExperiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
        <div className="space-y-6">
          {rightColumnExperiences.map((exp, index) => (
            <ExperienceCard 
              key={index} 
              exp={exp} 
              index={index + leftColumnExperiences.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
