import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Technology {
  name: string;
  icon: string;
}

const TechCard: React.FC<{ tech: Technology; index: number }> = ({ tech, index }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      className="relative aspect-square w-12 sm:w-14 md:w-16 group shrink-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-500 group-hover:shadow-xl" />
      
      <div className="relative h-full w-full flex flex-col items-center justify-center p-1.5">
        <div className="relative w-6 h-6 sm:w-8 sm:h-8 mb-1 flex items-center justify-center">
          {imageError ? (
            <div className="w-full h-full rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[8px] sm:text-[10px] text-gray-600 dark:text-gray-300">
              {tech.name.slice(0, 2).toUpperCase()}
            </div>
          ) : (
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              onError={handleImageError}
              loading="lazy"
            />
          )}
        </div>

        <span className="text-[8px] sm:text-[10px] font-medium text-center tracking-wide text-gray-900 dark:text-gray-100 line-clamp-1 w-full">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};

interface TechStackProps {
  technologies: Technology[];
}

export const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
  return (
    <div className="relative mt-4 overflow-hidden">
      <motion.div
        className="flex gap-2 py-2 px-4"
        animate={{
          x: ["0%", "calc(-50%)"],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <TechCard key={`row1-${index}`} tech={tech} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
