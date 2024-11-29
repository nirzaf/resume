import { FC } from 'react';
import { ContactItemProps } from './types';

export const ContactItem: FC<ContactItemProps> = ({
  icon,
  text,
  onClick
}) => {
  // Get color based on icon type
  const getIconColors = (icon: string) => {
    const colors: { [key: string]: string } = {
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
