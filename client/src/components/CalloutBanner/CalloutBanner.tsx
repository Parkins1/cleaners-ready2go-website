// llm:callout-banner-migrated
import React from 'react';
import { cn } from '@/lib/utils';

interface CalloutBannerProps {
  title: string;
  body?: React.ReactNode;
  actions: React.ReactNode;
  variant?: 'default' | 'gold';
  className?: string;
}

export default function CalloutBanner({
  title,
  body,
  actions,
  variant = 'default',
  className,
}: CalloutBannerProps) {
  const baseClasses = 'py-20 relative overflow-hidden';
  const variantClasses = {
    default: 'bg-surface',
    gold: 'footer', // using footer class for gold gradient
  };

  return (
    <section className={cn(baseClasses, variantClasses[variant], className)} aria-label="Callout Banner">
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">{title}</h2>
        {body && <div className="text-lg text-text mb-8">{body}</div>}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          {actions}
        </div>
      </div>
    </section>
  );
}
