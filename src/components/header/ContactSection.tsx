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
    <div className="w-full px-2 sm:px-4 py-4 sm:py-6">
      <div className="max-w-4xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0607E1]/5 via-transparent to-[#0607E1]/5 rounded-2xl opacity-50" />
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {/* Contact Details */}
          <ContactItem
            icon="fa-envelope"
            text={contact.email}
            onClick={() => handleContactClick(contact.email, 'email')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
            className="transform hover:scale-105 hover:-translate-y-1"
          />
          <ContactItem
            icon="fa-mobile-alt"
            text={contact.mobile}
            onClick={() => handleContactClick(contact.mobile, 'mobile')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
            className="transform hover:scale-105 hover:-translate-y-1"
          />
          <ContactItem
            icon="fa-map-marker-alt"
            text={contact.location}
            onClick={() => handleContactClick(contact.location, 'location')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
            className="transform hover:scale-105 hover:-translate-y-1"
          />
          
          {/* Social Links */}
          <ContactItem
            icon="fab fa-linkedin-in"
            text="LinkedIn"
            onClick={() => handleContactClick(contact.linkedin, 'linkedin')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
            className="transform hover:scale-105 hover:-translate-y-1"
          />
          <ContactItem
            icon="fab fa-github"
            text="GitHub"
            onClick={() => handleContactClick(contact.github, 'github')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
            className="transform hover:scale-105 hover:-translate-y-1"
          />
          <ContactItem
            icon="fa-globe"
            text="Portfolio"
            onClick={() => handleContactClick(contact.portfolio, 'portfolio')}
            gradientColors="from-[#0607E1] to-blue-600"
            darkGradientColors="dark:from-blue-400 dark:to-blue-600"
            className="transform hover:scale-105 hover:-translate-y-1"
          />
        </div>

        {/* Decorative corners */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#0607E1]/30" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#0607E1]/30" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#0607E1]/30" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#0607E1]/30" />
      </div>
    </div>
  );
};
