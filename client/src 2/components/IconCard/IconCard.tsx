import React from 'react';
import { cn } from '@/lib/utils';
import OptimizedImage from '@/components/ui/optimized-image';

export interface IconCardProps {
  iconSrc: string;
  title: string;
  items: string[];
  className?: string;
  children?: React.ReactNode;
}

export default function IconCard({ iconSrc, title, items, className, children }: IconCardProps) {
  return (
    <div className={cn("relative rounded-xl border border-slate-300 bg-white p-6 sm:p-8 shadow", className)}>
      <div className="flex flex-col items-center text-center mb-4">
        <OptimizedImage 
          src={iconSrc} 
          alt={title} 
          className="w-16 h-16 object-contain mb-4" 
          width={64}
          height={64}
        />
        <h3 className="text-xl font-semibold text-text mb-3">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm text-text">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="w-4 h-4 mt-1 text-brand-gold flex-shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}