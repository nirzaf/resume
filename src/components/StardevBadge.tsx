import React, { useEffect, useState } from 'react';

const StardevBadge: React.FC = () => {
  // Add state to track scroll position for enhanced effects
  const [scrolled, setScrolled] = useState(false);
  
  // Listen for scroll events to add visual effects when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  return (
    <div 
      className={`fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-[#0607E1]/10 via-[#0607E1]/20 to-[#0607E1]/10 py-2 px-4 overflow-hidden z-50 transition-all duration-300 ${scrolled ? 'shadow-md backdrop-blur-sm' : 'shadow-lg'}`}
      style={{ boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between relative z-10">
        <div className="flex flex-col sm:flex-row items-center mb-3 sm:mb-0 w-full sm:w-auto text-center sm:text-left">
          <span className="text-[#0607E1] font-bold mr-2 text-lg">🏆 #1 Rated in 🇶🇦</span>
          <span className="text-gray-700 dark:text-gray-300 text-sm">by ⭐ Dev</span>
        </div>
        
        <div className="flex items-center justify-center w-full sm:w-auto">
          <a 
            href="https://stardev.io/top/developers/all/in/qatar/doha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center sm:hover:scale-105 transition-all duration-300"
          >
            {/* Image only visible on desktop */}
            <img 
              alt="Check out nirzaf's profile on stardev.io" 
              src="https://stardev.io/developers/nirzaf/badge/languages/country.svg"
              className="hidden sm:block h-10 w-auto rounded shadow-sm hover:shadow-md transition-shadow duration-300" 
            />
            {/* Button-styled link that looks good on mobile (centered) and desktop */}
            <span className="mx-auto sm:mx-0 px-6 py-2 bg-[#0607E1]/90 text-white rounded-lg text-sm font-medium hover:bg-[#0607E1] transition-colors duration-300 shadow-sm hover:shadow-md sm:ml-2 flex items-center justify-center">
              View Profile
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StardevBadge;