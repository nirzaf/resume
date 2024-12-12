import { FC, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExperienceCard } from './experience/ExperienceCard';
import { Experience as ExperienceType } from '../types/resume';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: FC<ExperienceProps> = ({ experiences }) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  useEffect(() => {
    console.log('Experience component mounted');
    console.log('Experiences data:', experiences);
  }, [experiences]);

  if (!experiences || experiences.length === 0) {
    console.log('No experiences data available');
    return null;
  }

  return (
    <section id="experience" className="relative py-16 w-full overflow-hidden bg-white dark:bg-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0607E1]/5 to-white dark:from-gray-900/50 dark:to-gray-800/50" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#0607E1]/10 to-[#0607E1]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-[#0607E1]/10 to-[#0607E1]/5 blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A track record of success in delivering innovative solutions
          </p>
        </div>

        {/* Experience cards */}
        <div
          ref={elementRef}
          className={`grid gap-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ minHeight: '200px' }}
        >
          {experiences.map((experience, index) => {
            console.log('Rendering experience:', experience.company);
            return (
              <ExperienceCard
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
