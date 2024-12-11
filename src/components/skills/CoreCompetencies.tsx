import React from 'react';

export interface Competency {
  name: string;
  icon: string;
  level: number;
  description?: string;
  keywords?: string[];
}

interface CoreCompetenciesProps {
  competencies: Competency[];
}

export const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({ competencies }) => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#0607E1]/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <i className="fas fa-brain text-[#0607E1] mr-3"></i>
          Core Competencies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#0607E1]/10 rounded-full flex items-center justify-center mr-4">
                  <i className={`${competency.icon} text-[#0607E1] text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {competency.name}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0607E1] transition-all duration-500 ease-out"
                    style={{ width: `${competency.level}%` }}
                  />
                </div>
                <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {competency.level}%
                </div>
              </div>

              {/* Description */}
              {competency.description && (
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {competency.description}
                </p>
              )}

              {/* Keywords */}
              {competency.keywords && competency.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {competency.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className="px-3 py-1 bg-[#0607E1]/10 text-[#0607E1] rounded-full text-sm font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
