import { FC } from 'react';

interface Qualification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

interface OtherQualificationsProps {
  qualifications: Qualification[];
}

const OtherQualifications: FC<OtherQualificationsProps> = ({ qualifications }) => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-3 text-blue-600">Other Qualifications</h2>
      <div className="space-y-4">
        {qualifications.map((qual, index) => (
          <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{qual.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{qual.issuer}</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{qual.date}</p>
            </div>
            {qual.description && (
              <p className="text-gray-700 dark:text-gray-300 text-sm">{qual.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherQualifications;
