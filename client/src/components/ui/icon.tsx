import React, { Suspense, lazy } from 'react';
import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

// Common icons used in the app - lazy load them for better performance
const icons = {
  ArrowRight: lazy(() => import('lucide-react').then(module => ({ default: module.ArrowRight }))),
  ShieldCheck: lazy(() => import('lucide-react').then(module => ({ default: module.ShieldCheck }))),
  Leaf: lazy(() => import('lucide-react').then(module => ({ default: module.Leaf }))),
  Users: lazy(() => import('lucide-react').then(module => ({ default: module.Users }))),
  Sparkles: lazy(() => import('lucide-react').then(module => ({ default: module.Sparkles }))),
  MapPin: lazy(() => import('lucide-react').then(module => ({ default: module.MapPin }))),
  Phone: lazy(() => import('lucide-react').then(module => ({ default: module.Phone }))),
  Mail: lazy(() => import('lucide-react').then(module => ({ default: module.Mail }))),
  Check: lazy(() => import('lucide-react').then(module => ({ default: module.Check }))),
  Star: lazy(() => import('lucide-react').then(module => ({ default: module.Star }))),
};

export type IconName = keyof typeof icons;

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
  fallback?: React.ReactNode;
}

export function Icon({ name, fallback, className, ...props }: IconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return fallback || null;
  }

  return (
    <Suspense fallback={fallback || <div className="w-6 h-6" />}>
      <IconComponent
        className={cn('w-6 h-6 inline-block align-middle shrink-0', className)}
        {...props}
      />
    </Suspense>
  );
}

export default Icon;
