import { FC } from 'react';

interface ProfileImageProps {
  src: string;
}

export const ProfileImage: FC<ProfileImageProps> = ({ src }) => {
  return (
    <div className="mb-8">
      <img
        src={src}
        alt="Profile"
        className="w-36 h-36 rounded-full object-cover ring-[3px] ring-white/30 dark:ring-white/10 shadow-xl"
      />
    </div>
  );
};
