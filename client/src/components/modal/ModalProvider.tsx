
// llm:modal-migrated
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ModalContextValue, ModalId, ModalPayload } from "./types";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";
import ContactForm from "@/components/ContactForm/ContactForm";
import { useModalA11y } from "@/components/modal/useModalA11y";
import DialogHeader from "@/components/modal/DialogHeader";

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [id, setId] = useState<ModalId>(null);
  const [payload, setPayload] = useState<ModalPayload>(undefined);

  const open = useCallback((nextId: Exclude<ModalId, null>, nextPayload?: ModalPayload) => {
    setPayload(nextPayload);
    setId(nextId);
  }, []);

  const close = useCallback(() => {
    setId(null);
    setPayload(undefined);
  }, []);

  const isOpen = useCallback((checkId: Exclude<ModalId, null>) => id === checkId, [id]);

  const value = useMemo<ModalContextValue>(
    () => ({ id, payload, open, close, isOpen }),
    [id, payload, open, close, isOpen]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {/* Centralized modal host */}
      {id === "booking" && <BookingModal onClose={close} isOpen={true} />}
      {id === "quote" && <QuoteModal onClose={close} />}
      {id === "contact" && payload && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          aria-hidden="true"
        >
          <ContactDialog onClose={close} payload={payload as NonNullable<ModalPayload>} />
        </div>
      )}
    </ModalContext.Provider>
  );
};

function ContactDialog({ onClose, payload }: { onClose: () => void; payload: NonNullable<ModalPayload> }) {
  const { dialogRef } = useModalA11y(onClose);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative rounded-xl border border-slate-300 bg-white p-6 sm:p-8 shadow"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
      ref={dialogRef}
      tabIndex={-1}
    >
      <DialogHeader title={payload.title ?? "Contact"} onClose={onClose} titleId="contact-modal-title" />
      <p id="contact-modal-description" className="text-text mb-4">{payload.description}</p>
      {payload.form}
    </div>
  );
}

export const useModal = (): ModalContextValue => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return ctx;
};
