import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description?: string;
  achievements?: string[];
  gpa?: string;
  major?: string;
  minor?: string;
  honors?: string[];
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
                {/* Header with Icon */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-inner">
                      <i className={`fas ${getEducationIcon(edu.degree)} text-3xl text-blue-500 dark:text-blue-300`}></i>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4 mb-6">
                  {/* Location and Duration with Icons */}
                  <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-2 text-blue-500 dark:text-blue-300"></i>
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-calendar-alt mr-2 text-blue-500 dark:text-blue-300"></i>
                      <span>{edu.duration}</span>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center">
                        <i className="fas fa-star mr-2 text-blue-500 dark:text-blue-300"></i>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>

                  {/* Major/Minor */}
                  {(edu.major || edu.minor) && (
                    <div className="space-y-2">
                      {edu.major && (
                        <div className="flex items-center">
                          <i className="fas fa-graduation-cap mr-2 text-blue-500 dark:text-blue-300"></i>
                          <span className="text-gray-700 dark:text-gray-300">Major: {edu.major}</span>
                        </div>
                      )}
                      {edu.minor && (
                        <div className="flex items-center">
                          <i className="fas fa-book mr-2 text-blue-500 dark:text-blue-300"></i>
                          <span className="text-gray-700 dark:text-gray-300">Minor: {edu.minor}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>

                {/* Achievements and Honors */}
                <div className="mt-auto space-y-4">
                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="border-t dark:border-gray-700 pt-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <i className="fas fa-trophy mr-2 text-blue-500 dark:text-blue-300"></i>
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-check-circle mr-2 mt-1 text-blue-500 dark:text-blue-300"></i>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.honors && edu.honors.length > 0 && (
                    <div className="border-t dark:border-gray-700 pt-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                        <i className="fas fa-award mr-2 text-blue-500 dark:text-blue-300"></i>
                        Honors & Awards
                      </h4>
                      <ul className="space-y-2">
                        {edu.honors.map((honor, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-medal mr-2 mt-1 text-blue-500 dark:text-blue-300"></i>
                            <span className="text-gray-600 dark:text-gray-300">{honor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Helper function to get appropriate icon based on degree
const getEducationIcon = (degree: string): string => {
  const degreeType = degree.toLowerCase();
  if (degreeType.includes('master')) return 'fa-user-graduate';
  if (degreeType.includes('bachelor')) return 'fa-graduation-cap';
  if (degreeType.includes('diploma')) return 'fa-certificate';
  if (degreeType.includes('phd')) return 'fa-microscope';
  return 'fa-university';
};

export default Education;
