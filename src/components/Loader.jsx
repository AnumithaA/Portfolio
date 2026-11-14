import { motion } from "framer-motion";

// Camera-shutter loader: six aperture blades that close, then open and fade away.
export default function Loader() {
  const blades = [0, 60, 120, 180, 240, 300];
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      role="status"
      aria-label="Loading portfolio"
    >
      <motion.svg
        viewBox="-50 -50 100 100"
        width="120"
        height="120"
        initial={{ scale: 0.9, rotate: 0 }}
        animate={{ scale: [0.9, 1, 1], rotate: [0, 0, 30] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <circle r="46" fill="#FAF8F0" stroke="#35332E" strokeWidth="3" />
        {blades.map((a, i) => (
          <motion.path
            key={a}
            d="M0 -6 L38 -22 L22 -38 Z"
            fill={["#A5AD91", "#C5AC70", "#B76E5B", "#8298A5", "#9B8068", "#777D58"][i]}
            stroke="#35332E"
            strokeWidth="2"
            strokeLinejoin="round"
            style={{ rotate: a, originX: "0px", originY: "0px" }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: [10, 0, 6], y: [-10, 0, -6] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
      </motion.svg>
      <p className="font-type mt-5 text-sm tracking-[0.3em] uppercase text-ink">
        developing photographs…
      </p>
    </motion.div>
  );
}
