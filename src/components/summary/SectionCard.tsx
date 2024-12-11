import { FC } from 'react';
import { SectionCardProps } from './types';
import { HighlightItem } from './HighlightItem';

export const SectionCard: FC<SectionCardProps> = ({
  title,
  icon,
  section,
  gradientFrom,
  gradientTo,
  darkGradientFrom,
  darkGradientTo,
  borderColor,
  darkBorderColor,
  iconGradientFrom,
  iconGradientTo,
  decorationColor,
  highlightClassName,
  highlightIconClassName,
}) => {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl
      bg-gradient-to-br from-${gradientFrom} to-${gradientTo}
      dark:from-${darkGradientFrom} dark:to-${darkGradientTo}
      border border-${borderColor} dark:border-${darkBorderColor}
      shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1
      p-6 md:p-8
    `}>
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className={`
          w-12 h-12 rounded-xl
          bg-gradient-to-br from-${iconGradientFrom} to-${iconGradientTo}
          flex items-center justify-center
          shadow-lg
        `}>
          <i className={`fas ${icon} text-2xl text-white`}></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {section.text}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 gap-3">
          {section.highlights.map((highlight, index) => (
            <HighlightItem
              key={index}
              highlight={highlight}
              className={highlightClassName}
              iconClassName={highlightIconClassName}
            />
          ))}
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className={`absolute -top-10 -right-10 w-20 h-20 bg-${decorationColor}/10 rounded-full blur-xl`} />
      <div className={`absolute -bottom-10 -left-10 w-20 h-20 bg-${decorationColor}/10 rounded-full blur-xl`} />
    </div>
  );
};
