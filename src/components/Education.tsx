import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
  achievements?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

const Education: FC<EducationProps> = ({ education }) => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.5,
  });

  return (
    <section className="mb-8">
      <h2
        ref={titleRef}
        className={`text-2xl font-bold text-gray-800 dark:text-white mb-6 transform transition-all duration-700 ${
          isTitleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => {
          const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
            threshold: 0.2,
            rootMargin: '-50px',
          });

          return (
            <div
              key={index}
              ref={elementRef}
              className={`card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm space-x-4">
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>
                {edu.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                )}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
