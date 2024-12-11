import { FC } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SkillCardProps {
  skill: string;
  description: string;
  icon: string;
  colorClass: string;
  index: number;
}

const SkillCard: FC<SkillCardProps> = ({
  skill,
  description,
  icon,
  colorClass,
  index
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 
        hover:scale-[1.02] hover:shadow-lg ${colorClass}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
      
      {/* Icon */}
      <div className="relative mb-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-lg">
          <i className={`fas ${icon} text-2xl text-white`}></i>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-2 text-xl font-bold text-white">{skill}</h3>
        <p className="text-white/90">{description}</p>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};

interface CoreCompetenciesProps {
  skills: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
}

export const CoreCompetencies: FC<CoreCompetenciesProps> = ({ skills }) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  const colorClasses = [
    'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700',
    'bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700',
    'bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700',
    'bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700',
  ];

  return (
    <section className="relative py-16">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800/50" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-400/10 to-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Core Competencies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Key technical skills and expertise that drive innovation and results
          </p>
        </div>

        {/* Skills grid */}
        <div
          ref={elementRef}
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.name}
              description={skill.description}
              icon={skill.icon}
              colorClass={colorClasses[index % colorClasses.length]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
