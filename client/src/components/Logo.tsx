import logoImage from "@assets/cleaners_ready2go_logo_transparent_1753378992010.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src={logoImage} 
        alt="Cleaners Ready 2Go - Professional Cleaning Services" 
        className="h-40 w-40"
      />
    </div>
  );
}
