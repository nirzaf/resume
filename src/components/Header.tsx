import { FC } from 'react';
import { HeaderProps } from './header/types';
import { GlassCard } from './header/GlassCard';
import { ProfileImage } from './header/ProfileImage';
import { NameTitle } from './header/NameTitle';
import { ContactSection } from './header/ContactSection';

const Header: FC<HeaderProps> = ({ name, title, contact, profileImage }) => {
  return (
    <GlassCard>
      <div className="flex flex-col items-center">
        <ProfileImage src={profileImage} />
        <NameTitle name={name} title={title} />
        <ContactSection contact={contact} />
      </div>
    </GlassCard>
  );
};

export default Header;