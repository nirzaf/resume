import { FC } from 'react';

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

interface WorkExperienceProps {
  experiences: Experience[];
}

const WorkExperience: FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">Work Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{exp.position}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {exp.technologies && (
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
