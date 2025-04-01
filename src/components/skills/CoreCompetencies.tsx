import React from 'react';

export interface Competency {
  name: string;
  icon: string;
  description?: string;
  keywords?: string[];
}

interface CoreCompetenciesProps {
  competencies: Competency[];
}

export const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({ competencies }) => {
  const getIconClass = (name: string): string => {
    const iconMap: { [key: string]: string } = {
      'React & Modern Frontend': 'fab fa-react',
      'C# & .NET Core': 'fas fa-code',
      'Cloud Architecture': 'fas fa-cloud',
      'Database Engineering': 'fas fa-database',
      'AI Tools & Agents': 'fas fa-robot',
      'Software Architecture': 'fas fa-layer-group'
    };
    return iconMap[name] || 'fas fa-code';
  };

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
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              {/* Header with Enhanced Icon */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0607E1]/10 to-[#0607E1]/5 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <i className={`${getIconClass(competency.name)} text-[#0607E1] text-2xl transform transition-all duration-300 group-hover:scale-110`}></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {competency.name}
                  </h3>
                  {competency.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {competency.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Keywords */}
              {competency.keywords && competency.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {competency.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className="px-3 py-1 bg-[#0607E1]/5 text-[#0607E1] dark:text-blue-400 rounded-full text-sm font-medium transform transition-all duration-300 hover:scale-105 hover:bg-[#0607E1]/10"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0607E1]/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
