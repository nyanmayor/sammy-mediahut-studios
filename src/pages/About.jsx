import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Award, Clock, Heart, ArrowRight } from "lucide-react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ImageWithSkeleton from "../components/ImageWithSkeleton/ImageWithSkeleton";
import AnimatedNumber from "../components/AnimatedNumber/AnimatedNumber";

const values = [
  {
    icon: Camera,
    title: "Artistry",
    desc: "Every frame is composed with intention — light, emotion, and story working in harmony.",
  },
  {
    icon: Heart,
    title: "Connection",
    desc: "We build real relationships with clients so that comfort and authenticity come through in every image.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards of technical and creative quality.",
  },
  {
    icon: Clock,
    title: "Reliability",
    desc: "On time, prepared, and professional — always. We respect your time and trust.",
  },
];

const process = [
  { num: "01", label: "Consultation", desc: "A free call to understand your vision, style, and requirements." },
  { num: "02", label: "Planning", desc: "We plan every detail — timeline, locations, outfits, and logistics." },
  { num: "03", label: "Photoshoot", desc: "A relaxed, guided session where we capture your authentic moments." },
  { num: "04", label: "Editing", desc: "Expert retouching and cinematic colour grading in our signature style." },
  { num: "05", label: "Delivery", desc: "Your private online gallery delivered with a full print release." },
];

const equipment = [
  "Sony Alpha A7R V (Full Frame)",
  "Sony Alpha A9 III (Full Frame)",
  "Sony 24–70mm f/2.8 GM II",
  "Sony 85mm f/1.4 GM",
  "Sony 16–35mm f/2.8 GM",
  "DJI Mavic 3 Pro (Drone)",
  "Profoto B10 Plus Studio Lights",
  "DJI Ronin 4D (Videography)",
];

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-neutral-950 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block tracking-[0.3em] uppercase text-xs text-white/50 mb-4">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">About Us</h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ImageWithSkeleton
              src="https://images.pixieset.com/68754439/21eabbb315a9fbcb7d56e2eae60d44ce-large.jpg"
              alt="MediaHut Studios photographer at work"
              className="w-full h-[500px]"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block tracking-[0.25em] uppercase text-xs text-neutral-400 mb-3">
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">
              Passion for the Art of Photography
            </h2>
            <div className="space-y-4 text-neutral-500 leading-relaxed">
              <p>
                MediaHut Studios was founded in 2018 with a single conviction: that
                photography is not just about capturing images — it's about preserving
                emotion, connection, and the irreplaceable texture of real life.
              </p>
              <p>
                Based in Accra, Ghana, we have had the privilege of documenting over
                500 sessions across weddings, portraits, corporate events and commercial
                campaigns. Our work has taken us across Ghana and internationally.
              </p>
              <p>
                We believe every person, every family, and every brand has a unique story
                worth telling beautifully. Our role is to create the visual language that
                tells it with elegance, authenticity, and lasting power.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { val: "500+", label: "Sessions" },
                { val: "6+", label: "Years" },
                { val: "15+", label: "Awards" },
                { val: "98%", label: "Satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl text-neutral-900">
                    <AnimatedNumber value={s.val} />
                  </p>
                  <p className="text-neutral-400 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 section-container">
        <SectionTitle
          eyebrow="Philosophy"
          title="What We Stand For"
          subtitle="Four principles that guide every session we take on."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-900 text-white mb-4">
                <v.icon size={20} />
              </div>
              <h3 className="font-serif text-xl text-neutral-900 mb-2">{v.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-container">
        <SectionTitle
          eyebrow="How We Work"
          title="Our Process"
          subtitle="From first enquiry to final gallery delivery — a seamless, stress-free journey."
          centered
        />
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-neutral-200" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white font-serif text-lg mb-4">
                  {step.num}
                </div>
                <h3 className="font-serif text-lg text-neutral-900 mb-2">{step.label}</h3>
                <p className="text-sm text-neutral-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-neutral-950 section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              eyebrow="Gear"
              title="Professional Equipment"
              subtitle="We invest in the finest tools so your images are always sharp, rich, and future-proof."
              light
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {equipment.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ImageWithSkeleton
            src="https://images.pixieset.com/68754439/4ae742408cc25ee7983728083abe04e5-large.jpg"
            alt="Professional photography equipment"
            className="w-full h-80 lg:h-[450px]"
            objectFit="cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            We'd love to hear about your upcoming project or event.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all"
          >
            Book a Session <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
