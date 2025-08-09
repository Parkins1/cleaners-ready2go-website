import React from 'react';

export interface ServiceCardProps {
  id: string;
  title: string;
  blurb: string;
  href: string;
  img: string;
  icon: React.ReactNode;
  className?: string;
}