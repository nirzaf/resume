import { FC } from 'react';

interface ContentListProps {
  items?: string[];
  title: string;
  icon: string;
  itemIcon: string;
}

export const ContentList: FC<ContentListProps> = ({ items, title, icon, itemIcon }) => {
  if (!items?.length) return null;
  
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
        <i className={`fas ${icon} mr-2 text-blue-500 dark:text-blue-300`}></i>
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start">
            <i className={`fas ${itemIcon} mr-2 mt-1 text-blue-500 dark:text-blue-300`}></i>
            <span className="text-gray-600 dark:text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 