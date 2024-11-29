import { FC } from 'react';

interface Contact {
  email: string;
  mobile: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

interface HeaderProps {
  name: string;
  title: string;
  contact: Contact;
  profileImage: string;
}

const Header: FC<HeaderProps> = ({ name, title, contact, profileImage }) => {
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <header className="relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
        <div className="relative">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-32 h-32 mb-8">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {name}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                {title}
              </h2>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
              {/* Contact Details */}
              <div className="space-y-3">
                <ContactItem
                  icon="fa-envelope"
                  text={contact.email}
                  onClick={() => handleContactClick(contact.email, 'email')}
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-600"
                />
                <ContactItem
                  icon="fa-mobile-alt"
                  text={contact.mobile}
                  onClick={() => handleContactClick(contact.mobile, 'mobile')}
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-600"
                />
                <ContactItem
                  icon="fa-map-marker-alt"
                  text={contact.location}
                  onClick={() => handleContactClick(contact.location, 'location')}
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-600"
                />
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <ContactItem
                  icon="fa-linkedin"
                  text="LinkedIn"
                  onClick={() => handleContactClick(contact.linkedin, 'linkedin')}
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-600"
                />
                <ContactItem
                  icon="fa-github"
                  text="GitHub"
                  onClick={() => handleContactClick(contact.github, 'github')}
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-600"
                />
                <ContactItem
                  icon="fa-globe"
                  text="Portfolio"
                  onClick={() => handleContactClick(contact.portfolio, 'portfolio')}
                  gradientFrom="from-blue-500"
                  gradientTo="to-blue-600"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

interface ContactItemProps {
  icon: string;
  text: string;
  onClick: () => void;
  gradientFrom: string;
  gradientTo: string;
}

const ContactItem: FC<ContactItemProps> = ({ icon, text, onClick, gradientFrom, gradientTo }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
  >
    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-sm`}>
      <i className={`fas ${icon} text-white text-lg`}></i>
    </div>
    <span className="text-gray-700 dark:text-gray-300">
      {text}
    </span>
  </button>
);

export default Header;
