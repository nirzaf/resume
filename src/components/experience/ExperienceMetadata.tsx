import { FC } from 'react';
import { WorkExperience } from '../../types/experience';

interface MetadataProps {
  exp: WorkExperience;
}

export const ExperienceMetadata: FC<MetadataProps> = ({ exp }) => (
  <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400 mb-4">
    <MetadataItem icon="fa-map-marker-alt" text={exp.location} />
    <MetadataItem icon="fa-calendar-alt" text={exp.duration} />
    {exp.teamSize && <MetadataItem icon="fa-users" text={`Team of ${exp.teamSize}`} />}
    {exp.projectCount && <MetadataItem icon="fa-project-diagram" text={`${exp.projectCount} Projects`} />}
  </div>
);

const MetadataItem: FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <div className="flex items-center">
    <i className={`fas ${icon} mr-2 text-blue-500 dark:text-blue-300`}></i>
    <span>{text}</span>
  </div>
); 