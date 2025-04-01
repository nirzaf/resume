import React from 'react';
import StardevBadge from '../StardevBadge';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = React.memo(({ children }) => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"></div>
      
      {/* StardevBadge at the top */}
      <div className="w-full sticky top-0 z-50">
        <StardevBadge />
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12">
        <div className="backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-in-out hover:shadow-2xl">
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;

