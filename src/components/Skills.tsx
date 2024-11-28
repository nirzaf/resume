import { FC } from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="space-y-8 animate-slide-up">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <div key={index} className="card hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-lg font-semibold text-primary dark:text-white mb-4">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-dark-lighter rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
