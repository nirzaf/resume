import { FC } from 'react';

interface EducationAchievementsProps {
  achievements?: string[];
  honors?: string[];
}

export const EducationAchievements: FC<EducationAchievementsProps> = ({ achievements, honors }) => {
  if (!achievements?.length && !honors?.length) return null;

  return (
    <div className="mt-auto space-y-4">
      {achievements && achievements.length > 0 && (
        <div className="border-t dark:border-gray-700 pt-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
            <i className="fas fa-trophy mr-2 text-blue-500 dark:text-blue-300"></i>
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <i className="fas fa-check-circle mr-2 mt-1 text-blue-500 dark:text-blue-300"></i>
                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {honors && honors.length > 0 && (
        <div className="border-t dark:border-gray-700 pt-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
            <i className="fas fa-award mr-2 text-blue-500 dark:text-blue-300"></i>
            Honors & Awards
          </h4>
          <ul className="space-y-2">
            {honors.map((honor, i) => (
              <li key={i} className="flex items-start">
                <i className="fas fa-medal mr-2 mt-1 text-blue-500 dark:text-blue-300"></i>
                <span className="text-gray-600 dark:text-gray-300">{honor}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
