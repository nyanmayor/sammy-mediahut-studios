import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AppProvider } from "./context/AppContext";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = { duration: 0.35, ease: "easeInOut" };

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AppProvider>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          {/* Routes inside MainLayout (Navbar + Footer) */}
          <Route
            path="/"
            element={
              <MainLayout>
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              </MainLayout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <MainLayout>
                <AnimatedPage>
                  <Portfolio />
                </AnimatedPage>
              </MainLayout>
            }
          />
          <Route
            path="/services"
            element={
              <MainLayout>
                <AnimatedPage>
                  <Services />
                </AnimatedPage>
              </MainLayout>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayout>
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              </MainLayout>
            }
          />
          <Route
            path="/admin"
            element={
              <MainLayout>
                <AnimatedPage>
                  <Admin />
                </AnimatedPage>
              </MainLayout>
            }
          />

          {/* 404 — no layout wrapper so it fills the whole screen */}
          <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </AppProvider>
  );
}
