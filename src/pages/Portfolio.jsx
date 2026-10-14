import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData, categories } from "../data/galleryData";
import { useLightbox } from "../hooks/useLightbox";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import Lightbox from "../components/Lightbox/Lightbox";


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((i) => i.category === activeCategory);

  const lightbox = useLightbox(filtered);

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-12 bg-neutral-950 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block tracking-[0.3em] uppercase text-xs text-white/50 mb-4">
            Our Work
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">Portfolio</h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-base">
            A visual journey through weddings, portraits, events and commercial work.
          </p>
        </motion.div>
      </section>

      {/* Category filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 overflow-x-auto">
          <div className="flex items-center gap-1 py-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-neutral-400">
            <p className="text-lg">No images in this category yet.</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((item, i) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={i}
                  onClick={(idx) => lightbox.open(idx)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </section>

      <Lightbox
        images={filtered}
        isOpen={lightbox.isOpen}
        currentIndex={lightbox.currentIndex}
        currentImage={lightbox.currentImage}
        onClose={lightbox.close}
        onPrev={lightbox.prev}
        onNext={lightbox.next}
      />
    </>
  );
}
