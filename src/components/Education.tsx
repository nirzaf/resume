import { FC } from 'react';
import { EducationProps } from './education/types';
import { EducationCard } from './education/EducationCard';
import { AnimatedTitle } from './education/AnimatedTitle';

const Education: FC<EducationProps> = ({ education }) => {
  return (
    <section className="mb-8">
      <AnimatedTitle title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <EducationCard key={index} {...edu} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;