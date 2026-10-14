import { useState, useCallback, useEffect } from "react";
import { lockScroll, unlockScroll } from "../utils/helpers";

/**
 * Manages lightbox open/close state, current image index, and keyboard navigation.
 * @param {Array} images - Array of gallery items
 */
export function useLightbox(images = []) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback(
    (index) => {
      setCurrentIndex(index);
      setIsOpen(true);
      lockScroll();
    },
    []
  );

  const close = useCallback(() => {
    setIsOpen(false);
    unlockScroll();
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, prev, next, close]);

  return {
    isOpen,
    currentIndex,
    currentImage: images[currentIndex] || null,
    open,
    close,
    prev,
    next,
  };
}
