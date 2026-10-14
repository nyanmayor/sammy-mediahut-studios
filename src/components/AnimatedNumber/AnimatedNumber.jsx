import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  
  // Extract number and suffix from string like "500+" or "98%"
  const match = value.match(/(\d+)(.*)/);
  const num = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const spring = useSpring(0, { bounce: 0, duration: 2500 });
  const display = useTransform(spring, (current) => Math.round(current) + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(num);
    }
  }, [isInView, num, spring]);

  if (!match) return <span>{value}</span>;

  return <motion.span ref={ref}>{display}</motion.span>;
}
