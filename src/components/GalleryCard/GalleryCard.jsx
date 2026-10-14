import { motion } from "framer-motion";
import ImageWithSkeleton from "../ImageWithSkeleton/ImageWithSkeleton";

/**
 * GalleryCard — single image card for the portfolio grid
 * Props: item (gallery object), index, onClick
 */
export default function GalleryCard({ item, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.07 }}
      className="group relative overflow-hidden cursor-pointer bg-neutral-100"
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title} — ${item.category}`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(index); }}
    >
      <ImageWithSkeleton
        src={item.image}
        alt={item.title}
        className="w-full h-64 md:h-72 group-hover:scale-110 transition-transform duration-700 ease-out"
        objectFit="cover"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-end p-5">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-white/70 text-xs tracking-widest uppercase">
            {item.category}
          </span>
          <p className="text-white font-serif text-lg leading-tight mt-1">
            {item.title}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
