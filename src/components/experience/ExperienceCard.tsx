import { FC } from 'react';
import { Experience } from '../../types/resume';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({ experience, index }) => {
  const {
    company,
    position,
    location,
    startDate,
    endDate,
    description,
    achievements,
    technologies,
    logo,
  } = experience;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
      style={{
        opacity: 1,
        transform: 'none',
        transition: `all 0.3s ease ${index * 0.1}s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {position}
            </h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              {company}
            </p>
          </div>
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="h-12 w-12 object-contain"
            />
          )}
        </div>

        {/* Location and Duration */}
        <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-300">
          <span>{location}</span>
          <span className="mx-2">•</span>
          <span>{startDate} - {endDate}</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {description}
        </p>

        {/* Achievements */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
            Key Achievements
          </h4>
          <ul className="mt-2 space-y-2">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start text-gray-700 dark:text-gray-300"
              >
                <span className="mr-2 text-blue-500">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
            Technologies
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};