import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = React.memo(({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-gray-900">
      <main className="container w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {children}
      </main>
    </div>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
