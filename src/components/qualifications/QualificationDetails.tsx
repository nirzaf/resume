import { FC } from 'react';
import { QualificationDetailsProps } from './types';

export const QualificationDetails: FC<QualificationDetailsProps> = ({ date, score, description }) => {
  return (
    <div className="mt-auto">
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
        <div className="flex items-center">
          <i className="fas fa-calendar-alt mr-2"></i>
          <span>{date}</span>
        </div>
        {score && (
          <div className="flex items-center">
            <i className="fas fa-star mr-2"></i>
            <span>{score}</span>
          </div>
        )}
      </div>
      <div className="prose prose-sm dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};
