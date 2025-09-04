function Logo() {
  return (
    <div className="flex items-center">
      <picture>
        <source srcSet="/logo.webp" type="image/webp" />
        <img
          src="/logo.png"
          alt="Cleaners Ready 2Go - Professional Cleaning Services"
          className="h-24 w-auto drop-shadow-lg"
          width="512"
          height="256"
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
}

Logo.displayName = "Logo";

export default Logo;
