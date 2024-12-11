import { FC } from 'react';
import { NameTitleProps } from './types';

export const NameTitle: FC<NameTitleProps> = ({ name, title }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0607E1]">
        {name}
      </h1>
      <div className="relative inline-block">
        <h2 className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 relative">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0607E1]/50 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h2>
      </div>
    </div>
  );
};
