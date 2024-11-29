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
      <header className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
        <div className="relative">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="w-36 h-36 mb-8 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-36 h-36 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg ring-2 ring-blue-500/20 dark:ring-purple-500/20"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                {name}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-wide">
                {title}
              </h2>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl w-full">
              {/* Contact Details */}
              <div className="space-y-4">
                <ContactItem
                  icon="fa-envelope"
                  text={contact.email}
                  onClick={() => handleContactClick(contact.email, 'email')}
                  gradientFrom="from-blue-600"
                  gradientTo="to-blue-400"
                />
                <ContactItem
                  icon="fa-mobile-alt"
                  text={contact.mobile}
                  onClick={() => handleContactClick(contact.mobile, 'mobile')}
                  gradientFrom="from-purple-600"
                  gradientTo="to-purple-400"
                />
                <ContactItem
                  icon="fa-map-marker-alt"
                  text={contact.location}
                  onClick={() => handleContactClick(contact.location, 'location')}
                  gradientFrom="from-indigo-600"
                  gradientTo="to-indigo-400"
                />
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <ContactItem
                  icon="fa-linkedin"
                  text="LinkedIn"
                  onClick={() => handleContactClick(contact.linkedin, 'linkedin')}
                  gradientFrom="from-blue-600"
                  gradientTo="to-blue-400"
                />
                <ContactItem
                  icon="fa-github"
                  text="GitHub"
                  onClick={() => handleContactClick(contact.github, 'github')}
                  gradientFrom="from-purple-600"
                  gradientTo="to-purple-400"
                />
                <ContactItem
                  icon="fa-globe"
                  text="Portfolio"
                  onClick={() => handleContactClick(contact.portfolio, 'portfolio')}
                  gradientFrom="from-indigo-600"
                  gradientTo="to-indigo-400"
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

const ContactItem: FC<ContactItemProps> = ({
  icon,
  text,
  onClick,
  gradientFrom,
  gradientTo
}) => (
  <button
    onClick={onClick}
    className="w-full group px-4 py-3 rounded-xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
  >
    <div className="flex items-center space-x-3">
      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} p-2 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <i className={`fas ${icon} text-white text-lg flex items-center justify-center h-full`}></i>
      </div>
      <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </div>
  </button>
);

export default Header;
