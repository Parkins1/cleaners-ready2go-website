import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useActivePath } from "./useActivePath";
import Icon from "@/components/ui/Icon";
import { NavItem, NavChild } from "./types"; // Centralized NavItem and NavChild types

interface MobileNavigationProps {
  navItems: NavItem[];
}

export default function MobileNavigation({ navItems }: MobileNavigationProps) {
  const { isActive } = useActivePath();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Toggle */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="text-text hover:text-accent p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <Icon name="X" className="w-6 h-6" /> : <Icon name="Menu" className="w-6 h-6" />}
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              if (item.children?.length) {
                return (
                  <div key={item.label} className="space-y-1">
                    <div className="block px-3 py-2 text-sm font-medium text-text">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-text hover:text-accent"
                          aria-current={isActive(c.href) ? "page" : undefined}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (item.href) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-sm font-medium ${
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
            <a
              href="/contact"
              aria-label="Get a Quote"
              className="w-full mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Button variant="primary" className="w-full">
                Get a Quote
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}