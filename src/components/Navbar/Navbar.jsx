import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import logo from "../../assets/mediahut-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Admin", to: "/admin" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine if we're on the home page (transparent hero overlay)
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg =
    scrolled || !isHome
      ? "bg-white/95 backdrop-blur-md shadow-sm"
      : "bg-transparent";

  const textColor =
    scrolled || !isHome ? "text-neutral-900" : "text-white";

  const activeLinkStyle = scrolled || !isHome
    ? "text-neutral-900 border-b border-neutral-900"
    : "text-white border-b border-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            aria-label="MediaHut Studios — Home"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="MediaHut Studios"
              className="h-10 md:h-12 w-auto transition-all duration-300"
              style={{
                filter: scrolled || !isHome
                  ? "invert(1) brightness(0)"
                  : "brightness(0) invert(1)"
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-wide pb-0.5 transition-all duration-200 hover:opacity-70 ${
                    isActive ? activeLinkStyle : textColor
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className={`hidden md:inline-flex items-center px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
              scrolled || !isHome
                ? "bg-neutral-900 text-white hover:bg-neutral-700"
                : "bg-white text-neutral-900 hover:bg-neutral-100"
            }`}
          >
            Book a Session
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`md:hidden p-2 transition-colors ${textColor}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-neutral-900 flex flex-col pt-24 pb-12 px-8"
            aria-modal="true"
            role="dialog"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {navLinks.map(({ label, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={to}
                    end={to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-serif text-3xl transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full py-4 bg-white text-neutral-900 font-medium tracking-wide text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Book a Session
              </Link>
              <p className="mt-4 text-neutral-600 text-xs text-center">
                {siteConfig.brand.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
