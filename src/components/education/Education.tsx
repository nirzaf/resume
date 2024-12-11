import React from 'react';
import { Education as EducationType } from '../../types/resume';
import EducationItem from './EducationItem';

interface Props {
  education: EducationType[];
}

const Education: React.FC<Props> = React.memo(({ education }) => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <EducationItem key={index} {...edu} />
        ))}
      </div>
    </section>
  );
});

Education.displayName = 'Education';

export default Education;
