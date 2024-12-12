import { FC } from 'react';
import { Experience } from '../../types/resume';
import { TechStack } from '../shared/TechStack';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800/90 backdrop-blur-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 via-[#0607E1]/10 to-[#0607E1]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">
              {position}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-[#0607E1] dark:text-[#0607E1]/80 truncate">
              {company}
            </p>
          </div>
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain rounded-lg shrink-0"
            />
          )}
        </div>

        {/* Location and Duration */}
        <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-300 flex-wrap gap-2">
          <span className="truncate">{location}</span>
          <span className="hidden sm:inline">•</span>
          <span className="truncate">{startDate} - {endDate}</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700 dark:text-gray-300 line-clamp-3">
          {description}
        </p>

        {/* Achievements */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
            Key Achievements
          </h4>
          <ul className="mt-2 space-y-2 overflow-hidden">
            {achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start text-sm text-gray-700 dark:text-gray-300 gap-2"
              >
                <span className="text-[#0607E1] shrink-0">•</span>
                <span className="line-clamp-2">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Technologies Used
            </h4>
            <div className="overflow-hidden">
              <TechStack technologies={technologies} />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};