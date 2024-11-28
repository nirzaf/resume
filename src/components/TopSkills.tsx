import { FC } from 'react';

interface TopSkillsProps {
  skills: string[];
}

const TopSkills: FC<TopSkillsProps> = ({ skills }) => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">Top Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TopSkills;
