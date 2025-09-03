export type ModalId = "booking" | "quote" | "contact" | null;

export type ModalPayload = {
  title?: string;
  description?: string;
  form?: React.ReactNode;
} | undefined;

export interface ModalContextValue {
  id: ModalId;
  payload: ModalPayload;
  open: (id: Exclude<ModalId, null>, payload?: ModalPayload) => void;
  close: () => void;
  isOpen: (id: Exclude<ModalId, null>) => boolean;
}