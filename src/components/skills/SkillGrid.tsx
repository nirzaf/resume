import { FC } from 'react';
import { SkillGridProps } from './types';
import { SkillCategoryCard } from './SkillCategoryCard';

export const SkillGrid: FC<SkillGridProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((category, index) => (
        <SkillCategoryCard key={index} {...category} />
      ))}
    </div>
  );
};
