import { X } from "lucide-react";
import { Contact } from "../sections/Contact.jsx";

export const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Formulaire de contact"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide glass-strong rounded-3xl border border-primary/30 p-6 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-surface"
        >
          <X size={24} />
        </button>

        <Contact isModal onClose={onClose} />
      </div>
    </div>
  );
};
