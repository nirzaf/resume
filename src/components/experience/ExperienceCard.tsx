import React from 'react';
import { Experience } from '../../types/resume';
import Card from '../shared/Card';
import IconBadge from '../shared/IconBadge';
import IconListItem from '../shared/IconListItem';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = React.memo(({ experience, className = '' }) => {
  const {
    title,
    company,
    location,
    duration,
    description,
    teamSize,
    projectCount,
    icon,
    responsibilities,
    achievements,
    technologies
  } = experience;

  return (
    <Card className={className}>
      {/* Header with Gradient Background */}
      <div className="relative h-32 bg-gradient-to-r from-blue-600 to-purple-700 p-6">
        {/* Icon */}
        <div className="absolute -bottom-8 right-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
          <i className={`fas ${icon || 'fa-briefcase'} text-3xl text-blue-600 dark:text-blue-400`} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex flex-col md:flex-row md:items-center text-gray-100 space-y-1 md:space-y-0 md:space-x-3">
          <div className="flex items-center">
            <i className="fas fa-building mr-2 text-blue-200" />
            <span className="font-medium">{company}</span>
          </div>
          <div className="hidden md:block text-blue-200">•</div>
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2 text-blue-200" />
            <span>{location}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center text-gray-100">
          <i className="far fa-calendar-alt mr-2 text-blue-200" />
          <span className="text-lg font-medium tracking-wide">{duration}</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Description */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Team Size & Project Count */}
        <div className="flex flex-wrap gap-4">
          <IconBadge
            icon="fa-users"
            text={`Team Size: ${teamSize}`}
            color="blue"
          />
          <IconBadge
            icon="fa-project-diagram"
            text={`Projects: ${projectCount}`}
            color="purple"
          />
        </div>

        {/* Responsibilities */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
            <i className="fas fa-tasks mr-2 text-blue-500" />
            Key Responsibilities
          </h4>
          <ul className="space-y-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
            {responsibilities.map((resp, index) => (
              <IconListItem
                key={index}
                icon="fa-check-circle"
                text={resp}
                iconColor="green"
              />
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
            {achievements.map((achievement, index) => (
              <IconListItem
                key={index}
                icon="fa-star"
                text={achievement}
                iconColor="yellow"
              />
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
            {technologies.map((tech, index) => (
              <IconBadge
                key={index}
                icon="fa-code"
                text={tech}
                color="gray"
                className="text-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;