import { FC, useState, useEffect } from 'react';
import { NameTitleProps } from './types';

export const NameTitle: FC<NameTitleProps> = ({ name, taglines }) => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedTagline, setDisplayedTagline] = useState(taglines[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setDisplayedTagline(taglines[(currentTaglineIndex + 1) % taglines.length]);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTaglineIndex, taglines]);

  return (
    <div className="text-center mb-8 relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#0607E1]/10 to-[#0607E1]/5 rounded-2xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
      
      <div className="relative flex flex-col items-center space-y-3">
        {/* Name */}
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0607E1] to-blue-600 transform transition-all duration-500 group-hover:scale-105">
            {name}
          </h1>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#0607E1]/0 via-[#0607E1] to-[#0607E1]/0 transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
        </div>
        
        {/* Title */}
        <div className="relative">
          <div className="tagline-container h-8">
            <h2 
              className={`text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 tracking-wide animated-tagline ${
                isAnimating ? 'fade-out' : 'fade-in'
              }`}
            >
              <span className="text-blue-500 font-medium mr-1">{displayedTagline.prepend}</span>
              <span>{displayedTagline.text}</span>
            </h2>
          </div>
          
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0607E1] opacity-0 group-hover:opacity-50 transition-all duration-500 delay-200" />
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0607E1] opacity-0 group-hover:opacity-50 transition-all duration-500 delay-200" />
        </div>
      </div>

      <div className="absolute -right-8 top-0 w-1.5 h-1.5 rounded-full bg-[#0607E1]/30 animate-ping" />
      <div className="absolute -left-8 bottom-0 w-1.5 h-1.5 rounded-full bg-[#0607E1]/30 animate-ping delay-300" />
    </div>
  );
};
