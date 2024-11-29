import { FC } from 'react';
import { SkillTagProps } from './types';

export const SkillTag: FC<SkillTagProps> = ({ skill }) => {
  return (
    <span className="px-3 py-1 bg-gray-100 dark:bg-dark-lighter rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors">
      {skill}
    </span>
  );
};
