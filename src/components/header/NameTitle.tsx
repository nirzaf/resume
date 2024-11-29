import { FC } from 'react';

interface NameTitleProps {
  name: string;
  title: string;
}

export const NameTitle: FC<NameTitleProps> = ({ name, title }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-transform duration-300 ease-out">
        {name}
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 dark:from-gray-300 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ease-out tracking-wide">
        {title}
      </h2>
    </div>
  );
};
