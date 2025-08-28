// llm:modal-migrated
import Icon from "@/components/ui/Icon";

interface DialogHeaderProps {
  title: string;
  onClose?: () => void;
  titleId?: string;
}

export default function DialogHeader({ title, onClose, titleId = "dialog-title" }: DialogHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 id={titleId} className="text-xl font-bold text-text">{title}</h3>
      {onClose && (
        <button type="button" onClick={onClose} className="text-text hover:text-accent" aria-label="Close dialog">
          <Icon name="X" className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}