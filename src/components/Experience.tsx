import { FC } from 'react';
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
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A track record of success in delivering innovative solutions
          </p>
        </div>

        {/* Experience cards */}
        <div
          ref={elementRef}
          className={`grid gap-6 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
