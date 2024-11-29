import { FC } from 'react';
import { WorkExperienceProps } from './workexperience/types';
import { ExperienceItem } from './workexperience/ExperienceItem';

const WorkExperience: FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">Work Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
