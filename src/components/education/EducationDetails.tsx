import { FC } from 'react';

interface EducationDetailsProps {
  location: string;
  duration: string;
  gpa?: string;
  major?: string;
  minor?: string;
  description?: string;
}

export const EducationDetails: FC<EducationDetailsProps> = ({
  location,
  duration,
  gpa,
  major,
  minor,
  description,
}) => {
  return (
    <div className="space-y-4 mb-6">
      {/* Location and Duration with Icons */}
      <div className="flex flex-wrap gap-4 text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <i className="fas fa-map-marker-alt mr-2 text-blue-500 dark:text-blue-300"></i>
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-calendar-alt mr-2 text-blue-500 dark:text-blue-300"></i>
          <span>{duration}</span>
        </div>
        {gpa && (
          <div className="flex items-center">
            <i className="fas fa-star mr-2 text-blue-500 dark:text-blue-300"></i>
            <span>GPA: {gpa}</span>
          </div>
        )}
      </div>

      {/* Major/Minor */}
      {(major || minor) && (
        <div className="space-y-2">
          {major && (
            <div className="flex items-center">
              <i className="fas fa-graduation-cap mr-2 text-blue-500 dark:text-blue-300"></i>
              <span className="text-gray-700 dark:text-gray-300">Major: {major}</span>
            </div>
          )}
          {minor && (
            <div className="flex items-center">
              <i className="fas fa-book mr-2 text-blue-500 dark:text-blue-300"></i>
              <span className="text-gray-700 dark:text-gray-300">Minor: {minor}</span>
            </div>
          )}
        </div>
      )}

      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
