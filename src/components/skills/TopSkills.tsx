import React from 'react';

interface Props {
  skills: string[];
}

const TopSkills: React.FC<Props> = React.memo(({ skills }) => {
  return (
    <section className="top-skills">
      <h2>Top Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
});

TopSkills.displayName = 'TopSkills';

export default TopSkills;
