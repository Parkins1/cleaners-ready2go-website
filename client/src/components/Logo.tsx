import { OptimizedImage } from "@/components/ui/optimized-image";
function Logo() {
  return (
    <div className="flex items-center">
      <OptimizedImage
        src="/logo-128.webp"
        imgSrcSet="/logo-64.webp 64w, /logo-128.webp 128w, /logo-256.webp 256w"
        sources={[
          {
            type: "image/avif",
            srcSet: "/logo-64.avif 64w, /logo-128.avif 128w, /logo-256.avif 256w",
          },
        ]}
        sizes="(max-width: 640px) 64px, (max-width: 768px) 128px, 96px"
        width={96}
        height={96}
        lazy={false}
        alt="Cleaners Ready 2Go - Professional Cleaning Services"
        imgClassName="h-24 w-auto drop-shadow-lg"
      />
    </div>
  );
}

Logo.displayName = "Logo";

export default Logo;
