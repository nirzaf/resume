import { FC } from 'react';

interface ProfileImageProps {
  src: string;
}

export const ProfileImage: FC<ProfileImageProps> = ({ src }) => {
  return (
    <div className="mb-8 group">
      {/* Outer ring with gradient animation */}
      <div className="
        relative inline-block
        p-1 rounded-full
        bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500
        animate-gradient-spin
      ">
        {/* Inner container with hover effect */}
        <div className="
          relative
          rounded-full
          overflow-hidden
          transform transition-transform duration-500
          group-hover:scale-105
        ">
          {/* Profile image */}
          <img
            src={src}
            alt="Profile"
            className="
              w-32 h-32 sm:w-40 sm:h-40
              object-cover
              rounded-full
              transition-all duration-500
              group-hover:brightness-110
            "
          />

          {/* Overlay with shine effect */}
          <div className="
            absolute inset-0
            bg-gradient-to-tr from-white/0 via-white/30 to-white/0
            translate-x-[-200%] translate-y-[-200%]
            group-hover:translate-x-[200%] group-hover:translate-y-[200%]
            transition-transform duration-1000
            transform rotate-45
          "/>

          {/* Subtle inner shadow */}
          <div className="
            absolute inset-0
            rounded-full
            shadow-inner
            pointer-events-none
          "/>
        </div>
      </div>
    </div>
  );
};
