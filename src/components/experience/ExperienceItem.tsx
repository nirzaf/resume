import React from 'react';
import { Experience } from '../../types/resume';

const ExperienceItem: React.FC<Experience> = React.memo(({
  title,
  company,
  location,
  duration,
  description,
  teamSize,
  projectCount,
  responsibilities,
  achievements,
  technologies
}) => {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{title}</h3>
        <div className="company-info">
          <span>{company}</span>
          <span>{location}</span>
          <span>{duration}</span>
        </div>
      </div>
      
      <p>{description}</p>
      
      <div className="metrics">
        <span>Team Size: {teamSize}</span>
        <span>Projects: {projectCount}</span>
      </div>

      <div className="responsibilities">
        <h4>Key Responsibilities</h4>
        <ul>
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>

      <div className="achievements">
        <h4>Key Achievements</h4>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div className="technologies">
        <h4>Technologies Used</h4>
        <div className="tech-tags">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
});

ExperienceItem.displayName = 'ExperienceItem';

export default ExperienceItem;
