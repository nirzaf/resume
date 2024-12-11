import { FC } from 'react';
import { NameTitleProps } from './types';

export const NameTitle: FC<NameTitleProps> = ({ name, title }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient-x">
        {name}
      </h1>
      <div className="relative inline-block">
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 relative">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </h2>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
};
