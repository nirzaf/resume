import React from 'react';

interface CertificationItemProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
  icon?: string;
}

export const CertificationItem: React.FC<CertificationItemProps> = ({
  title,
  issuer,
  date,
  credentialId,
  credentialUrl,
  description,
  skills,
  icon
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="relative h-28 bg-[#0607E1] p-6">
        {/* Icon */}
        <div className="absolute -bottom-6 right-6 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
          <i className={`fas ${icon || 'fa-certificate'} text-2xl text-[#0607E1]`}></i>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center text-white/90">
          <i className="fas fa-building mr-2 text-white/75"></i>
          <span>{issuer}</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Date and Credential ID */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <i className="fas fa-calendar-alt mr-2 text-[#0607E1]"></i>
            <span className="text-gray-700 dark:text-gray-300">{date}</span>
          </div>
          {credentialId && (
            <div className="flex items-center">
              <i className="fas fa-id-badge mr-2 text-[#0607E1]"></i>
              <span className="text-gray-700 dark:text-gray-300">{credentialId}</span>
            </div>
          )}
        </div>

        {/* Description */}
        {description && (
          <div className="bg-[#0607E1]/5 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white flex items-center">
              <i className="fas fa-tools mr-2 text-[#0607E1]"></i>
              Skills Covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#0607E1]/10 text-[#0607E1] rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verify Button */}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#0607E1] text-white rounded-lg hover:bg-[#0607E1]/90 transition-colors"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            Verify Credential
          </a>
        )}
      </div>
    </div>
  );
};
