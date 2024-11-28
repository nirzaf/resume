import { FC } from 'react';

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

  const ExperienceCard = ({ exp }: { exp: WorkExperience }) => (
    <div className="card mb-6">
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

  return (
    <section className="animate-slide-up">
      <h2 className="section-title mb-8">Professional Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {leftColumnExperiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
        <div className="space-y-6">
          {rightColumnExperiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
