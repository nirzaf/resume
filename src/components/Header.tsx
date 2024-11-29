import { FC } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

interface HeaderProps {
  name: string;
  title: string;
  contact: Contact;
}

const Header: FC<HeaderProps> = ({ name, title, contact }) => {
  const { elementRef, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
  });

  return (
    <header ref={elementRef} className="relative mb-12">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl transform -skew-y-2"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Main Content */}
      <div className={`relative px-8 py-10 transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Name and Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4 tracking-tight">
            {name}
          </h1>
          <div className="relative inline-block">
            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 transform -skew-x-12"></div>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium relative z-10 px-4">
              {title}
            </h2>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Details */}
          <div className="space-y-3">
            <ContactItem
              icon="fa-envelope"
              text={contact.email}
              link={`mailto:${contact.email}`}
              gradientFrom="from-blue-400"
              gradientTo="to-blue-600"
            />
            <ContactItem
              icon="fa-phone"
              text={contact.phone}
              link={`tel:${contact.phone}`}
              gradientFrom="from-blue-500"
              gradientTo="to-blue-700"
            />
            <ContactItem
              icon="fa-map-marker-alt"
              text={contact.location}
              link={`https://maps.google.com/?q=${contact.location}`}
              gradientFrom="from-blue-600"
              gradientTo="to-blue-800"
            />
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <ContactItem
              icon="fa-linkedin"
              text="LinkedIn"
              link={contact.linkedin}
              gradientFrom="from-purple-400"
              gradientTo="to-purple-600"
            />
            <ContactItem
              icon="fa-github"
              text="GitHub"
              link={contact.github}
              gradientFrom="from-purple-500"
              gradientTo="to-purple-700"
            />
            <ContactItem
              icon="fa-globe"
              text="Portfolio"
              link={contact.portfolio}
              gradientFrom="from-purple-600"
              gradientTo="to-purple-800"
            />
          </div>

          {/* Download Resume Button */}
          <div className="flex items-center justify-center">
            <button
              className="group relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-wide text-white transition-all duration-300 ease-in-out transform rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
              onClick={() => window.print()}
            >
              <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out transform translate-x-1 translate-y-1 bg-black rounded-lg opacity-10 -z-1 group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg"></span>
              <span className="relative flex items-center space-x-2">
                <i className="fas fa-download"></i>
                <span>Download Resume</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
    </header>
  );
};

interface ContactItemProps {
  icon: string;
  text: string;
  link: string;
  gradientFrom: string;
  gradientTo: string;
}

const ContactItem: FC<ContactItemProps> = ({ icon, text, link, gradientFrom, gradientTo }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50 backdrop-blur-sm"
  >
    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
      <i className={`fas ${icon} text-white text-lg`}></i>
    </div>
    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
      {text}
    </span>
  </a>
);

export default Header;
