import { Phone, Mail, MapPin } from "lucide-react";
import logoImage from "@assets/cleaners_ready2go_logo_transparent_1753378992010.png";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Cleaners Ready 2Go Logo" 
                className="h-24 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white mb-4 leading-relaxed">
              Professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. 
              Your home, spotless and ready to go.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-brand-gold mr-3" />
                <a href="tel:+1234567890" className="text-white hover:text-brand-secondary transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-brand-gold mr-3" />
                <a href="mailto:info@cleanersready2go.com" className="text-white hover:text-brand-secondary transition-colors">
                  info@cleanersready2go.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-gold mr-3 mt-1" />
                <div className="text-white">
                  Spokane Valley, Liberty Lake,<br />
                  and Greenacres, WA
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/residential" className="text-white hover:text-brand-secondary transition-colors">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="/move-out" className="text-white hover:text-brand-secondary transition-colors">
                  Move-Out Cleaning
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-brand-secondary transition-colors">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-brand-secondary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-white">
            © 2024 Cleaners Ready 2Go. All rights reserved. | Professional cleaning services in Washington State.
          </p>
        </div>
      </div>
    </footer>
  );
}