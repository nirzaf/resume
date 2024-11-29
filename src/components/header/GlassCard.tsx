import { FC, ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard: FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 ${className}`}>
      <div className="relative rounded-3xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-800/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 overflow-hidden">
        {/* Glass reflections */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none"></div>
        <div className="absolute -inset-x-2 -inset-y-2 bg-white/5 dark:bg-white/5 blur-3xl rounded-[50%] pointer-events-none"></div>
        
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
};
