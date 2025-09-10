import Icon from "@/components/ui/icon";
import { brand } from "@/config/brand";
import { OptimizedImage } from "@/components/ui/optimized-image";
import logo128Avif from "@/assets/icon_logo-128.avif";
import logo256Avif from "@/assets/icon_logo-256.avif";
import logo128Webp from "@/assets/icon_logo-128.webp";
import logo256Webp from "@/assets/icon_logo-256.webp";

export default function Footer() {
  return (
    <footer className="footer py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <OptimizedImage
                src={logo128Webp}
                imgSrcSet={`${logo128Webp} 128w, ${logo256Webp} 256w`}
                sources={[
                  {
                    type: "image/avif",
                    srcSet: `${logo128Avif} 128w, ${logo256Avif} 256w`,
                  },
                ]}
                sizes="112px"
                width={112}
                height={112}
                alt="Cleaners Ready 2 Go Logo"
                imgClassName="h-28 w-auto"
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
                <Icon name="Phone" className="w-4 h-4 text-text mr-3" />
                <a
                  href={`tel:${brand.phone.replace(/[^0-9]/g, "")}`}
                  className="footer-link"
                  aria-label={`Call ${brand.phone}`}
                >
                  {brand.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="w-4 h-4 text-text mr-3" />
                <a href="mailto:info@cleanersready2go.com" className="footer-link">
                  info@cleanersready2go.com
                </a>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="w-4 h-4 text-text mr-3" />
                <div className="text-text">
                  {brand.hours}
                </div>
              </div>
              <div className="flex items-start">
                <Icon name="MapPin" className="w-4 h-4 text-text mr-3 mt-1" />
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
            © 2025 Cleaners Ready 2 Go. All rights reserved. | Professional cleaning services in Washington State. |
            {" "}
            <a href="/privacy" className="footer-link" aria-label="Privacy Policy">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
