import { FC } from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description?: string;
  achievements?: string[];
}

interface EducationProps {
  education: EducationItem[];
}

const Education: FC<EducationProps> = ({ education }) => {
  return (
    <section className="space-y-8 animate-slide-up">
      <h2 className="section-title">Education</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="card hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
                <p>{edu.duration}</p>
                <p>{edu.location}</p>
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
        ))}
      </div>
    </section>
  );
};

export default Education;
