import { FC } from 'react';

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
}

const Header: FC<HeaderProps> = ({ name, title, location, phone, email, links }) => {
  return (
    <header className="text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform -skew-y-6"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6 py-8">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 mx-auto mb-6 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-spin-slow opacity-75 blur-lg group-hover:opacity-100 transition-opacity"></div>
          <img
            src="https://ik.imagekit.io/fazrinphcc/myprofilepic%20-%20crpped.jpg?updatedAt=1725949317901"
            alt="Profile"
            className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-dark-light shadow-xl transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-gradient">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            {title}
          </h2>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* Left Column - Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <i className="fas fa-map-marker-alt text-primary" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">{location}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <i className="fas fa-phone text-primary" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">{phone}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <i className="fas fa-envelope text-primary" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">{email}</span>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="space-y-3">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 group hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800 dark:bg-gray-700 flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                <i className="fab fa-github text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary">GitHub</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 group hover:text-[#0077b5] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0077b5] flex items-center justify-center group-hover:bg-[#006396] transition-colors">
                <i className="fab fa-linkedin-in text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-[#0077b5]">LinkedIn</span>
            </a>
            <a
              href={links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 group hover:text-secondary transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-secondary/90 transition-colors">
                <i className="fas fa-globe text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-secondary">Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
