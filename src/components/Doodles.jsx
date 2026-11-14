// Hand-drawn style SVG doodles. All outline art, drawn with a wobbly ink stroke.
// They are decorative, so every one is hidden from screen readers.
/* Prevent decorative SVGs from shrinking */
// .doodle {
//   flex-shrink: 0;
//   max-width: none;
//   height: auto;
// }

const INK = "#35332E";

const base = (props) => ({
  "aria-hidden": true,
  focusable: false,
  fill: "none",
  stroke: INK,
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...props,
});

export function Flower({ size = 64, petal = "#FAF8F0", center = "#C5AC70", ...rest }) {
  const petals = [0, 60, 120, 180, 240, 300];
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} {...base(rest)}>
      {petals.map((a) => (
        <ellipse
          key={a}
          cx="32"
          cy="16"
          rx="7"
          ry="11"
          fill={petal}
          transform={`rotate(${a} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="6" fill={center} />
      <path d="M30 31c1-2 3-2 4 0" strokeWidth="1.6" />
    </svg>
  );
}

export function Daisy({ size = 56, ...rest }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} {...base(rest)}>
      {petals.map((a) => (
        <ellipse key={a} cx="32" cy="17" rx="4.5" ry="10" fill="#FAF8F0" transform={`rotate(${a} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="5" fill="#C5AC70" />
    </svg>
  );
}

export function Leaf({ size = 48, fill = "#A5AD91", ...rest }) {
  return (
    <svg viewBox="0 0 48 64" width={size} height={(size * 64) / 48} {...base(rest)}>
      <path d="M24 4C8 18 6 42 24 60 42 42 40 18 24 4Z" fill={fill} />
      <path d="M24 12v46M24 30l-8-7M24 40l9-8M24 24l7-6" strokeWidth="1.6" />
    </svg>
  );
}

export function Sprig({ size = 120, flip = false, ...rest }) {
  return (
    <svg
      viewBox="0 0 120 80"
      width={size}
      height={(size * 80) / 120}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      {...base(rest)}
    >
      <path d="M4 70C30 62 60 52 112 14" />
      <path d="M28 64c-4-12 2-20 10-22 2 10-2 18-10 22Z" fill="#A5AD91" />
      <path d="M52 54c-3-12 3-20 11-22 1 10-3 18-11 22Z" fill="#777D58" />
      <path d="M76 38c-3-10 1-18 9-20 2 9-1 16-9 20Z" fill="#A5AD91" />
      <circle cx="108" cy="16" r="7" fill="#FAF8F0" />
      <circle cx="108" cy="16" r="2" fill="#C5AC70" strokeWidth="1.2" />
    </svg>
  );
}

export function Star({ size = 28, fill = "#C5AC70", ...rest }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} {...base(rest)}>
      <path d="M16 3l3.6 8.4 9 .8-6.8 6 2.1 8.8L16 22.4 8.1 27l2.1-8.8-6.8-6 9-.8Z" fill={fill} />
    </svg>
  );
}

export function Sparkle({ size = 26, ...rest }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} {...base(rest)}>
      <path d="M16 3v8M16 21v8M3 16h8M21 16h8M8 8l4 4M20 20l4 4M24 8l-4 4M12 20l-4 4" />
    </svg>
  );
}

export function Arrow({ size = 90, flip = false, ...rest }) {
  return (
    <svg
      viewBox="0 0 100 60"
      width={size}
      height={(size * 60) / 100}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      {...base(rest)}
    >
      <path d="M6 12C30 4 66 8 80 40" />
      <path d="M66 36l15 6 3-17" />
    </svg>
  );
}

export function Squiggle({ width = 120, ...rest }) {
  return (
    <svg viewBox="0 0 120 16" width={width} height={(width * 16) / 120} {...base(rest)}>
      <path d="M2 8c8-10 14 10 22 0s14 10 22 0 14 10 22 0 14 10 22 0 14 10 22 0" />
    </svg>
  );
}

export function Camera({ size = 120, body = "#9B8068", ...rest }) {
  return (
    <svg viewBox="0 0 120 90" width={size} height={(size * 90) / 120} {...base(rest)}>
      <rect x="22" y="10" width="26" height="14" rx="3" fill="#C5AC70" />
      <rect x="6" y="22" width="108" height="62" rx="10" fill={body} />
      <rect x="6" y="22" width="108" height="20" rx="10" fill="#FAF8F0" />
      <circle cx="60" cy="56" r="24" fill="#FAF8F0" />
      <circle cx="60" cy="56" r="15" fill="#8298A5" />
      <circle cx="54" cy="50" r="4" fill="#FAF8F0" strokeWidth="1.5" />
      <circle cx="96" cy="34" r="5" fill="#B76E5B" />
      <path d="M14 34h24" strokeWidth="1.8" />
    </svg>
  );
}

export function FilmRoll({ size = 80, ...rest }) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} {...base(rest)}>
      <circle cx="40" cy="40" r="32" fill="#C5AC70" />
      <circle cx="40" cy="40" r="10" fill="#FAF8F0" />
      {[0, 72, 144, 216, 288].map((a) => (
        <circle
          key={a}
          cx="40"
          cy="20"
          r="5"
          fill="#FAF8F0"
          transform={`rotate(${a} 40 40)`}
        />
      ))}
    </svg>
  );
}

export function Envelope({ size = 100, ...rest }) {
  return (
    <svg viewBox="0 0 100 70" width={size} height={(size * 70) / 100} {...base(rest)}>
      <rect x="4" y="8" width="92" height="56" rx="5" fill="#FAF8F0" />
      <path d="M4 12l46 30 46-30" />
      <path d="M4 62l32-26M96 62L64 36" strokeWidth="1.6" />
      <rect x="72" y="14" width="18" height="14" rx="1.5" fill="#B76E5B" transform="rotate(6 80 21)" />
    </svg>
  );
}

export function Computer({ size = 110, ...rest }) {
  return (
    <svg viewBox="0 0 110 100" width={size} height={(size * 100) / 110} {...base(rest)}>
      <rect x="14" y="6" width="82" height="62" rx="8" fill="#FAF8F0" />
      <rect x="22" y="14" width="66" height="44" rx="3" fill="#A5AD91" />
      <path d="M30 28l8 6-8 6M44 42h14" strokeWidth="2" />
      <path d="M44 68v10M66 68v10M32 80h46" />
      <rect x="20" y="86" width="70" height="10" rx="3" fill="#C5AC70" />
      <path d="M30 91h6M42 91h6M54 91h6M66 91h6" strokeWidth="1.6" />
    </svg>
  );
}

export function Paperclip({ size = 36, ...rest }) {
  return (
    <svg viewBox="0 0 32 64" width={size} height={size * 2} {...base(rest)}>
      <path d="M22 18v30a6 6 0 0 1-12 0V14a9 9 0 0 1 18 0v34" stroke="#777D58" strokeWidth="3" />
    </svg>
  );
}

export function Stamp({ size = 90, label = "AIR MAIL", ...rest }) {
  return (
    <svg viewBox="0 0 90 108" width={size} height={(size * 108) / 90} {...base(rest)}>
      <path
        d="M6 6h8l3-3 3 3h10l3-3 3 3h10l3-3 3 3h10l3-3 3 3h8v8l-3 3 3 3v10l-3 3 3 3v10l-3 3 3 3v10l-3 3 3 3v8h-8l-3 3-3-3H52l-3 3-3-3H36l-3 3-3-3H20l-3 3-3-3H6v-8l3-3-3-3V78l3-3-3-3V62l3-3-3-3V46l3-3-3-3V28l3-3-3-3Z"
        fill="#FAF8F0"
        strokeWidth="2"
      />
      <rect x="16" y="16" width="58" height="62" fill="#8298A5" strokeWidth="2" />
      <circle cx="45" cy="44" r="14" fill="#C5AC70" />
      <path d="M45 30v28M31 44h28" strokeWidth="1.6" />
      <text x="45" y="94" textAnchor="middle" fontFamily="Special Elite, monospace" fontSize="9" fill={INK} stroke="none">
        {label}
      </text>
    </svg>
  );
}

export function Pencil({ size = 90, ...rest }) {
  return (
    <svg viewBox="0 0 100 24" width={size} height={(size * 24) / 100} {...base(rest)}>
      <path d="M8 12l12-8h68v16H20Z" fill="#C5AC70" />
      <path d="M8 12l12-8v16Z" fill="#FAF8F0" />
      <path d="M88 4h8v16h-8Z" fill="#B76E5B" />
      <path d="M30 4v16" strokeWidth="1.6" />
    </svg>
  );
}
