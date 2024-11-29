import { FC } from 'react';

interface TechnologyTagsProps {
  technologies?: string[];
}

export const TechnologyTags: FC<TechnologyTagsProps> = ({ technologies }) => {
  if (!technologies?.length) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span
          key={i}
          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};
