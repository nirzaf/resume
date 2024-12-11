import React from 'react';
import { TRANSITIONS } from '../../constants/theme';

interface IconBadgeProps {
  icon: string;
  text: string;
  color?: string;
  className?: string;
}

const IconBadge: React.FC<IconBadgeProps> = React.memo(({
  icon,
  text,
  color = 'blue',
  className = ''
}) => {
  return (
    <div
      className={`
        flex items-center space-x-2 px-3 py-1
        bg-${color}-50 dark:bg-${color}-900/30
        text-${color}-700 dark:text-${color}-300
        rounded-full text-sm font-medium
        ${TRANSITIONS.hover} hover:bg-${color}-100 dark:hover:bg-${color}-800/40
        ${className}
      `}
    >
      <i className={`fas ${icon} text-${color}-500 dark:text-${color}-400`} />
      <span>{text}</span>
    </div>
  );
});

IconBadge.displayName = 'IconBadge';

export default IconBadge;
