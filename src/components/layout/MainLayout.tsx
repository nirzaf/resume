import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = React.memo(({ children }) => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {children}
      </div>
    </div>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
