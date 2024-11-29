import { FC } from 'react';
import { SkillsProps } from './skills/types';
import { SkillGrid } from './skills/SkillGrid';

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="space-y-8 animate-slide-up">
      <h2 className="section-title">Technical Skills</h2>
      <SkillGrid skills={skills} />
    </section>
  );
};

export default Skills;
