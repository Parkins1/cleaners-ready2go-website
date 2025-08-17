function Logo() {
  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="Cleaners Ready 2Go - Professional Cleaning Services"
        className="h-32 w-auto drop-shadow-lg"
        width="512"
        height="256"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

Logo.displayName = "Logo";

export default Logo;