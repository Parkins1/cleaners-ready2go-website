import React from "react";

function Logo() {
  return (
    <div className="flex items-center">
      <a href="/" aria-label="Home">
        <picture>
          <source
            type="image/webp"
            srcSet="/logo-96.webp 96w, /logo-192.webp 192w, /logo.png 1024w"
            sizes="96px"
          />
          <img
            src="/logo.png"
            alt="Cleaners Ready 2Go - Professional Cleaning Services"
            className="h-24 w-auto drop-shadow-lg"
            width="96"
            height="96"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </a>
    </div>
  );
}

Logo.displayName = "Logo";

export default Logo;
