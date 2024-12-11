import { FC } from 'react';

interface ContactItemProps {
  icon: string;
  text: string;
  onClick: () => void;
  gradientColors: string;
  darkGradientColors: string;
}

export const ContactItem: FC<ContactItemProps> = ({
  icon,
  text,
  onClick,
  gradientColors,
  darkGradientColors,
}) => {
  return (
    <button
      onClick={onClick}
      className="
        group w-full
        p-3 rounded-xl
        bg-white/5 dark:bg-white/5
        hover:bg-white/10 dark:hover:bg-white/10
        backdrop-blur-sm
        border border-white/10 dark:border-white/5
        transform transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
      "
    >
      <div className="flex items-center space-x-3">
        {/* Icon Container */}
        <div className="relative flex-shrink-0">
          {/* Gradient Background */}
          <div className={`
            w-10 h-10 rounded-lg
            bg-gradient-to-br ${gradientColors} ${darkGradientColors}
            flex items-center justify-center
            transform transition-all duration-300
            group-hover:scale-110 group-hover:rotate-3
          `}>
            {/* Icon */}
            <i className={`
              fas ${icon}
              text-white text-lg
              transform transition-transform duration-300
              group-hover:scale-110
            `}></i>

            {/* Shine Effect */}
            <div className="
              absolute inset-0 rounded-lg
              bg-gradient-to-r from-transparent via-white/30 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              -rotate-45
            "></div>
          </div>
        </div>

        {/* Text */}
        <span className="
          flex-grow text-left
          text-sm sm:text-base
          font-medium
          text-gray-700 dark:text-gray-300
          group-hover:text-gray-900 dark:group-hover:text-white
          transition-colors duration-300
        ">
          {text}
        </span>

        {/* Arrow Icon */}
        <i className="
          fas fa-arrow-right
          text-gray-400
          transform transition-all duration-300
          group-hover:translate-x-1 group-hover:text-gray-600
          dark:text-gray-500 dark:group-hover:text-white
          opacity-0 group-hover:opacity-100
        "></i>
      </div>
    </button>
  );
};
