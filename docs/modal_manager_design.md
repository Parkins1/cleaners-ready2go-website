# Modal Management Centralization Design

## 1. Goal

To design a centralized `ModalProvider` with a clear context and API, supporting `BookingModal` and `QuoteModal`, while considering stacking behavior and SSR safety. The deliverable is an API specification and usage pattern.

## 2. Current State Analysis

The current implementation already provides a `ModalProvider.tsx` that centralizes the state management for `BookingModal` and `QuoteModal`.

*   [`client/src/components/BookingModal.tsx`](client/src/components/BookingModal.tsx): A standalone component for booking. It manages its own internal form state and uses `isOpen`, `onOpenChange`, and `onClose` props to control its visibility. It has its own mutation for API calls.
*   [`client/src/components/QuoteModal.tsx`](client/src/components/QuoteModal.tsx): Similar to `BookingModal`, it's a standalone component for quotes with its own state and visibility control props. It also has its own mutation for API calls.
*   [`client/src/components/modal/ModalProvider.tsx`](client/src/components/modal/ModalProvider.tsx): This provider uses React Context to expose `open`, `close`, and `isOpen` functions. It conditionally renders `BookingModal` and `QuoteModal` based on the `id` state.
*   [`client/src/components/modal/types.ts`](client/src/components/modal/types.ts): Defines `ModalId`, `ModalPayload`, and `ModalContextValue` interfaces.

The existing `ModalProvider` is well-structured and already addresses many of the goals. The main architectural task is to formalize the API and usage patterns for future-proofing and consistency.

## 3. Modal Manager API Design

The existing `ModalProvider` and `useModal` hook provide a good foundation.

### `client/src/components/modal/types.ts` (Refined)

The current `types.ts` is sufficient and clear.

```typescript
export type ModalId = "booking" | "quote" | null;

export type ModalPayload = Record<string, unknown> | undefined;

export interface ModalContextValue {
  id: ModalId; // Current open modal's ID, or null
  payload: ModalPayload; // Data passed to the modal
  open: (id: Exclude<ModalId, null>, payload?: ModalPayload) => void; // Function to open a modal
  close: () => void; // Function to close the current modal
  isOpen: (id: Exclude<ModalId, null>) => boolean; // Function to check if a specific modal is open
}
```

### `client/src/components/modal/ModalProvider.tsx` (Core Component)

The provider is responsible for managing the state of the active modal and rendering the corresponding modal component.

```typescript
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ModalContextValue, ModalId, ModalPayload } from "./types";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";

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
      {id === "booking" && (
        <BookingModal
          isOpen={true} // Always true when rendered via provider
          onClose={close}
        />
      )}
      {id === "quote" && (
        <QuoteModal
          isOpen={true} // Always true when rendered via provider
          onClose={close}
        />
      )}
    </ModalContext.Provider>
  );
};
```
*   **Key Changes/Refinements**:
    *   Removed `onOpenChange` from the rendered modals within `ModalProvider` because the provider itself controls the `isOpen` prop. `onClose` is passed to allow modals to signal completion/cancellation.
    *   Explicitly pass `isOpen={true}` when a modal is rendered. The conditional rendering (`id === "booking" && <BookingModal ... />`) ensures only the active modal is mounted.

### `useModal` Hook

The `useModal` hook remains unchanged, providing convenient access to the modal context.

```typescript
export const useModal = (): ModalContextValue => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return ctx;
};
```

## 4. Modal Component Adaptation (for Code Mode)

`BookingModal.tsx` and `QuoteModal.tsx` will be simplified. Instead of managing their own `isOpen` state and `onOpenChange` props, they will directly receive an `onClose` prop from the `ModalProvider` and assume they are open when rendered.

**Example `BookingModal.tsx` (similar for `QuoteModal.tsx`):**

```typescript
// client/src/components/BookingModal.tsx
interface BookingModalProps {
  onClose?: () => void; // Only need onClose now
  // isOpen prop is managed by ModalProvider's conditional rendering
  // onOpenChange is no longer needed
}

export default function BookingModal({ onClose }: BookingModalProps) {
  // ... existing state and handleSubmit logic ...

  // Removed: if (!isOpen) return null;
  // Removed: usage of onOpenChange prop, replaced with onClose for closing events

  return (
    // ... existing modal JSX ...
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-brand-black">Book a Cleaning</h3>
          <button onClick={onClose} className="text-brand-gray hover:text-brand-black"> {/* Direct call to onClose */}
            <X className="w-6 h-6" />
          </button>
        </div>
        {/* ... form ... */}
      </div>
    </div>
  );
}
```

## 5. Stacking Behavior

The current design supports a single modal being open at a time. If a user tries to open a different modal while one is already open, the `open` function will simply switch the `id` state, effectively closing the previous modal and opening the new one. This implicitly handles stacking by ensuring only one modal is rendered. For complex multi-modal scenarios, a more advanced stacking mechanism (e.g., an array of open modals and a Z-index management system) would be required, but for `BookingModal` and `QuoteModal`, a single modal at a time is sufficient and simpler.

## 6. SSR Safety

The `ModalProvider` uses `useState` and `useCallback`/`useMemo` which are standard React hooks. The modals themselves are rendered conditionally on the client-side (`id === "booking" && <BookingModal />`). There are no direct DOM manipulations or client-specific APIs invoked outside `useEffect` or event handlers that would cause issues during Server-Side Rendering (SSR). The current structure is considered SSR-safe.

## 7. Deliverable: API Spec and Usage Pattern

### `ModalProvider` Integration

The `ModalProvider` should wrap the root of the application (e.g., in `client/src/App.tsx` or `client/src/main.tsx`) to make the `useModal` hook available globally.

```typescript
// client/src/main.tsx (or App.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ModalProvider } from './components/modal/ModalProvider'; // Import the provider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider> {/* Wrap the App with ModalProvider */}
      <App />
    </ModalProvider>
  </React.StrictMode>,
);
```

### Usage Pattern in Pages/Components

Components that need to open a modal will use the `useModal` hook.

```typescript
// Example usage in a page or component
import { useModal } from "@/components/modal/ModalProvider";
import { Button } from "@/components/ui/button"; // Assuming standard button is used

function MyPageOrComponent() {
  const { open } = useModal();

  return (
    <div>
      <Button onClick={() => open("booking")}>Book Now</Button>
      <Button onClick={() => open("quote")}>Get a Quote</Button>
    </div>
  );
}
```

This design provides a clear, centralized, and extensible modal management system.