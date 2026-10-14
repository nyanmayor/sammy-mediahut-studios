import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Star } from "lucide-react";
import { galleryData } from "../data/galleryData";
import { servicesData } from "../data/servicesData";
import { testimonialsData } from "../data/testimonialsData";
import { siteConfig } from "../data/siteConfig";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import { useLightbox } from "../hooks/useLightbox";
import Lightbox from "../components/Lightbox/Lightbox";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ImageWithSkeleton from "../components/ImageWithSkeleton/ImageWithSkeleton";
import AnimatedNumber from "../components/AnimatedNumber/AnimatedNumber";

const featured = galleryData.filter((i) => i.featured).slice(0, 6);

const stats = [
  { value: "500+", label: "Sessions Completed" },
  { value: "6+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Awards Won" },
];

const process = [
  { num: "01", label: "Consultation", desc: "We discuss your vision, needs and expectations." },
  { num: "02", label: "Planning", desc: "We plan every detail — timing, locations, outfits." },
  { num: "03", label: "Photoshoot", desc: "A relaxed, guided session to capture authentic moments." },
  { num: "04", label: "Editing", desc: "Expert retouching and cinematic colour grading." },
  { num: "05", label: "Delivery", desc: "Your private online gallery delivered on time." },
];

export default function Home() {
  const heroRef = useRef(null);
  const lightbox = useLightbox(featured);

  const scrollDown = () => {
    heroRef.current?.nextSibling?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        aria-label="Hero"
      >
        {/* Background image */}
        <img
          src="https://images.pixieset.com/68754439/efda2ba9cef400d38d3def95c04719b0-cover-large.jpg"
          alt="Beautiful wedding photography by MediaHut Studios"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block tracking-[0.3em] uppercase text-xs text-white/60 mb-6"
          >
            {siteConfig.brand.name}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            Capturing Moments.
            <br />
            <span className="italic">Creating Memories.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10"
          >
            Professional photography &amp; visual storytelling — weddings,
            portraits, events and commercial work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-300"
            >
              Book a Session
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollDown}
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────────── */}
      <section className="bg-neutral-950 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-3xl md:text-4xl text-white">
                <AnimatedNumber value={s.value} />
              </p>
              <p className="text-neutral-400 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured Work ─────────────────────────────────────────────────────── */}
      <section className="section-container">
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Work"
          subtitle="A curated selection of our most celebrated photography — each image a story told in light."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={i}
              onClick={(idx) => lightbox.open(idx)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900 pb-0.5"
          >
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Services Preview ──────────────────────────────────────────────────── */}
      <section className="bg-neutral-50 section-container">
        <SectionTitle
          eyebrow="What We Do"
          title="Photography Services"
          subtitle="From intimate portraits to grand celebrations — we bring vision and expertise to every session."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white overflow-hidden border border-neutral-100 hover:shadow-lg transition-shadow duration-300"
            >
              <ImageWithSkeleton
                src={service.image}
                alt={service.title}
                className="w-full h-56 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <p className="text-xs text-neutral-400 tracking-widest uppercase mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-serif text-xl text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 line-clamp-2">
                  {service.description}
                </p>
                <p className="mt-4 text-sm font-medium text-neutral-700">
                  From {service.startingPrice}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900 pb-0.5"
          >
            See All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────────────── */}
      <section className="section-container">
        <SectionTitle
          eyebrow="How It Works"
          title="Our Process"
          subtitle="A seamless, stress-free experience from first contact to final delivery."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
          {process.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <span className="font-serif text-4xl text-neutral-200">{step.num}</span>
              <h3 className="font-serif text-lg text-neutral-900 mt-2 mb-2">{step.label}</h3>
              <p className="text-sm text-neutral-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <section className="bg-neutral-950 section-container">
        <SectionTitle
          eyebrow="Client Stories"
          title="What Clients Say"
          centered
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 p-8 border border-neutral-800"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-neutral-500 text-xs">{t.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Booking CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <img
          src="https://images.pixieset.com/68754439/1ad97f87a3793ca08ef2ab81ab32e4a1-large.jpg"
          alt="Book a photography session"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Let's Create Something Beautiful
          </h2>
          <p className="text-white/70 mb-8">
            Every moment deserves to be remembered. Book your session today and
            let's tell your story through photography.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300"
          >
            Book a Session <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={featured}
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
