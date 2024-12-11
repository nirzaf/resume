import React from 'react';
import { Education as EducationType } from '../types/resume';
import EducationItem from './education/EducationItem';

interface Props {
  education: EducationType[];
}

const Education: React.FC<Props> = React.memo(({ education }) => {
  return (
    <section className="education-section py-12 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Education
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              {...edu}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Education.displayName = 'Education';

export default Education;