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
    <section className="mb-12">
      <div
        ref={contentRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-700 ${
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
          borderColor="blue-100"
          darkBorderColor="blue-800"
          iconGradientFrom="blue-400"
          iconGradientTo="blue-600"
          decorationColor="blue-500"
          section={professionalOverview}
          highlightClassName="bg-blue-100 dark:bg-blue-900/50"
          highlightIconClassName="text-blue-500 dark:text-blue-300"
        />

        {/* Core Expertise Card */}
        <SectionCard
          title="Core Expertise"
          icon="fa-brain"
          gradientFrom="purple-50"
          gradientTo="purple-100"
          darkGradientFrom="purple-900/20"
          darkGradientTo="purple-800/20"
          borderColor="purple-100"
          darkBorderColor="purple-800"
          iconGradientFrom="purple-400"
          iconGradientTo="purple-600"
          decorationColor="purple-500"
          section={coreExpertise}
          highlightClassName="bg-purple-100 dark:bg-purple-900/50"
          highlightIconClassName="text-purple-500 dark:text-purple-300"
        />

        <DecorativeElements />
      </div>
    </section>
  );
};

export default Summary;
