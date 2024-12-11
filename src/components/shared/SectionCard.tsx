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
    <div className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 transition-all duration-300 hover:shadow-lg
      from-${gradientFrom} to-${gradientTo}
      dark:from-${darkGradientFrom} dark:to-${darkGradientTo}
      border-${borderColor} dark:border-${darkBorderColor}`}
    >
      {/* Header */}
      <div className="mb-4 flex items-center space-x-3">
        <div className={`rounded-lg bg-gradient-to-br p-2
          from-${iconGradientFrom} to-${iconGradientTo}
          text-white shadow-lg`}
        >
          <i className={`fas ${icon} text-xl`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          {section.description}
        </p>
        <ul className="space-y-2">
          {section.highlights.map((highlight, index) => (
            <li
              key={index}
              className={`flex items-center space-x-2 rounded-lg p-2 transition-all duration-300 ${highlightClassName}`}
            >
              <i className={`fas fa-check-circle ${highlightIconClassName}`}></i>
              <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative elements */}
      <div className={`absolute -right-16 -top-16 h-64 w-64 rounded-full bg-${decorationColor}/5 blur-3xl`} />
      <div className={`absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-${decorationColor}/5 blur-3xl`} />
    </div>
  );
};
