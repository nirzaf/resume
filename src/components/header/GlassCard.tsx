import { FC, ReactNode, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const borderTravel = keyframes`
  0% { 
    transform: translateX(-100%) translateY(0) rotate(0deg);
    offset-distance: 0%;
  }
  100% { 
    transform: translateX(0) translateY(0) rotate(0deg);
    offset-distance: 100%;
  }
`;

const CometContainer = styled.div`
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  z-index: -1;
  pointer-events: none;
  /* This ensures the comets stay on the border path */
  overflow: hidden;
`;

const Comet = styled.div`
  position: absolute;
  width: 20px;
  height: 4px;
  border-radius: 4px;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.9) 0%, rgba(147, 197, 253, 0.7) 50%, transparent 100%);
  filter: blur(2px);
  box-shadow: 0 0 8px 2px rgba(59, 130, 246, 0.6);
  
  /* Using offset-path to make the comet travel along the border */
  offset-path: path('M0,50 C0,0 100,0 100,50 C100,100 0,100 0,50z');
  offset-rotate: 0deg;
`;

const Comet1 = styled(Comet)`
  animation: ${borderTravel} 6s linear infinite;
`;

const Comet2 = styled(Comet)`
  animation: ${borderTravel} 6s linear infinite 2s;
`;

const Comet3 = styled(Comet)`
  animation: ${borderTravel} 6s linear infinite 4s;
`;

const BlueGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: -2;
  box-shadow: 0 0 15px 2px rgba(59, 130, 246, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const CardContainer = styled.div`
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    
    ${BlueGlow} {
      opacity: 1;
    }
  }
`;

export const GlassCard: FC<GlassCardProps> = ({ children, className = '' }) => {
  const [mounted, setMounted] = useState(false);

  // Handle SSR by only showing animations after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 ${className}`}>
      <CardContainer>
        {mounted && (
          <CometContainer>
            <Comet1 />
            <Comet2 />
            <Comet3 />
          </CometContainer>
        )}
        {mounted && <BlueGlow />}
        
        <div className="relative rounded-3xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-800/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 overflow-hidden">
          {/* Glass reflections */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none"></div>
          <div className="absolute -inset-x-2 -inset-y-2 bg-white/5 dark:bg-white/5 blur-3xl rounded-[50%] pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative">
            {children}
          </div>
        </div>
      </CardContainer>
    </div>
  );
};
