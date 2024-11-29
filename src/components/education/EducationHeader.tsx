import { FC } from 'react';
import { getEducationIcon } from './utils';

interface EducationHeaderProps {
  degree: string;
  institution: string;
}

export const EducationHeader: FC<EducationHeaderProps> = ({ degree, institution }) => {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-inner">
          <i className={`fas ${getEducationIcon(degree)} text-3xl text-blue-500 dark:text-blue-300`}></i>
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
          {degree}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
          {institution}
        </p>
      </div>
    </div>
  );
};
