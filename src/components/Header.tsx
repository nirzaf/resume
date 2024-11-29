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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div className="relative rounded-3xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-800/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 overflow-hidden">
        {/* Glass reflections */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none"></div>
        <div className="absolute -inset-x-2 -inset-y-2 bg-white/5 dark:bg-white/5 blur-3xl rounded-[50%] pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative">
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <div className="mb-8">
              <img
                src={profileImage}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover ring-[3px] ring-white/30 dark:ring-white/10 shadow-xl"
              />
            </div>

            {/* Name and Title */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-transform duration-300 ease-out">
                {name}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 dark:from-gray-300 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ease-out tracking-wide">
                {title}
              </h2>
            </div>

            {/* Contact Information */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactItemProps {
  icon: string;
  text: string;
  onClick: () => void;
}

const ContactItem: FC<ContactItemProps> = ({
  icon,
  text,
  onClick
}) => {
  // Get color based on icon type
  const getIconColors = (icon: string) => {
    const colors = {
      'fa-envelope': 'from-blue-400/20 to-blue-600/20 group-hover:from-blue-400 group-hover:to-blue-600',
      'fa-mobile-alt': 'from-purple-400/20 to-purple-600/20 group-hover:from-purple-400 group-hover:to-purple-600',
      'fa-map-marker-alt': 'from-indigo-400/20 to-indigo-600/20 group-hover:from-indigo-400 group-hover:to-indigo-600',
      'fa-linkedin': 'from-blue-400/20 to-blue-600/20 group-hover:from-blue-400 group-hover:to-blue-600',
      'fa-github': 'from-purple-400/20 to-purple-600/20 group-hover:from-purple-400 group-hover:to-purple-600',
      'fa-globe': 'from-indigo-400/20 to-indigo-600/20 group-hover:from-indigo-400 group-hover:to-indigo-600'
    };
    return colors[icon] || 'from-gray-400/20 to-gray-600/20 group-hover:from-gray-400 group-hover:to-gray-600';
  };

  const iconColors = getIconColors(icon);

  return (
    <button
      onClick={onClick}
      className="w-full group px-4 py-3 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm border border-white/10 dark:border-white/5 transition-all duration-300 flex items-center space-x-4"
    >
      {/* Glass pebble with icon */}
      <div className="relative">
        {/* Glass pebble background */}
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${iconColors} backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg flex items-center justify-center relative overflow-hidden transition-all duration-300`}>
          {/* Light reflection */}
          <div className="absolute -inset-full h-[400%] w-[400%] top-[-150%] left-[-150%] bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-[30deg] group-hover:rotate-[40deg]"></div>
          {/* Icon */}
          <i className={`fas ${icon} text-gray-600 dark:text-gray-200 text-lg relative z-10 group-hover:text-white transition-colors duration-300`}></i>
        </div>
      </div>
      <span className="text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </button>
  );
};

export default Header;
