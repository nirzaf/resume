import { FC } from 'react';

interface ContactItemProps {
  icon: string;
  text: string;
  onClick: () => void;
  gradientColors: string;
  darkGradientColors: string;
  className?: string;
}

export const ContactItem: FC<ContactItemProps> = ({
  icon,
  text,
  onClick,
  gradientColors,
  darkGradientColors,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${className}`}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Border Gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative flex items-center space-x-4">
        {/* Icon with Gradient Background */}
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientColors} ${darkGradientColors} flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-6`}>
          <i className={`fas ${icon} text-white text-xl`}></i>
        </div>
        
        {/* Text */}
        <div className="flex-1 text-left">
          <p className="text-gray-700 dark:text-gray-200 font-medium truncate transition-colors duration-300">
            {text}
          </p>
        </div>
        
        {/* Arrow Icon */}
        <div className="text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </button>
  );
};
