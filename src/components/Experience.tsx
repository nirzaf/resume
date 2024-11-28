import { FC } from 'react';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="space-y-8 animate-slide-up">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  {exp.position}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {exp.company}
                </p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="group-hover:text-primary transition-colors">
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-dark-lighter rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
