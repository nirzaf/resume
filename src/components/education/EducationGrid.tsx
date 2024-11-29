import { FC } from 'react';
import { EducationGridProps } from './types';
import { EducationCard } from './EducationCard';

export const EducationGrid: FC<EducationGridProps> = ({ education }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {education.map((edu, index) => (
        <EducationCard key={index} {...edu} index={index} />
      ))}
    </div>
  );
};
