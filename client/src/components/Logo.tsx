import { Home } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 bg-brand-gold rounded-lg flex items-center justify-center mr-3">
        <Home className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="text-lg font-bold text-brand-black">Cleaners</div>
        <div className="text-xs text-brand-gray font-medium tracking-wider">READY 2GO</div>
      </div>
    </div>
  );
}
