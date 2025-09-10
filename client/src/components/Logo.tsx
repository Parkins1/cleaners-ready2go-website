import { OptimizedImage } from "@/components/ui/optimized-image";
import logo64avif from "@/assets/icon_logo-64.avif";
import logo128avif from "@/assets/icon_logo-128.avif";
import logo256avif from "@/assets/icon_logo-256.avif";
import logo64webp from "@/assets/icon_logo-64.webp";
import logo128webp from "@/assets/icon_logo-128.webp";
import logo256webp from "@/assets/icon_logo-256.webp";

function Logo() {
  return (
    <div className="flex items-center">
      <OptimizedImage
        src={logo128webp}
        imgSrcSet={`${logo64webp} 64w, ${logo128webp} 128w, ${logo256webp} 256w`}
        sources={[
          {
            type: "image/avif",
            srcSet: `${logo64avif} 64w, ${logo128avif} 128w, ${logo256avif} 256w`,
          },
        ]}
        sizes="(max-width: 640px) 64px, (max-width: 768px) 128px, 96px"
        width={96}
        height={96}
        lazy={false}
        alt="Cleaners Ready 2 Go - Professional Cleaning Services"
        imgClassName="h-24 w-auto drop-shadow-lg"
      />
    </div>
  );
}

Logo.displayName = "Logo";

export default Logo;
