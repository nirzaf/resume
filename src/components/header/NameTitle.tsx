import { FC } from 'react';
import { NameTitleProps } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const animations = [
  {
    initial: { opacity: 0, y: 20, rotateX: 90 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    exit: { opacity: 0, y: -20, rotateX: -90 }
  },
  {
    initial: { opacity: 0, x: -50, scale: 0.5 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 50, scale: 0.5 }
  },
  {
    initial: { opacity: 0, scale: 1.5, filter: "blur(10px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.5, filter: "blur(10px)" }
  },
  {
    initial: { opacity: 0, rotate: -180, scale: 0 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 180, scale: 0 }
  }
];

export const NameTitle: FC<NameTitleProps> = ({ name, taglines }) => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
      setCurrentAnimation(Math.floor(Math.random() * animations.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

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
        <div className="relative h-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTaglineIndex}
              initial={animations[currentAnimation].initial}
              animate={animations[currentAnimation].animate}
              exit={animations[currentAnimation].exit}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <span className="text-lg md:text-xl">
                <span className="text-blue-500 font-medium mr-1">
                  {taglines[currentTaglineIndex].prepend}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {taglines[currentTaglineIndex].text}
                </span>
              </span>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0607E1] opacity-0 group-hover:opacity-50 transition-all duration-500 delay-200" />
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#0607E1] opacity-0 group-hover:opacity-50 transition-all duration-500 delay-200" />
        </div>
      </div>

      <div className="absolute -right-8 top-0 w-1.5 h-1.5 rounded-full bg-[#0607E1]/30 animate-ping" />
      <div className="absolute -left-8 bottom-0 w-1.5 h-1.5 rounded-full bg-[#0607E1]/30 animate-ping delay-300" />
    </div>
  );
};
