import { useEffect, useState } from "react";
import { useModal } from "@/components/modal/ModalProvider";

export default function FloatingCTA() {
  const { open } = useModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50 pb-[max(env(safe-area-inset-bottom),0.75rem)] px-4">
      <div className="bg-white/95 backdrop-blur rounded-t-xl shadow-xl border border-black/10 p-3">
        <button
          className="btn-primary w-full"
          type="button"
          aria-label="Get Free Estimate"
          onClick={() => open("quote")}
        >
          Get Free Estimate
        </button>
      </div>
    </div>
  );
}