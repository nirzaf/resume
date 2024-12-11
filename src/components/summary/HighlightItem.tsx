import { FC } from 'react';
import { Highlight } from './types';

interface HighlightItemProps {
  highlight: Highlight;
  className?: string;
  iconClassName?: string;
}

export const HighlightItem: FC<HighlightItemProps> = ({
  highlight,
  className = '',
  iconClassName = '',
}) => {
  return (
    <div
      className={`
        rounded-xl p-4
        flex items-center space-x-4
        ${className}
      `}
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-700 shadow-md flex items-center justify-center">
          <i className={`fas ${highlight.icon} ${iconClassName}`}></i>
        </div>
      </div>
      <span className="text-gray-700 dark:text-gray-200 font-medium">
        {highlight.text}
      </span>
    </div>
  );
};
