import { FC, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface ProfileImageProps {
  src: string;
  alt: string;
}

const rotateGlow = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const shineEffect = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const GoldenFrame = styled.div`
  position: absolute;
  inset: -4px;
  border-radius: 100%;
  background: linear-gradient(45deg, transparent, transparent, #FFD700, #FFA500, #DAA520, transparent, transparent);
  background-size: 300% 100%;
  animation: ${shineEffect} 4s linear infinite;
  z-index: -1;
`;

const RotatingGlow = styled.div`
  position: absolute;
  inset: -8px;
  border-radius: 100%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(255, 215, 0, 0.2) 20%,
    rgba(255, 215, 0, 0.8) 40%,
    rgba(255, 215, 0, 0.2) 60%,
    transparent 80%
  );
  animation: ${rotateGlow} 4s linear infinite;
  z-index: -2;
  filter: blur(5px);
`;

export const ProfileImage: FC<ProfileImageProps> = ({ src, alt }) => {
  const [mounted, setMounted] = useState(false);

  // Handle SSR by only showing animations after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      {/* Image container */}
      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl relative z-10">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Golden frame and effects - only show when mounted (client-side) */}
      {mounted && (
        <>
          <GoldenFrame />
          <RotatingGlow />
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#DAA520]/5 blur-lg -z-10" />
        </>
      )}
    </div>
  );
};
