import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-serif text-[120px] md:text-[180px] leading-none text-white/10 select-none">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-white -mt-4 mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-400 max-w-sm mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-all"
        >
          <Home size={16} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
