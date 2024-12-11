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
    <div className="w-full px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Details */}
          <ContactItem
            icon="fa-envelope"
            text={contact.email}
            onClick={() => handleContactClick(contact.email, 'email')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
          />
          <ContactItem
            icon="fa-mobile-alt"
            text={contact.mobile}
            onClick={() => handleContactClick(contact.mobile, 'mobile')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
          />
          <ContactItem
            icon="fa-map-marker-alt"
            text={contact.location}
            onClick={() => handleContactClick(contact.location, 'location')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
          />
          
          {/* Social Links */}
          <ContactItem
            icon="fab fa-linkedin-in"
            text="LinkedIn"
            onClick={() => handleContactClick(contact.linkedin, 'linkedin')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
          />
          <ContactItem
            icon="fab fa-github"
            text="GitHub"
            onClick={() => handleContactClick(contact.github, 'github')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
          />
          <ContactItem
            icon="fa-globe"
            text="Portfolio"
            onClick={() => handleContactClick(contact.portfolio, 'portfolio')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
          />
        </div>
      </div>
    </div>
  );
};
