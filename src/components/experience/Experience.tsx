import React from 'react';
import { Experience as ExperienceType } from '../../types/resume';
import ExperienceItem from './ExperienceItem';

interface Props {
  experiences: ExperienceType[];
}

const Experience: React.FC<Props> = React.memo(({ experiences }) => {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
