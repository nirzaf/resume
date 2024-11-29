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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
      {/* Contact Details */}
      <div className="space-y-3">
        <ContactItem
          icon="fa-envelope"
          text={contact.email}
          onClick={() => handleContactClick(contact.email, 'email')}
        />
        <ContactItem
          icon="fa-mobile-alt"
          text={contact.mobile}
          onClick={() => handleContactClick(contact.mobile, 'mobile')}
        />
        <ContactItem
          icon="fa-map-marker-alt"
          text={contact.location}
          onClick={() => handleContactClick(contact.location, 'location')}
        />
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        <ContactItem
          icon="fa-linkedin"
          text="LinkedIn"
          onClick={() => handleContactClick(contact.linkedin, 'linkedin')}
        />
        <ContactItem
          icon="fa-github"
          text="GitHub"
          onClick={() => handleContactClick(contact.github, 'github')}
        />
        <ContactItem
          icon="fa-globe"
          text="Portfolio"
          onClick={() => handleContactClick(contact.portfolio, 'portfolio')}
        />
      </div>
    </div>
  );
};
