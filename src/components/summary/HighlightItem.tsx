import { FC } from 'react';
import { Highlight } from './types';

interface HighlightItemProps extends Highlight {
  bgClassName: string;
  iconClassName: string;
}

export const HighlightItem: FC<HighlightItemProps> = ({ icon, text, bgClassName, iconClassName }) => {
  return (
    <li className="flex items-center space-x-3 transform hover:translate-x-1 transition-transform duration-200">
      <div className={`w-8 h-8 rounded-lg ${bgClassName} flex items-center justify-center`}>
        <i className={`fas ${icon} ${iconClassName}`}></i>
      </div>
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </li>
  );
};
