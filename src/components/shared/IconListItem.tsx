import React from 'react';

interface IconListItemProps {
  icon: string;
  text: string;
  iconColor?: string;
  className?: string;
}

const IconListItem: React.FC<IconListItemProps> = React.memo(({
  icon,
  text,
  iconColor = 'green',
  className = ''
}) => {
  return (
    <li className={`flex items-start text-gray-700 dark:text-gray-300 ${className}`}>
      <i className={`fas ${icon} text-${iconColor}-500 mt-1 mr-2`} />
      <span>{text}</span>
    </li>
  );
});

IconListItem.displayName = 'IconListItem';

export default IconListItem;
