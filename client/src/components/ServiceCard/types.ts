import React from 'react';

export interface ServiceCardProps {
  id: string;
  title: string;
  blurb: string;
  href: string;
  img: string;
  imgAlt?: string;
  /** Optional responsive srcset for the image */
  imgSrcSet?: string;
  /** Optional <picture> sources (e.g., AVIF) */
  sources?: { type: string; srcSet: string; sizes?: string }[];
  /** Image dimensions for CLS prevention */
  imgWidth: number;
  imgHeight: number;
  icon: React.ReactNode;
  className?: string;
  /** Whether to hide the icon - useful for certain layouts */
  hideIcon?: boolean;
}
