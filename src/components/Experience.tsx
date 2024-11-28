import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
  teamSize?: number;
  projectCount?: number;
}

interface ExperienceProps {
  experiences: WorkExperience[];
}

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.5,
  });

  // Split experiences into two columns with equal height
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
        className={`card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-700 ease-out mb-6 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="flex flex-col h-full">
          {/* Header with Icon */}
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

          {/* Location and Duration */}
          <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2 text-blue-500 dark:text-blue-300"></i>
              <span>{exp.location}</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-calendar-alt mr-2 text-blue-500 dark:text-blue-300"></i>
              <span>{exp.duration}</span>
            </div>
            {exp.teamSize && (
              <div className="flex items-center">
                <i className="fas fa-users mr-2 text-blue-500 dark:text-blue-300"></i>
                <span>Team of {exp.teamSize}</span>
              </div>
            )}
            {exp.projectCount && (
              <div className="flex items-center">
                <i className="fas fa-project-diagram mr-2 text-blue-500 dark:text-blue-300"></i>
                <span>{exp.projectCount} Projects</span>
              </div>
            )}
          </div>

          {/* Description */}
          {exp.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {exp.description}
            </p>
          )}

          {/* Key Responsibilities */}
          {exp.responsibilities && exp.responsibilities.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <i className="fas fa-tasks mr-2 text-blue-500 dark:text-blue-300"></i>
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check-circle mr-2 mt-1 text-blue-500 dark:text-blue-300"></i>
                    <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Achievements */}
          {exp.achievements && exp.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <i className="fas fa-trophy mr-2 text-blue-500 dark:text-blue-300"></i>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-star mr-2 mt-1 text-blue-500 dark:text-blue-300"></i>
                    <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {exp.technologies && exp.technologies.length > 0 && (
            <div className="mt-auto pt-4 border-t dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <i className="fas fa-code mr-2 text-blue-500 dark:text-blue-300"></i>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {leftColumnExperiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
        <div className="space-y-6">
          {rightColumnExperiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index + midPoint} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get company-specific icon
const getCompanyIcon = (company: string): string => {
  const companyLower = company.toLowerCase();
  if (companyLower.includes('microsoft')) return 'fa-microsoft';
  if (companyLower.includes('google')) return 'fa-google';
  if (companyLower.includes('amazon')) return 'fa-aws';
  if (companyLower.includes('apple')) return 'fa-apple';
  if (companyLower.includes('facebook')) return 'fa-facebook';
  if (companyLower.includes('twitter')) return 'fa-twitter';
  if (companyLower.includes('linkedin')) return 'fa-linkedin';
  if (companyLower.includes('github')) return 'fa-github';
  return 'fa-building';
};

export default Experience;
