
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <style>{`
          .section-padding {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          
          @media (min-width: 768px) {
            .section-padding {
              padding-top: 6rem;
              padding-bottom: 6rem;
            }
          }
          
          .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
        `}</style>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
