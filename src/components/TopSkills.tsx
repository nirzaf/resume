import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface TopSkillsProps {
  skills: string[];
}

const TopSkills: FC<TopSkillsProps> = ({ skills }) => {
  const { elementRef: sectionRef, isVisible: isSectionVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  const getSkillDescription = (skill: string): string => {
    const descriptions: { [key: string]: string } = {
      'JavaScript': 'Advanced proficiency in modern JavaScript development including ES6+ features, async programming, and functional paradigms.',
      'TypeScript': 'Expert in TypeScript development with strong typing practices and advanced generic implementations.',
      'React': 'Extensive experience building scalable applications with React, Redux, and modern hooks architecture.',
      'Node.js': 'Proficient in building performant backend services and RESTful APIs using Node.js and Express.',
      'Python': 'Strong command of Python for data processing, automation, and backend development.',
      'SQL': 'Expert in database design, optimization, and complex query development across multiple SQL platforms.',
      'Git': 'Advanced version control skills including branching strategies and collaborative development workflows.',
      'AWS': 'Comprehensive knowledge of cloud infrastructure and serverless architecture implementation.',
      'Docker': 'Experienced in containerization and orchestration of microservices architecture.',
      'CI/CD': 'Proficient in implementing automated testing and deployment pipelines.',
    };
    return descriptions[skill] || `Advanced expertise in ${skill} with practical implementation experience in professional environments.`;
  };

  const getSkillIcon = (skill: string): string => {
    const icons: { [key: string]: string } = {
      'JavaScript': 'fa-js',
      'TypeScript': 'fa-code',
      'React': 'fa-react',
      'Node.js': 'fa-node-js',
      'Python': 'fa-python',
      'SQL': 'fa-database',
      'Git': 'fa-git-alt',
      'AWS': 'fa-aws',
      'Docker': 'fa-docker',
      'CI/CD': 'fa-cogs',
    };
    return icons[skill] || 'fa-code';
  };

  return (
    <section className="mb-8">
      <div
        ref={sectionRef}
        className={`card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-700 ease-out ${
          isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const skillDescription = getSkillDescription(skill);
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <i className={`fas ${getSkillIcon(skill)} text-2xl text-blue-500 dark:text-blue-300`}></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {skill}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {skillDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopSkills;
