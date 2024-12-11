import React from 'react';
import { Contact } from '../../types/resume';

interface ContactInfoProps {
  contact: Contact;
}

const ContactInfo: React.FC<ContactInfoProps> = React.memo(({ contact }) => {
  const { email, mobile, location, linkedin, github, portfolio } = contact;

  return (
    <div className="contact-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="contact-item flex items-center space-x-2">
        <i className="fas fa-envelope text-blue-500" />
        <a href={`mailto:${email}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          {email}
        </a>
      </div>
      
      <div className="contact-item flex items-center space-x-2">
        <i className="fas fa-phone text-blue-500" />
        <a href={`tel:${mobile}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          {mobile}
        </a>
      </div>
      
      <div className="contact-item flex items-center space-x-2">
        <i className="fas fa-map-marker-alt text-blue-500" />
        <span className="text-gray-700 dark:text-gray-300">{location}</span>
      </div>
      
      <div className="contact-item flex items-center space-x-2">
        <i className="fab fa-linkedin text-blue-500" />
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          LinkedIn
        </a>
      </div>
      
      <div className="contact-item flex items-center space-x-2">
        <i className="fab fa-github text-blue-500" />
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          GitHub
        </a>
      </div>
      
      <div className="contact-item flex items-center space-x-2">
        <i className="fas fa-globe text-blue-500" />
        <a href={portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          Portfolio
        </a>
      </div>
    </div>
  );
});

ContactInfo.displayName = 'ContactInfo';

export default ContactInfo;
