import { FC } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImage: FC<ProfileImageProps> = ({ src, alt }) => {
  return (
    <div className="relative">
      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0607E1]/20 to-[#0607E1]/5 blur-lg -z-10" />
    </div>
  );
};
