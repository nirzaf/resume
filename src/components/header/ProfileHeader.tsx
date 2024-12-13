import React from 'react';
import { HeaderData } from '../../types/resume';
import ContactInfo from './ContactInfo';
import { TypeAnimation } from 'react-type-animation';

interface ProfileHeaderProps {
  header: HeaderData;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = React.memo(({ header }) => {
  const { name, taglines, profileImage, contact } = header;

  const animationSequence = taglines.reduce<(string | number)[]>((sequence, tagline) => {
    return [...sequence, 
      `${tagline.prepend} ${tagline.text}`,
      3000
    ];
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="w-32 h-32 md:w-40 md:h-40">
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {name}
          </h1>
          <div className="text-xl md:text-2xl mb-4 min-h-[2em] flex items-center justify-center md:justify-start">
            <span className="text-blue-500 font-medium mr-2">
              <TypeAnimation
                sequence={animationSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
          </div>
          <ContactInfo contact={contact} />
        </div>
      </div>
    </header>
  );
});

ProfileHeader.displayName = 'ProfileHeader';

export default ProfileHeader;
