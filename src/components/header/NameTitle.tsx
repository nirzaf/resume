import { FC } from 'react';
import { NameTitleProps } from './types';

interface NameTitleProps {
  name: string;
  title: string;
}

export const NameTitle: FC<NameTitleProps> = ({ name, title }) => {
  return (
    <div className="text-center mb-8 relative group">
      {/* Name with animated gradient */}
      <h1 className="
        text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4
        bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600
        dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400
        bg-clip-text text-transparent
        animate-gradient-x
        transform transition-transform duration-300 hover:scale-105
      ">
        {name}
      </h1>

      {/* Animated underline */}
      <div className="
        h-1 w-32 mx-auto
        bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600
        dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400
        rounded-full
        transform origin-left transition-all duration-300
        group-hover:w-48 group-hover:scale-x-110
      " />

      {/* Title with shimmer effect */}
      <h2 className="
        relative
        text-lg sm:text-xl lg:text-2xl
        font-semibold mt-4
        text-gray-700 dark:text-gray-300
        overflow-hidden
        group-hover:text-gray-900 dark:group-hover:text-white
        transition-colors duration-300
      ">
        <span className="relative z-10">
          {title}
        </span>
        {/* Shimmer effect */}
        <div className="
          absolute top-0 -inset-full h-full w-1/2
          z-5 block transform
          -skew-x-12
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          group-hover:animate-shimmer
        " />
      </h2>
    </div>
  );
};
