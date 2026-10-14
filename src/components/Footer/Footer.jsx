import { Link } from "react-router-dom";
import {
  FiInstagram as Instagram,
  FiFacebook as Facebook,
  FiYoutube as Youtube,
  FiLinkedin as Linkedin,
  FiMessageCircle as MessageCircle,
} from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";
import { getCurrentYear } from "../../utils/helpers";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Admin", to: "/admin" },
];

const serviceLinks = [
  { label: "Wedding Photography", to: "/services" },
  { label: "Portrait Photography", to: "/services" },
  { label: "Event Photography", to: "/services" },
  { label: "Commercial Photography", to: "/services" },
  { label: "Videography", to: "/services" },
];

const socialLinks = [
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: MessageCircle, href: `https://wa.me/${siteConfig.whatsapp.number.replace(/\D/g, "")}`, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl text-white tracking-wide mb-4 block"
            >
              {siteConfig.brand.name}
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              {siteConfig.brand.description}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-neutral-500 hover:text-white transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-medium tracking-widest uppercase mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.brand.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteConfig.brand.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.brand.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteConfig.brand.phone}
                </a>
              </li>
              <li className="text-neutral-500">{siteConfig.brand.address}</li>
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center mt-6 px-5 py-2.5 border border-neutral-700 text-sm text-white hover:bg-white hover:text-neutral-900 transition-all duration-300"
            >
              Book a Session
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>
            &copy; {getCurrentYear()} {siteConfig.brand.name}. All Rights
            Reserved.
          </p>
          <p>Crafted with passion for photography.</p>
        </div>
      </div>
    </footer>
  );
}
