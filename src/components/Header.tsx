import { FC } from 'react';
import { HeaderProps } from './header/types';
import { GlassCard } from './header/GlassCard';
import { ProfileImage } from './header/ProfileImage';
import { NameTitle } from './header/NameTitle';
import { ContactSection } from './header/ContactSection';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { DownloadButton } from './header/DownloadButton';

const Header: FC<HeaderProps> = ({ name, taglines, contact, profileImage }) => {
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

      <GlassCard>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-8">
          <ProfileImage src={profileImage} alt={name} />
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <NameTitle name={name} taglines={taglines} />
            <ContactSection contact={contact} />
          </div>
          <DownloadButton />
        </div>
      </GlassCard>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;