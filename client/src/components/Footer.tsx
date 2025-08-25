
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Cleaners Ready 2Go Logo"
                className="h-28 w-auto"
                width="512"
                height="256"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-text mb-4 leading-relaxed">
              Professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. 
              Your home, spotless and ready to go.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-text mr-3" />
                <a href="tel:+1234567890" className="footer-link">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-text mr-3" />
                <a href="mailto:info@cleanersready2go.com" className="footer-link">
                  info@cleanersready2go.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-text mr-3 mt-1" />
                <div className="text-text">
                  Spokane Valley, Liberty Lake,<br />
                  and Greenacres, WA
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/residential" className="footer-link">
                  Residential Cleaning
                </a>
              </li>
              <li>
                <a href="/move-out" className="footer-link">
                  Move-Out Cleaning
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-text">
            © 2025 Cleaners Ready 2Go. All rights reserved. | Professional cleaning services in Washington State.
          </p>
        </div>
      </div>
    </footer>
  );
}
