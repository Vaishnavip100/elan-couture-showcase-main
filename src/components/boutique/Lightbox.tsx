import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { useEffect } from "react";

export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/80 hover:text-gold"
            aria-label="Close"
          >
            <HiX size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            src={src}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
