import { FC } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { WorkExperience } from '../../types/experience';
import { getCompanyIcon } from '../../utils/iconUtils';

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
        <ExperienceBody exp={exp} />
        <ExperienceTechnologies technologies={exp.technologies} />
      </div>
    </div>
  );
};

const ExperienceHeader: FC<{ exp: WorkExperience }> = ({ exp }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-inner">
        <i className={`fas ${getCompanyIcon(exp.company)} text-3xl text-blue-500 dark:text-blue-300`}></i>
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
        {exp.title}
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
        {exp.company}
      </p>
    </div>
  </div>
);

const ExperienceBody: FC<{ exp: WorkExperience }> = ({ exp }) => (
  <div>
    <ExperienceMetadata exp={exp} />
    {exp.description && (
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {exp.description}
      </p>
    )}
    <ExperienceResponsibilities responsibilities={exp.responsibilities} />
    <ExperienceAchievements achievements={exp.achievements} />
  </div>
);

const ExperienceMetadata: FC<{ exp: WorkExperience }> = ({ exp }) => (
  <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400 mb-4">
    <MetadataItem icon="fa-map-marker-alt" text={exp.location} />
    <MetadataItem icon="fa-calendar-alt" text={exp.duration} />
    {exp.teamSize && <MetadataItem icon="fa-users" text={`Team of ${exp.teamSize}`} />}
    {exp.projectCount && <MetadataItem icon="fa-project-diagram" text={`${exp.projectCount} Projects`} />}
  </div>
);

const MetadataItem: FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center">
    <i className={`fas ${icon} mr-2 text-blue-500 dark:text-blue-300`}></i>
    <span>{text}</span>
  </div>
);

const ExperienceResponsibilities: FC<{ responsibilities?: string[] }> = ({ responsibilities }) => {
  if (!responsibilities?.length) return null;
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
        <i className="fas fa-tasks mr-2 text-blue-500 dark:text-blue-300"></i>
        Key Responsibilities
      </h4>
      <ul className="space-y-2">
        {responsibilities.map((responsibility, i) => (
          <li key={i} className="flex items-start">
            <i className="fas fa-check-circle mr-2 mt-1 text-blue-500 dark:text-blue-300"></i>
            <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceAchievements: FC<{ achievements?: string[] }> = ({ achievements }) => {
  if (!achievements?.length) return null;
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
        <i className="fas fa-trophy mr-2 text-blue-500 dark:text-blue-300"></i>
        Key Achievements
      </h4>
      <ul className="space-y-2">
        {achievements.map((achievement, i) => (
          <li key={i} className="flex items-start">
            <i className="fas fa-star mr-2 mt-1 text-blue-500 dark:text-blue-300"></i>
            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceTechnologies: FC<{ technologies?: string[] }> = ({ technologies }) => {
  if (!technologies?.length) return null;
  return (
    <div className="mt-4 pt-4 border-t dark:border-gray-700">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
        <i className="fas fa-code mr-2 text-blue-500 dark:text-blue-300"></i>
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard; 