import { FC } from 'react';
import { SkillCategoryCardProps } from './types';
import { SkillTag } from './SkillTag';

export const SkillCategoryCard: FC<SkillCategoryCardProps> = ({ category, skills }) => {
  return (
    <div className="card hover:scale-[1.02] transition-transform duration-300">
      <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">
        {category}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <SkillTag key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
};
