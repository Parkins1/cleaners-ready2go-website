import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useActivePath } from "./useActivePath";
import { NavItem, NavChild } from "./types"; // Centralized NavItem and NavChild types

interface DesktopNavigationProps {
  navItems: NavItem[];
}

export default function DesktopNavigation({ navItems }: DesktopNavigationProps) {
  const { isActive } = useActivePath();

  return (
    <div className="hidden md:flex items-center space-x-6">
      {navItems.map((item) => {
        if (item.children?.length) {
          return (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger
                className={`text-sm font-medium transition-colors ${
                  item.label === "Services" || item.label === "Location"
                    ? "text-text" // Apply active style
                    : "text-text hover:text-accent" // Apply inactive/hover styles
                }`}
              >
                {item.label}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.children.map((childItem: NavChild) => ( // Explicitly type childItem
                  <DropdownMenuItem asChild key={childItem.href}>
                    <Link href={childItem.href}>
                      <span className="cursor-pointer">{childItem.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        if (item.href) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-text"
                  : "text-text hover:text-accent"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        }

        return null;
      })}

      {/* CTA */}
      <div className="ml-4">
        <a href="/contact" aria-label="Get a Quote" style={{ display: 'inline-block' }}>
          <Button variant="primary">
            Get a Quote
          </Button>
        </a>
      </div>
    </div>
  );
}
