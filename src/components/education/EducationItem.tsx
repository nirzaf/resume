import React from 'react';
import { Education } from '../../types/resume';

const EducationItem: React.FC<Education> = React.memo(({
  degree,
  institution,
  location,
  duration,
  description,
  courses
}) => {
  return (
    <div className="education-item">
      <div className="education-header">
        <h3>{degree}</h3>
        <div className="institution-info">
          <span>{institution}</span>
          <span>{location}</span>
          <span>{duration}</span>
        </div>
      </div>
      
      <p>{description}</p>

      <div className="courses">
        <h4>Key Courses</h4>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

EducationItem.displayName = 'EducationItem';

export default EducationItem;
