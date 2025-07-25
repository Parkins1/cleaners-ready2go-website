import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import BookingModal from "./BookingModal";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/residential", label: "Residential" },
    { path: "/move-out", label: "Move-Out" },
    { path: "/locations", label: "Locations" },
    { path: "/blog", label: "Blog" },
    { path: "/team", label: "Meet the Team" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-18 flex-nowrap">
            <div className="flex items-center">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-4 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${
                      isActiveLink(item.path)
                        ? "text-brand-black"
                        : "text-brand-gray hover:text-brand-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--secondary px-3 md:px-4 lg:px-6 py-2 text-xs md:text-sm font-bold whitespace-nowrap"
              >
                Book Now
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-brand-gray hover:text-brand-gold p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                    isActiveLink(item.path)
                      ? "text-brand-black bg-brand-neutral"
                      : "text-brand-gray hover:text-brand-gold hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsBookingModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="btn-glass btn-glass--secondary w-full mt-2 px-3 py-2 text-sm font-bold"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
