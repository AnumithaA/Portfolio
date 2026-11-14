import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Fade + slide up when scrolled into view. Pass `delay` to stagger.
export function Reveal({ children, delay = 0, y = 28, x = 0, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}

// Absolutely positioned decorative element. Place it with Tailwind position
// classes (e.g. "top-0 right-0"). It drifts slightly as ITS OWN position moves
// through the screen (parallax), so it always sits where you placed it when it is
// in view, and it floats gently. Both effects are off for reduced motion.
// On phones it is drawn smaller, scaling from `origin` so corners stay anchored.
export function Decor({
  children,
  className = "",
  speed = 0.06,
  rotate = 0,
  float = true,
  origin = "center",
  style = {},
}) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const amp = speed * 900;
  const y = useTransform(scrollYProgress, [0, 1], [amp, -amp]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`absolute pointer-events-none select-none ${className}`}
      style={reduce ? style : { ...style, y }}
    >
      <div className="scale-[0.6] sm:scale-100" style={{ transformOrigin: origin }}>
        <div
          className={float && !reduce ? "floaty" : ""}
          style={{ "--r": `${rotate}deg`, transform: `rotate(${rotate}deg)` }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
