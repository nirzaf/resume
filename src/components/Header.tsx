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
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated gradient circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#0607E1]/20 to-[#0607E1]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#0607E1]/20 to-[#0607E1]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-96 bg-[#0607E1]/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMDYwN0UxIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <GlassCard className="relative overflow-visible">
        <div className="relative z-10">
          <div className="flex flex-col items-center">
            {/* Profile Image with Enhanced Animation */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0607E1] to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0607E1]/20 to-transparent rounded-full animate-spin-slow" />
                <ProfileImage src={profileImage} />
              </div>
            </div>

            {/* Name and Title */}
            <NameTitle name={name} title={title} />

            {/* Divider with animation */}
            <div className="w-full max-w-4xl mx-auto px-4 mb-8 overflow-hidden">
              <div className="relative h-px w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0607E1]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full">
              <ContactSection contact={contact} />
            </div>
          </div>
        </div>

        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-900/90 dark:to-gray-900/50 backdrop-blur-xl" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0607E1]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0607E1]/30 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(#0607E1_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] dark:opacity-[0.07]" />
        </div>
      </GlassCard>
    </div>
  );
};

export default Header;