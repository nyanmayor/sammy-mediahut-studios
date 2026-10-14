import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";


/**
 * Lightbox component
 * Props:
 *   images  - array of gallery items ({ id, title, category, image, description })
 *   initialIndex - start index when opened
 *   isOpen  - boolean
 *   onClose - close callback
 *   onPrev / onNext callbacks
 *   currentIndex - current image index
 */
export default function Lightbox({
  images,
  isOpen,
  currentIndex,
  currentImage,
  onClose,
  onPrev,
  onNext,
}) {
  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/60 text-sm font-mono">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Image */}
          <motion.div
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center max-w-5xl max-h-[90vh] w-full px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.image}
              alt={currentImage.title}
              className="max-w-full max-h-[75vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-serif text-lg">{currentImage.title}</p>
              <p className="text-white/50 text-sm mt-1">
                {currentImage.category} — {currentImage.description}
              </p>
            </div>
          </motion.div>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={36} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
