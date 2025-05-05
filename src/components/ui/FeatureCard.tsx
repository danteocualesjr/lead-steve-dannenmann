
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  className 
}) => {
  return (
    <div className={cn(
      "glass-card p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]",
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="mr-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
