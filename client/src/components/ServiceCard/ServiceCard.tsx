import { useLocation } from "wouter";
import React from "react";
import { ServiceCardProps } from "./types";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Icon from "@/components/ui/icon";

export default function ServiceCard({
  id,
  title,
  blurb,
  href,
  img,
  imgAlt,
  imgSrcSet,
  sources,
  icon,
  className,
  hideIcon,
}: ServiceCardProps) {
  const [, navigate] = useLocation();
  const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // Allow new-tab/middle-click/modified clicks to behave normally
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <a
      key={id}
      href={href}
      onClick={onClick}
      className={`relative group block overflow-hidden rounded-xl border border-slate-300 hover:border-brand-gold shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold focus-visible:ring-offset-transparent min-h-[240px] sm:min-h-[280px] ${className || ""}`}
      aria-label={`${title} - Learn more`}
    >
      {/* Media */}
      <OptimizedImage
        src={img}
        alt={imgAlt || `${title} in Spokane area`}
        className="absolute inset-0 h-full w-full object-cover brightness-[.85] object-center sm:object-[center_30%]"
        priority={false}
        lazy={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        placeholder="blur"
        imgSrcSet={imgSrcSet}
        sources={sources}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent" />
      {/* Text block */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-center backdrop-blur-[2px] [text-shadow:0_1px_1px_rgba(0,0,0,0.45)]">
        <div className="max-w-[28ch] sm:max-w-[36ch] mx-auto">
          {!hideIcon && (
            <div className="bg-accent rounded-full w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 mx-auto mt-4 mb-3 sm:mb-4 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          )}
          <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight drop-shadow-sm mb-2">{title}</h3>
          <p className="mt-1.5 text-slate-100/95 text-sm sm:text-base leading-snug">{blurb}</p>
          <span className="mt-4 inline-flex items-center font-semibold text-white underline underline-offset-4 decoration-white/40 hover:decoration-white">
            Learn More <Icon name="ArrowRight" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </a>
  );
}
