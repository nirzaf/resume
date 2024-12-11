import React from 'react';
import { Education as EducationType } from '../types/resume';
import EducationItem from './education/EducationItem';

interface Props {
  education: EducationType[];
}

const Education: React.FC<Props> = React.memo(({ education }) => {
  return (
    <section className="education-section py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#0607E1] mb-8 text-center">
          Education
        </h2>
        
        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              {...edu}
            />
          ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0607E1]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0607E1]/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
});

Education.displayName = 'Education';

export default Education;