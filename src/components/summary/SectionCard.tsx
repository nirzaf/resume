import { FC } from 'react';
import { SectionCardProps } from './types';
import { HighlightItem } from './HighlightItem';

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
    <div className="relative overflow-hidden group">
      <div className={`absolute inset-0 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} dark:from-${darkGradientFrom} dark:to-${darkGradientTo} rounded-xl transform -skew-y-2 group-hover:skew-y-0 transition-transform duration-300`}></div>
      <div className={`relative p-8 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-${borderColor} dark:border-${darkBorderColor} h-full`}>
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${iconGradientFrom} to-${iconGradientTo} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
            <i className={`fas ${icon} text-2xl text-white`}></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white ml-4">{title}</h3>
        </div>
        <div className="relative">
          <div className={`absolute top-0 left-0 w-16 h-16 -mt-4 -ml-4 bg-${decorationColor}/5 rounded-full`}></div>
          <div className={`absolute bottom-0 right-0 w-24 h-24 -mb-6 -mr-6 bg-${decorationColor}/5 rounded-full`}></div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify relative z-10 mb-6">
            {section.text}
          </p>
          <ul className="space-y-4 relative z-10">
            {section.highlights.map((highlight, index) => (
              <HighlightItem
                key={index}
                {...highlight}
                bgClassName={highlightClassName}
                iconClassName={highlightIconClassName}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
