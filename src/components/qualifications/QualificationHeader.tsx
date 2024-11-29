import { FC } from 'react';
import { QualificationHeaderProps } from './types';
import { getQualificationIcon } from './utils';

export const QualificationHeader: FC<QualificationHeaderProps> = ({ title, issuer }) => {
  return (
    <div className="mb-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
        <i className={`fas ${getQualificationIcon(title)} text-2xl text-blue-500 dark:text-blue-300`}></i>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 font-medium">
        {issuer}
      </p>
    </div>
  );
};
