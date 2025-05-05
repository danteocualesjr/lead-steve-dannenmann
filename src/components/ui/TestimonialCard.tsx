
import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  position,
  className 
}) => {
  return (
    <div className={cn(
      "glass-card p-6 rounded-lg",
      className
    )}>
      <Quote className="h-8 w-8 text-primary/30 mb-4" />
      <p className="italic text-foreground/80 mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold">{author}</p>
        {position && <p className="text-sm text-foreground/60">{position}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
