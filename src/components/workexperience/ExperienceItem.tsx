import { FC } from 'react';
import { ExperienceItemProps } from './types';
import { ExperienceHeader } from './ExperienceHeader';
import { ExperienceDescription } from './ExperienceDescription';
import { TechnologyTags } from './TechnologyTags';

export const ExperienceItem: FC<ExperienceItemProps> = ({
  position,
  company,
  startDate,
  endDate,
  description,
  technologies,
}) => {
  return (
    <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
      <ExperienceHeader
        position={position}
        company={company}
        startDate={startDate}
        endDate={endDate}
      />
      <ExperienceDescription description={description} />
      <TechnologyTags technologies={technologies} />
    </div>
  );
};
