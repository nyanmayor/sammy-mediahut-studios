import { useState, useEffect } from "react";

/**
 * Tracks scroll position and direction.
 * Returns { scrollY, isScrolled, scrollDirection }
 */
export function useScroll(threshold = 50) {
  const [state, setState] = useState({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: "up",
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setState({
        scrollY: currentScrollY,
        isScrolled: currentScrollY > threshold,
        scrollDirection: currentScrollY > lastScrollY ? "down" : "up",
      });
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return state;
}
