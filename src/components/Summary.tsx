import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Highlight {
  icon: string;
  text: string;
}

interface SummarySection {
  text: string;
  highlights: Highlight[];
}

interface SummaryProps {
  professionalOverview: SummarySection;
  coreExpertise: SummarySection;
}

const Summary: FC<SummaryProps> = ({ professionalOverview, coreExpertise }) => {
  const { elementRef: titleRef, isVisible: isTitleVisible } = useIntersectionObserver<HTMLHeadingElement>({
    threshold: 0.5,
  });

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
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300"></div>
          <div className="relative p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-blue-100 dark:border-blue-800 h-full">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-user-tie text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white ml-4">Professional Overview</h3>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 w-16 h-16 -mt-4 -ml-4 bg-blue-500/5 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 -mb-6 -mr-6 bg-blue-500/5 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify relative z-10 mb-6">
                {professionalOverview.text}
              </p>
              <ul className="space-y-4 relative z-10">
                {professionalOverview.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 transform hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <i className={`fas ${highlight.icon} text-blue-500 dark:text-blue-300`}></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core Expertise Card */}
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl transform skew-y-2 group-hover:skew-y-0 transition-transform duration-300"></div>
          <div className="relative p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-purple-100 dark:border-purple-800 h-full">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-brain text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white ml-4">Core Expertise</h3>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-16 h-16 -mt-4 -mr-4 bg-purple-500/5 rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-purple-500/5 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify relative z-10 mb-6">
                {coreExpertise.text}
              </p>
              <ul className="space-y-4 relative z-10">
                {coreExpertise.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 transform hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                      <i className={`fas ${highlight.icon} text-purple-500 dark:text-purple-300`}></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Summary;
