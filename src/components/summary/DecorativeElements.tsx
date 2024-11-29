import { FC } from 'react';

export const DecorativeElements: FC = () => {
  return (
    <>
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
    </>
  );
};
