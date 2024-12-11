import { FC } from 'react';
import { Contact } from './types';
import { ContactItem } from './ContactItem';

interface ContactSectionProps {
  contact: Contact;
}

export const ContactSection: FC<ContactSectionProps> = ({ contact }) => {
  const handleContactClick = (url: string, type: string) => {
    switch (type) {
      case 'email':
        window.location.href = `mailto:${url}`;
        break;
      case 'mobile':
        window.location.href = `tel:${url}`;
        break;
      case 'location':
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(url)}`, '_blank', 'noopener noreferrer');
        break;
      case 'linkedin':
      case 'github':
      case 'portfolio':
        window.open(url, '_blank', 'noopener noreferrer');
        break;
    }
  };

  return (
    <div className="w-full px-4">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Contact Details */}
          <ContactItem
            icon="fa-envelope"
            text={contact.email}
            onClick={() => handleContactClick(contact.email, 'email')}
            gradientColors="from-blue-400 to-blue-600"
            darkGradientColors="dark:from-blue-300 dark:to-blue-500"
          />
          <ContactItem
            icon="fa-mobile-alt"
            text={contact.mobile}
            onClick={() => handleContactClick(contact.mobile, 'mobile')}
            gradientColors="from-purple-400 to-purple-600"
            darkGradientColors="dark:from-purple-300 dark:to-purple-500"
          />
          <ContactItem
            icon="fa-map-marker-alt"
            text={contact.location}
            onClick={() => handleContactClick(contact.location, 'location')}
            gradientColors="from-indigo-400 to-indigo-600"
            darkGradientColors="dark:from-indigo-300 dark:to-indigo-500"
          />

          {/* Social Links */}
          <ContactItem
            icon="fa-linkedin"
            text="LinkedIn"
            onClick={() => handleContactClick(contact.linkedin, 'linkedin')}
            gradientColors="from-blue-400 to-blue-600"
            darkGradientColors="dark:from-blue-300 dark:to-blue-500"
          />
          <ContactItem
            icon="fa-github"
            text="GitHub"
            onClick={() => handleContactClick(contact.github, 'github')}
            gradientColors="from-gray-600 to-gray-800"
            darkGradientColors="dark:from-gray-400 dark:to-gray-600"
          />
          <ContactItem
            icon="fa-globe"
            text="Portfolio"
            onClick={() => handleContactClick(contact.portfolio, 'portfolio')}
            gradientColors="from-green-400 to-green-600"
            darkGradientColors="dark:from-green-300 dark:to-green-500"
          />
        </div>
      </div>
    </div>
  );
};
