import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ModalContextValue, ModalId, ModalPayload } from "./types";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";
import ContactForm from "@/components/ContactForm/ContactForm";
import { useModalA11y } from "@/components/modal/useModalA11y";

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [id, setId] = useState<ModalId>(null);
  const [payload, setPayload] = useState<ModalPayload>(undefined);

  const open = useCallback((nextId: Exclude<ModalId, null>, nextPayload?: ModalPayload) => {
    setPayload(nextPayload);
    setId(nextId);
  }, []);

  const close = useCallback(() => {
    console.log("ModalProvider: closing modal", id);
    setId(null);
    setPayload(undefined);
  }, [id]);

  const isOpen = useCallback((checkId: Exclude<ModalId, null>) => id === checkId, [id]);

  const value = useMemo<ModalContextValue>(
    () => ({ id, payload, open, close, isOpen }),
    [id, payload, open, close, isOpen]
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {/* Centralized modal host */}
      {id === "booking" && (
        <BookingModal
          onClose={close}
        />
      )}
      {id === "quote" && (
        <QuoteModal
          onClose={close}
        />
      )}
      {id === "contact" && payload && (
        <div onClick={close} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" aria-hidden="true">
          <ContactDialog onClose={close} payload={payload} />
        </div>
      )}
    </ModalContext.Provider>
  );
};

function ContactDialog({ onClose, payload }: { onClose: () => void; payload: ModalPayload }) {
  const { dialogRef } = useModalA11y(onClose);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
      ref={dialogRef}
      tabIndex={-1}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 id="contact-modal-title" className="text-xl font-bold text-text">{payload.title}</h3>
        <button type="button" onClick={onClose} className="text-text hover:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
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