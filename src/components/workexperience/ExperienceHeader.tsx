import { FC } from 'react';

interface ExperienceHeaderProps {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
}

export const ExperienceHeader: FC<ExperienceHeaderProps> = ({
  position,
  company,
  startDate,
  endDate,
}) => {
  return (
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{position}</h3>
        <p className="text-gray-600 dark:text-gray-400">{company}</p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {startDate} - {endDate}
      </p>
    </div>
  );
};
