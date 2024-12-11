import { FC } from 'react';
import { HeaderProps } from './header/types';
import { GlassCard } from './header/GlassCard';
import { ProfileImage } from './header/ProfileImage';
import { NameTitle } from './header/NameTitle';
import { ContactSection } from './header/ContactSection';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Header: FC<HeaderProps> = ({ name, title, contact, profileImage }) => {
  const { elementRef: headerRef, isVisible: isHeaderVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div
      ref={headerRef}
      className={`transform transition-all duration-1000 ${
        isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <GlassCard className="overflow-visible relative">
        {/* Animated Background Elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-[#0607E1]/20 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-[#0607E1]/20 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0607E1]/5 rounded-full blur-3xl animate-pulse" />
        
        <div className="relative z-10">
          <div className="flex flex-col items-center">
            {/* Profile Image with Enhanced Animation */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0607E1] to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <div className="relative">
                <ProfileImage src={profileImage} />
              </div>
            </div>

            {/* Name and Title */}
            <NameTitle name={name} title={title} />

            {/* Divider */}
            <div className="w-full max-w-4xl mx-auto px-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[#0607E1]/30 to-transparent" />
            </div>

            {/* Contact Information */}
            <div className="w-full">
              <ContactSection contact={contact} />
            </div>
          </div>
        </div>

        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-900/40 backdrop-blur-xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0607E1]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0607E1]/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#0607E1_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
        </div>
      </GlassCard>
    </div>
  );
};

export default Header;