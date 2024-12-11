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
      <GlassCard className="overflow-visible">
        {/* Background Decorations */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-purple-400/30 to-blue-400/30 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex flex-col items-center">
            {/* Profile Image with Animation */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <ProfileImage src={profileImage} />
            </div>

            {/* Name and Title */}
            <NameTitle name={name} title={title} />

            {/* Contact Information */}
            <div className="w-full max-w-4xl mx-auto">
              <ContactSection contact={contact} />
            </div>
          </div>
        </div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-blue-400/10 animate-gradient-x" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        </div>
      </GlassCard>
    </div>
  );
};

export default Header;