import logoImage from "@assets/cleaners_ready2go_logo_transparent_1753378992010.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src={logoImage} 
        alt="Cleaners Ready 2Go - Professional Cleaning Services" 
        className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 object-contain max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-none"
      />
    </div>
  );
}
