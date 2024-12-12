import { FC } from 'react';
import { SummarySection as SummarySectionType } from '../../types/resume';

interface Props {
  title: string;
  section: SummarySectionType;
}

export const SummarySection: FC<Props> = ({ title, section }) => {
  return (
    <div className="mb-8 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-[0_2px_4px_rgba(6,7,225,0.01)] dark:shadow-[0_2px_4px_rgba(6,7,225,0.02)]">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{section.description}</p>
      <ul className="space-y-2">
        {section.highlights.map((highlight, index) => (
          <li key={index} className="flex items-center space-x-2">
            <i className="fas fa-check text-blue-500 dark:text-blue-400"></i>
            <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
