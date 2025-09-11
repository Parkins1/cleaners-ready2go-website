import React, { lazy, Suspense } from 'react';
import type { LucideProps } from 'lucide-react';

// Centralized lazy-loaded icons to keep bundles small and fast
const iconImports = {
  Phone: lazy(() => import('lucide-react/dist/esm/icons/phone')),
  Mail: lazy(() => import('lucide-react/dist/esm/icons/mail')),
  MapPin: lazy(() => import('lucide-react/dist/esm/icons/map-pin')),
  Home: lazy(() => import('lucide-react/dist/esm/icons/home')),
  CheckCircle: lazy(() => import('lucide-react/dist/esm/icons/check-circle')),
  Send: lazy(() => import('lucide-react/dist/esm/icons/send')),
  X: lazy(() => import('lucide-react/dist/esm/icons/x')),
  Menu: lazy(() => import('lucide-react/dist/esm/icons/menu')),
  ChevronDown: lazy(() => import('lucide-react/dist/esm/icons/chevron-down')),
  ChevronRight: lazy(() => import('lucide-react/dist/esm/icons/chevron-right')),
  MoreHorizontal: lazy(() => import('lucide-react/dist/esm/icons/more-horizontal')),
  ChevronLeft: lazy(() => import('lucide-react/dist/esm/icons/chevron-left')),
  ArrowLeft: lazy(() => import('lucide-react/dist/esm/icons/arrow-left')),
  ArrowRight: lazy(() => import('lucide-react/dist/esm/icons/arrow-right')),
  Check: lazy(() => import('lucide-react/dist/esm/icons/check')),
  Search: lazy(() => import('lucide-react/dist/esm/icons/search')),
  Circle: lazy(() => import('lucide-react/dist/esm/icons/circle')),
  Dot: lazy(() => import('lucide-react/dist/esm/icons/dot')),
  GripVertical: lazy(() => import('lucide-react/dist/esm/icons/grip-vertical')),
  ChevronUp: lazy(() => import('lucide-react/dist/esm/icons/chevron-up')),
  PanelLeft: lazy(() => import('lucide-react/dist/esm/icons/panel-left')),
  Award: lazy(() => import('lucide-react/dist/esm/icons/award')),
  Clock: lazy(() => import('lucide-react/dist/esm/icons/clock')),
  Shield: lazy(() => import('lucide-react/dist/esm/icons/shield')),
  Building2: lazy(() => import('lucide-react/dist/esm/icons/building-2')),
  ShieldCheck: lazy(() => import('lucide-react/dist/esm/icons/shield-check')),
  Leaf: lazy(() => import('lucide-react/dist/esm/icons/leaf')),
  Users: lazy(() => import('lucide-react/dist/esm/icons/users')),
  Sparkles: lazy(() => import('lucide-react/dist/esm/icons/sparkles')),
  Heart: lazy(() => import('lucide-react/dist/esm/icons/heart')),
  Zap: lazy(() => import('lucide-react/dist/esm/icons/zap')),
  AlertCircle: lazy(() => import('lucide-react/dist/esm/icons/alert-circle')),
  // Added circle variants used in 4-step grids
  CircleDashed: lazy(() => import('lucide-react/dist/esm/icons/circle-dashed')),
  CircleDotDashed: lazy(() => import('lucide-react/dist/esm/icons/circle-dot-dashed')),
  CircleDot: lazy(() => import('lucide-react/dist/esm/icons/circle-dot')),
  CircleCheck: lazy(() => import('lucide-react/dist/esm/icons/circle-check')),
};

export type IconName = keyof typeof iconImports;

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = iconImports[name];

  if (!LucideIcon) {
    console.error(`Icon "${name}" not found.`);
    return (
      <div
        style={{
          width: (props as any).size || (props as any).width || 24,
          height: (props as any).size || (props as any).height || 24,
          backgroundColor: 'rgba(255,0,0,0.2)',
        }}
      />
    );
  }

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: (props as any).size || (props as any).width || 24,
            height: (props as any).size || (props as any).height || 24,
          }}
        />
      }
    >
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
