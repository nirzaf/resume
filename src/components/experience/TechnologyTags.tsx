import { FC } from 'react';

interface TechnologyTagsProps {
  technologies?: string[];
}

export const TechnologyTags: FC<TechnologyTagsProps> = ({ technologies }) => {
  if (!technologies?.length) return null;
  
  return (
    <div className="mt-4 pt-4 border-t dark:border-gray-700">
      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
        <i className="fas fa-code mr-2 text-blue-500 dark:text-blue-300"></i>
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}; 