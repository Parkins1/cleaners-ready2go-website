import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useActivePath } from "./useActivePath";
import Icon from "@/components/ui/icon";
import { NavItem, NavChild } from "./types"; // Centralized NavItem and NavChild types

interface MobileNavigationProps {
  navItems: NavItem[];
}

export default function MobileNavigation({ navItems }: MobileNavigationProps) {
  const { isActive } = useActivePath();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <div className="relative md:hidden">
      {/* Toggle */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="text-text hover:text-accent p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
      >
        {isOpen ? (
          <Icon name="X" className="w-6 h-6" />
        ) : (
          <Icon name="Menu" className="w-6 h-6" />
        )}
      </button>

      {/* Drawer */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed top-24 inset-x-0 z-40 bg-slate-50 border-t border-gray-200 shadow-lg max-h-[calc(100vh-6rem)] overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="px-2 pt-2 pb-4">
            {navItems.map((item) => {
              if (item.children?.length) {
                const isExpanded = !!expanded[item.label];
                const regionId = `section-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <div key={item.label} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleSection(item.label)}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-text hover:text-accent"
                      aria-expanded={isExpanded}
                      aria-controls={regionId}
                    >
                      <span>{item.label}</span>
                      <Icon
                        name={isExpanded ? "ChevronUp" : "ChevronDown"}
                        className="w-5 h-5 text-text"
                      />
                    </button>
                    {isExpanded && (
                      <div id={regionId} className="pl-4 pb-2 space-y-1">
                        {item.children.map((c: NavChild) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 text-sm ${
                              isActive(c.href)
                                ? "text-text"
                                : "text-text hover:text-accent"
                            }`}
                            aria-current={isActive(c.href) ? "page" : undefined}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (item.href) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 text-sm font-medium ${
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
              className="block mt-3"
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
