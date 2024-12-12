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
    <div className="group relative h-full">
      {/* Background blur effect */}
      <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-${decorationColor}/20 to-${decorationColor}/10 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`} />
      
      <div className={`relative h-full rounded-xl border bg-gradient-to-br p-4 sm:p-6 md:p-8 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm
        from-${gradientFrom} to-${gradientTo}
        dark:from-${darkGradientFrom} dark:to-${darkGradientTo}
        border-${borderColor} dark:border-${darkBorderColor}
        flex flex-col`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-${decorationColor}/10 to-transparent blur-2xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-gradient-to-tr from-${decorationColor}/10 to-transparent blur-2xl animate-pulse" />
        
        {/* Card Header */}
        <div className="flex items-center space-x-3 mb-4">
          <i className={`fas ${icon} text-xl sm:text-2xl bg-gradient-to-r from-${iconGradientFrom} to-${iconGradientTo} bg-clip-text text-transparent`} />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
          {section.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mt-auto">
          {section.highlights.map((highlight, index) => (
            <li
              key={index}
              className={`flex items-start space-x-2 rounded-lg p-2 text-sm sm:text-base ${highlightClassName}`}
            >
              <i className={`fas fa-check-circle mt-1 ${highlightIconClassName}`} />
              <span className="flex-1">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${decorationColor}/30 to-transparent" />
      </div>
    </div>
  );
};
