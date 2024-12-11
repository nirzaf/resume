import { FC } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { EducationCardProps } from './types';

export const EducationCard: FC<EducationCardProps> = ({
  index,
  degree,
  institution,
  location,
  description,
  achievements,
  gpa,
  major,
  honors,
}) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Decorative gradient bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600" />
      
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {degree}
          </h3>
          <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {institution}
          </div>
        </div>

        {/* Details */}
        <div className="mb-4 space-y-2">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <i className="fas fa-map-marker-alt w-5" />
            <span>{location}</span>
          </div>
          {gpa && (
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <i className="fas fa-award w-5" />
              <span>{gpa}</span>
            </div>
          )}
          {major && (
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <i className="fas fa-graduation-cap w-5" />
              <span>Major: {major}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Key Areas
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <i className="fas fa-check-circle text-green-500 mr-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Honors */}
        {honors && honors.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Honors & Awards
            </h4>
            <ul className="space-y-1">
              {honors.map((honor, i) => (
                <li
                  key={i}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <i className="fas fa-trophy text-yellow-500 mr-2" />
                  {honor}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
