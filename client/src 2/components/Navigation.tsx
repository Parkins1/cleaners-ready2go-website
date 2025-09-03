import Logo from "./Logo";
import DesktopNavigation from "./navigation/DesktopNavigation";
import MobileNavigation from "./navigation/MobileNavigation";
import { NavItem } from "./navigation/types"; // Centralized NavItem type

export default function Navigation() {
  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      children: [
        { label: "Residential Cleaning", href: "/residential" },
        { label: "Deep Cleaning", href: "/deep-cleaning" },
        { label: "Move-Out Cleaning", href: "/move-out" },
      ],
    },
    {
      label: "Location",
      children: [
        { label: "Spokane", href: "/locations/spokane" },
        { label: "Spokane Valley", href: "/locations/spokane-valley" },
        { label: "Liberty Lake", href: "/locations/liberty-lake" },
        { label: "Greenacres", href: "/locations/greenacres" },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <a href="/" aria-label="Home">
              <Logo />
            </a>
          </div>

          <DesktopNavigation navItems={navItems} />

          <MobileNavigation navItems={navItems} />
        </div>
      </div>
    </nav>
  );
}
