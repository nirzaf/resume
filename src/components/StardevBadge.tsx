import React from 'react';

const StardevBadge: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0607E1]/10 via-[#0607E1]/20 to-[#0607E1]/10 py-2 px-4 shadow-lg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between relative z-10">
        <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
          <span className="text-[#0607E1] font-bold mr-2 text-lg">🏆 #1 Dev in 🇶🇦</span>
          <span className="text-gray-700 dark:text-gray-300 text-sm">by stardev.io</span>
        </div>
        
        <div className="flex items-center">
          <a 
            href="https://stardev.io/developers/nirzaf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:scale-105 transition-transform duration-300"
          >
            <img 
              alt="Check out nirzaf's profile on stardev.io" 
              src="https://stardev.io/developers/nirzaf/badge/languages/country.svg"
              className="h-8 sm:h-10 w-auto rounded shadow-sm hover:shadow-md transition-shadow duration-300" 
            />
            <span className="ml-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-[#0607E1] dark:hover:text-blue-400 transition-colors duration-300">
              View Profile →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StardevBadge;
