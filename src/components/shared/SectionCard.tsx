import { FC } from 'react';

interface SectionCardProps {
  title: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  darkGradientFrom: string;
  darkGradientTo: string;
  borderColor: string;
  darkBorderColor: string;
  iconGradientFrom: string;
  iconGradientTo: string;
  decorationColor: string;
  section: {
    description: string;
    highlights: string[];
  };
  highlightClassName: string;
  highlightIconClassName: string;
}

export const SectionCard: FC<SectionCardProps> = ({
  title,
  icon,
  gradientFrom,
  gradientTo,
  darkGradientFrom,
  darkGradientTo,
  borderColor,
  darkBorderColor,
  iconGradientFrom,
  iconGradientTo,
  decorationColor,
  section,
  highlightClassName,
  highlightIconClassName,
}) => {
  return (
    <div className="group relative">
      {/* Background blur effect */}
      <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-${decorationColor}/20 to-${decorationColor}/10 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`} />
      
      <div className={`relative rounded-xl border bg-gradient-to-br p-8 transition-all duration-300 transform group-hover:scale-[1.02] group-hover:shadow-xl backdrop-blur-sm
        from-${gradientFrom} to-${gradientTo}
        dark:from-${darkGradientFrom} dark:to-${darkGradientTo}
        border-${borderColor} dark:border-${darkBorderColor}`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-${decorationColor}/10 to-transparent blur-2xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-gradient-to-tr from-${decorationColor}/10 to-transparent blur-2xl animate-pulse" />
        
        {/* Header */}
        <div className="relative mb-6 flex items-center space-x-4">
          <div className={`rounded-xl bg-gradient-to-br p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
            from-${iconGradientFrom} to-${iconGradientTo}
            text-white`}
          >
            <i className={`fas ${icon} text-xl`}></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white tracking-wide">{title}</h3>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {section.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="space-y-4">
          {section.highlights.map((highlight, index) => (
            <div
              key={index}
              className={`group/item flex items-start space-x-3 rounded-lg p-4 transition-all duration-300 ${highlightClassName}`}
            >
              <div className="flex-shrink-0 transform transition-transform duration-300 group-hover/item:scale-110">
                <i className={`fas fa-check-circle text-lg ${highlightIconClassName}`}></i>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-200 font-medium leading-relaxed">
                  {highlight}
                </p>
              </div>
              <div className="flex-shrink-0 opacity-0 transform translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                <i className={`fas fa-arrow-right ${highlightIconClassName}`}></i>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${decorationColor}/30 to-transparent" />
      </div>
    </div>
  );
};
