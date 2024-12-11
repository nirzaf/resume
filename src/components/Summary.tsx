import { FC } from 'react';
import { SummaryProps } from '../types/resume';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { SectionCard } from './shared/SectionCard';

const Summary: FC<SummaryProps> = ({ professionalOverview, coreExpertise }) => {
  const { elementRef: contentRef, isVisible: isContentVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section className="py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10" />
      
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0607E1]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0607E1]/5 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 transform transition-all duration-1000 ${
            isContentVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          {/* Professional Overview Card */}
          <div className={`transform transition-all duration-700 delay-100 ${
            isContentVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <SectionCard
              title="Professional Overview"
              icon="fa-user-tie"
              gradientFrom="[#0607E1]/5"
              gradientTo="blue-100/50"
              darkGradientFrom="gray-900"
              darkGradientTo="gray-800"
              borderColor="[#0607E1]/20"
              darkBorderColor="blue-800/30"
              iconGradientFrom="[#0607E1]"
              iconGradientTo="blue-600"
              decorationColor="[#0607E1]"
              section={professionalOverview}
              highlightClassName="bg-[#0607E1]/5 dark:bg-blue-900/20 hover:bg-[#0607E1]/10 dark:hover:bg-blue-900/30 transform transition-all duration-300 hover:translate-x-1"
              highlightIconClassName="text-[#0607E1] dark:text-blue-400"
            />
          </div>

          {/* Core Expertise Card */}
          <div className={`transform transition-all duration-700 delay-200 ${
            isContentVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <SectionCard
              title="Core Expertise"
              icon="fa-brain"
              gradientFrom="[#0607E1]/5"
              gradientTo="[#0607E1]/10"
              darkGradientFrom="gray-900"
              darkGradientTo="gray-800"
              borderColor="[#0607E1]/20"
              darkBorderColor="[#0607E1]/30"
              iconGradientFrom="[#0607E1]"
              iconGradientTo="blue-600"
              decorationColor="[#0607E1]"
              section={coreExpertise}
              highlightClassName="bg-[#0607E1]/5 dark:bg-[#0607E1]/20 hover:bg-[#0607E1]/10 dark:hover:bg-[#0607E1]/30 transform transition-all duration-300 hover:translate-x-1 hover:scale-[1.02]"
              highlightIconClassName="text-[#0607E1] dark:text-blue-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
