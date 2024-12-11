import React from 'react';
import { Experience as ExperienceType } from '../types/resume';
import ExperienceCard from './experience/ExperienceCard';

interface Props {
  experiences: ExperienceType[];
}

const Experience: React.FC<Props> = React.memo(({ experiences }) => {
  return (
    <section className="experience-section py-12 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Professional Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              className="transform transition-all duration-500 hover:scale-[1.02]"
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
