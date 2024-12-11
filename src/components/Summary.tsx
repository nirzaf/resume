import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SummaryProps } from './summary/types';
import { SectionCard } from './summary/SectionCard';
import { DecorativeElements } from './summary/DecorativeElements';

const Summary: FC<SummaryProps> = ({ professionalOverview, coreExpertise }) => {
  const { elementRef: contentRef, isVisible: isContentVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section className="mb-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div
        ref={contentRef}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transform transition-all duration-700 ${
          isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        {/* Professional Overview Card */}
        <SectionCard
          title="Professional Overview"
          icon="fa-user-tie"
          gradientFrom="blue-50"
          gradientTo="blue-100"
          darkGradientFrom="blue-900/20"
          darkGradientTo="blue-800/20"
          borderColor="blue-200"
          darkBorderColor="blue-700"
          iconGradientFrom="blue-400"
          iconGradientTo="blue-600"
          decorationColor="blue-500"
          section={professionalOverview}
          highlightClassName="bg-blue-100/50 dark:bg-blue-800/30 hover:bg-blue-100 dark:hover:bg-blue-800/50 transform transition-all duration-300 hover:translate-x-1"
          highlightIconClassName="text-blue-500 dark:text-blue-400"
        />

        {/* Core Expertise Card */}
        <SectionCard
          title="Core Expertise"
          icon="fa-brain"
          gradientFrom="purple-50"
          gradientTo="purple-100"
          darkGradientFrom="purple-900/20"
          darkGradientTo="purple-800/20"
          borderColor="purple-200"
          darkBorderColor="purple-700"
          iconGradientFrom="purple-400"
          iconGradientTo="purple-600"
          decorationColor="purple-500"
          section={coreExpertise}
          highlightClassName="bg-purple-100/50 dark:bg-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-800/50 transform transition-all duration-300 hover:translate-x-1"
          highlightIconClassName="text-purple-500 dark:text-purple-400"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Summary;
