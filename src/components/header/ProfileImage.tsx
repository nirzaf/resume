import { FC } from 'react';

interface ProfileImageProps {
  src: string;
}

export const ProfileImage: FC<ProfileImageProps> = ({ src }) => {
  return (
    <div className="mb-8 pt-4">
      <div className="relative inline-block">
        <img
          src={src}
          alt="Profile"
          className="
            w-32 h-32 sm:w-40 sm:h-40
            object-cover
            rounded-full
            transition-all duration-300
            ring-4 ring-white dark:ring-gray-800
            shadow-lg
            hover:shadow-xl
            hover:scale-[1.02]
          "
        />
      </div>
    </div>
  );
};
