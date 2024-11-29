import { FC } from 'react';

interface ExperienceDescriptionProps {
  description: string[];
}

export const ExperienceDescription: FC<ExperienceDescriptionProps> = ({ description }) => {
  return (
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      {description.map((desc, i) => (
        <li key={i}>{desc}</li>
      ))}
    </ul>
  );
};
