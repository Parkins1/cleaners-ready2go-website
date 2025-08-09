import { Link } from "wouter";
import React from "react";
import { ServiceCardProps } from "./types";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  id,
  title,
  blurb,
  href,
  img,
  icon,
  className,
}: ServiceCardProps) {
  return (
    <Link
      key={id}
      href={href}
      className={`relative group block rounded-lg overflow-hidden border-4 border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-gold ${className || ""}`}
      aria-label={`${title} - Learn more`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
      <div className="relative z-10 flex flex-col justify-end items-center h-80 p-6 text-center">
        <div className="gradient-gold rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/90">{blurb}</p>
        <span className="mt-4 inline-flex items-center text-white font-semibold">
          Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}