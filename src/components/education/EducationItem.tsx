import React from 'react';
import { Education } from '../../types/resume';

const EducationItem: React.FC<Education> = React.memo(({
  degree,
  institution,
  location,
  description,
  major,
  gpa,
  achievements,
  honors,
  icon
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="relative h-32 bg-[#0607E1] p-6">
        {/* Icon */}
        <div className="absolute -bottom-8 right-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
          <i className={`fas ${icon || 'fa-graduation-cap'} text-3xl text-[#0607E1]`}></i>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{degree}</h3>
        <div className="flex flex-col text-white/90 space-y-1">
          <div className="flex items-center">
            <i className="fas fa-university mr-2 text-white/75"></i>
            <span className="font-medium">{institution}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2 text-white/75"></i>
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Description */}
        <div className="bg-[#0607E1]/5 rounded-lg p-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Major and GPA */}
        {(major || gpa) && (
          <div className="flex flex-wrap gap-4">
            {major && (
              <div className="flex items-center">
                <i className="fas fa-book-open mr-2 text-[#0607E1]"></i>
                <span className="text-gray-700 dark:text-gray-300">{major}</span>
              </div>
            )}
            {gpa && (
              <div className="flex items-center">
                <i className="fas fa-award mr-2 text-[#0607E1]"></i>
                <span className="text-gray-700 dark:text-gray-300">GPA: {gpa}</span>
              </div>
            )}
          </div>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
              <i className="fas fa-trophy mr-2 text-[#0607E1]"></i>
              Key Achievements
            </h4>
            <ul className="list-disc list-inside space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Honors */}
        {honors && honors.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
              <i className="fas fa-medal mr-2 text-[#0607E1]"></i>
              Honors
            </h4>
            <div className="flex flex-wrap gap-2">
              {honors.map((honor, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#0607E1]/10 text-[#0607E1] dark:text-[#0607E1] rounded-full text-sm font-medium"
                >
                  {honor}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default EducationItem;
