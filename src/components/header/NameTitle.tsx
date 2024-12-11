import { FC } from 'react';
import { NameTitleProps } from './types';

export const NameTitle: FC<NameTitleProps> = ({ name, title }) => {
  return (
    <div className="text-center mb-8 relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#0607E1]/10 to-[#0607E1]/5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      
      <div className="relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#0607E1] to-blue-600 transform transition-all duration-500 group-hover:scale-105">
          {name}
        </h1>
        
        <div className="relative inline-block">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
            {title}
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#0607E1] to-blue-600 transform origin-left transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
          </h2>
        </div>
      </div>
    </div>
  );
};
