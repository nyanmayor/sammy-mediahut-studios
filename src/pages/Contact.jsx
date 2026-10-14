import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BookingForm from "../components/BookingForm/BookingForm";
import { siteConfig } from "../data/siteConfig";
import { getWhatsAppUrl } from "../utils/helpers";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.brand.email,
    href: `mailto:${siteConfig.brand.email}`,
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: siteConfig.brand.phone,
    href: getWhatsAppUrl(siteConfig.whatsapp.number, siteConfig.whatsapp.defaultMessage),
  },
  {
    icon: MapPin,
    label: "Studio",
    value: siteConfig.brand.address,
    href: null,
  },
  {
    icon: Clock,
    label: "Studio Hours",
    value: "Mon – Sat · 9:00 AM – 6:00 PM",
    href: null,
  },
];

export default function Contact() {
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
            Let's Connect
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">Book a Session</h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Fill in the form below and we'll get back to you within 24 hours to
            confirm your booking.
          </p>
        </motion.div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="font-serif text-2xl text-neutral-900 mb-2">Get In Touch</h2>
              <p className="text-neutral-500 text-sm leading-relaxed">
                We'd love to hear about your upcoming session or event. Reach out
                via the form or contact us directly.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-neutral-600" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-neutral-700">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Booking status note */}
            <div className="bg-neutral-50 border border-neutral-200 p-5 text-sm text-neutral-500 leading-relaxed">
              <p className="font-medium text-neutral-700 mb-1">Booking Status</p>
              After submission your booking will be marked as{" "}
              <span className="font-medium text-amber-600">Pending</span>. Once we
              review your details we'll send a confirmation and deposit invoice.
            </div>
          </motion.aside>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
