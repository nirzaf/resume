import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Qualification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  score?: string;
}

interface OtherQualificationsProps {
  qualifications: Qualification[];
}

const OtherQualifications: FC<OtherQualificationsProps> = ({ qualifications }) => {
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
        Certifications & Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {qualifications.map((qual, index) => {
          const enhancedDescription = getEnhancedDescription(qual);
          
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
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <i className={`fas ${getQualificationIcon(qual.title)} text-2xl text-blue-500 dark:text-blue-300`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {qual.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {qual.issuer}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      <span>{qual.date}</span>
                    </div>
                    {qual.score && (
                      <div className="flex items-center">
                        <i className="fas fa-star mr-2"></i>
                        <span>{qual.score}</span>
                      </div>
                    )}
                  </div>
                  <div className="prose prose-sm dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-300">
                      {enhancedDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Helper functions for enhanced content
const getEnhancedDescription = (qual: Qualification): string => {
  if (qual.description) return qual.description;
  
  // Default descriptions based on certification type
  const defaultDescriptions: { [key: string]: string } = {
    'AWS Certified Solutions Architect': 'Demonstrated expertise in designing distributed systems and implementing AWS solutions. Proficient in architecting secure and scalable applications using AWS services including EC2, S3, RDS, and Lambda.',
    'Google Cloud Professional': 'Mastery in cloud architecture and implementing Google Cloud solutions. Skilled in designing, developing, and managing applications with a focus on security and scalability.',
    'Microsoft Azure Expert': 'Advanced knowledge in cloud services and Azure architecture. Experienced in implementing enterprise-level solutions using Azure\'s comprehensive suite of services.',
    'Certified Scrum Master': 'Expert in Agile methodologies and Scrum framework implementation. Skilled in facilitating team ceremonies and promoting Agile best practices across development teams.',
    'PMP Certification': 'Comprehensive project management expertise with proven track record in delivering complex technical projects. Proficient in risk management, stakeholder communication, and resource allocation.',
  };

  return defaultDescriptions[qual.title] || 
    `Advanced certification demonstrating expertise in ${qual.title}. Completed comprehensive training and practical implementation through ${qual.issuer}.`;
};

const getQualificationIcon = (title: string): string => {
  const icons: { [key: string]: string } = {
    'AWS': 'fa-aws',
    'Google': 'fa-google',
    'Azure': 'fa-microsoft',
    'Scrum': 'fa-users-cog',
    'PMP': 'fa-project-diagram',
    'CISSP': 'fa-shield-alt',
    'CISA': 'fa-user-shield',
    'CompTIA': 'fa-laptop-code',
  };

  const matchedIcon = Object.entries(icons).find(([key]) => title.includes(key));
  return matchedIcon ? matchedIcon[1] : 'fa-certificate';
};

export default OtherQualifications;
