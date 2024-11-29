import { FC } from 'react';
import { WorkExperience } from '../../types/experience';
import { getCompanyIcon } from '../../utils/iconUtils';

interface ExperienceHeaderProps {
  exp: WorkExperience;
}

export const ExperienceHeader: FC<ExperienceHeaderProps> = ({ exp }) => (
  <div className="flex items-start space-x-4 mb-6">
    <CompanyIcon company={exp.company} />
    <HeaderContent title={exp.title} company={exp.company} />
  </div>
);

const CompanyIcon: FC<{ company: string }> = ({ company }) => (
  <div className="flex-shrink-0">
    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center shadow-inner">
      <i className={`fas ${getCompanyIcon(company)} text-3xl text-blue-500 dark:text-blue-300`}></i>
    </div>
  </div>
);

const HeaderContent: FC<{ title: string; company: string }> = ({ title, company }) => (
  <div className="flex-grow">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
      {title}
    </h3>
    <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
      {company}
    </p>
  </div>
); 