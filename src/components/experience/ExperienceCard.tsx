import React from 'react';
import { Experience } from '../../types/resume';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = React.memo(({ experience, className = '' }) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden ${className}`}>
      {/* Card Header with Gradient Background */}
      <div className="absolute inset-0 h-32 bg-gradient-to-r from-blue-600 to-purple-700 opacity-95" />
      
      <div className="relative p-6">
        {/* Company and Title Section */}
        <div className="mb-8">
          {/* Icon */}
          <div className="absolute -top-2 right-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
            <i className={`fas ${experience.icon || 'fa-briefcase'} text-3xl text-blue-600 dark:text-blue-400`}></i>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
          <div className="flex flex-col md:flex-row md:items-center text-gray-100 space-y-1 md:space-y-0 md:space-x-3">
            <div className="flex items-center">
              <i className="fas fa-building mr-2 text-blue-200"></i>
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="hidden md:block text-blue-200">•</div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2 text-blue-200"></i>
              <span>{experience.location}</span>
            </div>
          </div>
          <div className="mt-2 flex items-center text-gray-100">
            <i className="far fa-calendar-alt mr-2 text-blue-200"></i>
            <span className="text-lg font-medium tracking-wide">{experience.duration}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Description */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Team Size & Project Count */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-2">
              <i className="fas fa-users mr-2 text-blue-500 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">Team Size: {experience.teamSize}</span>
            </div>
            <div className="flex items-center bg-purple-50 dark:bg-purple-900/30 rounded-full px-4 py-2">
              <i className="fas fa-project-diagram mr-2 text-purple-500 dark:text-purple-400" />
              <span className="text-gray-700 dark:text-gray-300">Projects: {experience.projectCount}</span>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
              <i className="fas fa-tasks mr-2 text-blue-500" />
              Key Responsibilities
            </h4>
            <ul className="space-y-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              {experience.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
              <i className="fas fa-trophy mr-2 text-yellow-500" />
              Key Achievements
            </h4>
            <ul className="space-y-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                  <i className="fas fa-star text-yellow-500 mt-1 mr-2" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="pt-2">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center mb-3">
              <i className="fas fa-code mr-2 text-purple-500" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;