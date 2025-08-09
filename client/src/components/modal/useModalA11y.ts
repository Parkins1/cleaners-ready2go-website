import { useEffect, useRef } from "react";

export function useModalA11y(onClose: () => void) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    const focusableSelectors = [
      'a[href]','area[href]','input:not([disabled])','select:not([disabled])',
      'textarea:not([disabled])','button:not([disabled])','[tabindex]:not([tabindex="-1"])'
    ].join(',');

    const getFocusable = (): HTMLElement[] =>
      Array.from(el.querySelectorAll<HTMLElement>(focusableSelectors)).filter(n => !n.hasAttribute('aria-hidden'));

    // Focus first element or the dialog itself
    const focusables = getFocusable();
    (focusables[0] || el).focus({ preventScroll: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === 'Tab') {
        const f = getFocusable();
        if (f.length === 0) return;
        const first = f[0];
        const last = f[f.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !el.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last || !el.contains(active)) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    // Lock body scroll and compensate for scrollbar to avoid layout shift
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      const prevPad = parseFloat(prevPaddingRight || '0') || 0;
      body.style.paddingRight = `${prevPad + scrollbarWidth}px`;
    }
    body.style.overflow = 'hidden';

    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      // Restore body scroll and padding
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, [onClose]);

  return { dialogRef };
}
