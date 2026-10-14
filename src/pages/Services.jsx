import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { servicesData, pricingPackages } from "../data/servicesData";
import { faqData } from "../data/faqData";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import PricingCard from "../components/PricingCard/PricingCard";
import FAQ from "../components/FAQ/FAQ";
import ImageWithSkeleton from "../components/ImageWithSkeleton/ImageWithSkeleton";

export default function Services() {
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
            What We Offer
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">Services</h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Professional photography and videography for every important moment.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="section-container">
        <div className="space-y-24">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image — alternating sides */}
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <ImageWithSkeleton
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 lg:h-[450px]"
                  objectFit="cover"
                />
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <span className="inline-block tracking-[0.25em] uppercase text-xs text-neutral-400 mb-3">
                  {service.subtitle}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-neutral-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-neutral-600">
                      <Check size={15} className="text-neutral-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-neutral-500 mb-6">
                  Starting from{" "}
                  <span className="font-medium text-neutral-900">{service.startingPrice}</span>
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-all duration-300"
                >
                  {service.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-neutral-50 section-container">
        <SectionTitle
          eyebrow="Packages"
          title="Photography Packages"
          subtitle="Transparent pricing with no hidden fees. Choose the package that fits your needs."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {pricingPackages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <p className="text-center text-sm text-neutral-400 mt-8">
          All packages include a signed agreement and a 30% booking deposit.
          Custom packages available on request.
        </p>
      </section>

      {/* FAQ */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before booking your session."
          />
          <FAQ items={faqData} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Ready to Book Your Session?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            Let's discuss your vision and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-all"
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </>
  );
}
