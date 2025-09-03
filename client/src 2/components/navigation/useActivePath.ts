import { useLocation } from "wouter";

export function useActivePath() {
  const [path] = useLocation();

  const isActive = (href: string) => {
    if (!href) return false;
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  return { path, isActive };
}