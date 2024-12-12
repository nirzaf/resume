import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = React.memo(({ children }) => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {children}
    </main>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
