
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  className,
  backgroundImage
}) => {
  return (
    <div 
      className={cn(
        "relative py-20 md:py-32 px-4 mb-12 overflow-hidden",
        className
      )}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 25, 0.7), rgba(0, 0, 25, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
      
      {!backgroundImage && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 z-0"
          style={{
            backgroundSize: '200% 200%',
          }}
        />
      )}
    </div>
  );
};

export default PageHeader;
