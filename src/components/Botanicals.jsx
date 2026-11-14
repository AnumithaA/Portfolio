// Hand-drawn botanical illustrations: one plant per page heading, plus
// larger flower clusters for section corners, and a question-mark doodle.

const INK = "#35332E";
const CREAM = "#FAF8F0";
const SAGE = "#A5AD91";
const OLIVE = "#777D58";
const MUSTARD = "#C5AC70";
const BRICK = "#B76E5B";
const DUST = "#9B8068";

// A gently curved stem from lower-left to upper-right (quadratic Bezier).
const P0 = [6, 72];
const P1 = [56, 68];
const P2 = [108, 20];
const pt = (t) => {
  const u = 1 - t;
  return [
    u * u * P0[0] + 2 * u * t * P1[0] + t * t * P2[0],
    u * u * P0[1] + 2 * u * t * P1[1] + t * t * P2[1],
  ];
};
const ang = (t) => {
  const dx = 2 * (1 - t) * (P1[0] - P0[0]) + 2 * t * (P2[0] - P1[0]);
  const dy = 2 * (1 - t) * (P1[1] - P0[1]) + 2 * t * (P2[1] - P1[1]);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
};
const STEM = `M${P0[0]} ${P0[1]} Q${P1[0]} ${P1[1]} ${P2[0]} ${P2[1]}`;
const at = (t, extra = "") => {
  const [x, y] = pt(t);
  return `translate(${x.toFixed(1)} ${y.toFixed(1)}) ${extra}`;
};

// shapes (all drawn from their own origin)
const LEAF = "M0 0 C6 -7 18 -7 24 0 C18 7 6 7 0 0Z"; // points along +x
const OLIVE_LEAF = "M0 0 C5 -4 16 -4 22 0 C16 4 5 4 0 0Z";
const MAPLE =
  "M30 4 L34 14 L42 10 L40 22 L52 20 L44 30 L50 38 L38 36 L36 46 L31 42 L31 56 L29 56 L29 42 L24 46 L22 36 L10 38 L16 30 L8 20 L20 22 L18 10 L26 14Z";
const MAPLE_VEINS = "M30 44V16 M30 38L42 31 M30 38L18 31 M30 28L38 19 M30 28L22 19";
const GINKGO = "M0 0 L-15 -22 C-12 -30 -4 -30 0 -25 C4 -30 12 -30 15 -22 Z";
const OAK =
  "M0 0 C-3 -3 -7 -3 -6 -7 C-10 -8 -9 -12 -6 -13 C-9 -16 -5 -19 -2 -18 C-2 -22 2 -22 2 -18 C5 -19 9 -16 6 -13 C9 -12 10 -8 6 -7 C7 -3 3 -3 0 0Z"; // points up (-y)

// ----- one drawing per kind -----

const wildflower = () => (
  <>
    {[[0.22, -1], [0.45, 1], [0.68, -1]].map(([t, s], i) => (
      <path key={i} d={LEAF} fill={i % 2 ? OLIVE : SAGE} transform={at(t, `rotate(${ang(t) + s * 48}) scale(0.9)`)} />
    ))}
    <g transform={at(1)}>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="0" cy="-6.5" rx="3.8" ry="6.5" fill={CREAM} transform={`rotate(${a})`} />
      ))}
      <circle r="3.2" fill={MUSTARD} />
    </g>
  </>
);

const fern = () =>
  [0.1, 0.19, 0.28, 0.37, 0.46, 0.55, 0.64, 0.73, 0.82, 0.91].flatMap((t, i) => {
    const s = 1.1 - t * 0.6;
    return [1, -1].map((side) => (
      <path
        key={`${i}${side}`}
        d={LEAF}
        fill={i % 2 ? SAGE : OLIVE}
        transform={at(t, `rotate(${ang(t) + side * 62}) scale(${(s * 0.8).toFixed(2)})`)}
      />
    ));
  });

const pine = () => (
  <>
    {Array.from({ length: 12 }, (_, i) => 0.06 + i * 0.075).flatMap((t, i) => {
      const [x, y] = pt(t);
      const a = ang(t);
      return [1, -1].map((s) => {
        const r = ((a + s * 40) * Math.PI) / 180;
        return (
          <line
            key={`${i}${s}`}
            x1={x}
            y1={y}
            x2={x + Math.cos(r) * 15}
            y2={y + Math.sin(r) * 15}
            stroke={OLIVE}
            strokeWidth="2.6"
          />
        );
      });
    })}
    <g transform={at(0.7, "translate(4 11)")}>
      <ellipse rx="7" ry="10" fill={DUST} />
      <path d="M-5 -4q5 4 10 0M-6 1q6 4 12 0M-5 6q5 4 10 0" strokeWidth="1.4" />
    </g>
  </>
);

const maple = () => (
  <>
    {[
      [0.3, -1, 0.42, MUSTARD],
      [0.55, 1, 0.5, BRICK],
      [0.8, -1, 0.5, MUSTARD],
      [1, 0, 0.6, BRICK],
    ].map(([t, side, s, fill], i) => (
      <g key={i} transform={at(t, `rotate(${ang(t) + 90 + side * 40}) scale(${s}) translate(-30 -56)`)}>
        <path d={MAPLE} fill={fill} strokeWidth={2 / s} />
        <path d={MAPLE_VEINS} strokeWidth={1.2 / s} />
      </g>
    ))}
  </>
);

const ginkgo = () => (
  <>
    {[
      [0.3, -1, MUSTARD],
      [0.55, 1, SAGE],
      [0.8, -1, MUSTARD],
      [1, 0, SAGE],
    ].map(([t, side, fill], i) => (
      <g key={i} transform={at(t, `rotate(${ang(t) + 90 + side * 35}) scale(0.95)`)}>
        <path d={GINKGO} fill={fill} />
        <path d="M0 0 L-9 -23 M0 0 L0 -24 M0 0 L9 -23" strokeWidth="1.2" />
      </g>
    ))}
  </>
);

const olive = () => (
  <>
    {Array.from({ length: 8 }, (_, i) => 0.1 + i * 0.1).flatMap((t, i) =>
      [1, -1].map((s) => (
        <path key={`${i}${s}`} d={OLIVE_LEAF} fill={SAGE} transform={at(t, `rotate(${ang(t) + s * 52})`)} />
      ))
    )}
    {[0.42, 0.66].map((t) => (
      <g key={t} transform={at(t, "translate(1 12)")}>
        <path d="M0 -12 V-5" />
        <ellipse rx="5" ry="7" fill={OLIVE} />
      </g>
    ))}
  </>
);

const oak = () => (
  <>
    {[
      [0.25, -1, SAGE],
      [0.48, 1, OLIVE],
      [0.78, -1, SAGE],
      [1, 0, OLIVE],
    ].map(([t, side, fill], i) => (
      <path key={i} d={OAK} fill={fill} transform={at(t, `rotate(${ang(t) + 90 + side * 42}) scale(1.35)`)} />
    ))}
    <g transform={at(0.63, "translate(1 6)")}>
      <path d="M-6 0 C-6 9 -2 14 0 16 C2 14 6 9 6 0Z" fill={MUSTARD} />
      <path d="M-7.5 1 C-7.5 -7 7.5 -7 7.5 1Z" fill={DUST} />
      <path d="M0 -6 V-9" />
    </g>
  </>
);

const kinds = { wildflower, fern, pine, maple, ginkgo, olive, oak };

export function Botanical({ kind = "wildflower", size = 120, flip = false }) {
  const draw = kinds[kind] || wildflower;
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 120 80"
      width={size}
      height={(size * 80) / 120}
      fill="none"
      stroke={INK}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d={STEM} />
      {draw()}
    </svg>
  );
}

// ----- corner flower cluster -----

function Daisy6({ x, y, r }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="0" cy={-r * 0.55} rx={r * 0.34} ry={r * 0.55} fill={CREAM} transform={`rotate(${a})`} />
      ))}
      <circle r={r * 0.24} fill={MUSTARD} />
    </g>
  );
}

// Off-white flowers, stems and leaves that grow out of a section corner.
// corner: "tl" | "tr" | "bl" | "br"
export function CornerCluster({ corner = "tl", size = 190 }) {
  const sx = corner.includes("r") ? -1 : 1;
  const sy = corner.includes("b") ? -1 : 1;
  const leaves = [
    [34, 38, 18, 1.1, SAGE],
    [72, 58, 70, 0.9, OLIVE],
    [100, 92, 62, 1, SAGE],
    [112, 130, 95, 0.9, OLIVE],
    [112, 26, -18, 0.9, SAGE],
    [136, 100, 15, 0.8, OLIVE],
    [158, 118, 40, 0.8, SAGE],
  ];
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      stroke={INK}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `scale(${sx}, ${sy})` }}
    >
      <path d="M-6 34 C56 38 108 84 128 176" />
      <path d="M64 54 C84 24 120 14 160 20" />
      <path d="M96 100 C132 96 156 112 176 140" />
      {leaves.map(([x, y, r, s, fill], i) => (
        <path key={i} d={LEAF} fill={fill} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`} />
      ))}
      <Daisy6 x={128} y={172} r={24} />
      <Daisy6 x={160} y={20} r={20} />
      <Daisy6 x={176} y={142} r={17} />
    </svg>
  );
}

// A hand-drawn question mark with two little sparkle strokes.
export function QuestionMark({ size = 56 }) {
  const q = "M16 28 C14 6 50 4 50 28 C50 46 32 46 32 64";
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 70 96"
      width={size}
      height={(size * 96) / 70}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: "rotate(-8deg)" }}
    >
      <path d={q} stroke={INK} strokeWidth="11" />
      <path d={q} stroke={MUSTARD} strokeWidth="5.5" />
      <circle cx="32" cy="82" r="7" fill={BRICK} stroke={INK} strokeWidth="2.6" />
      <path d="M58 8l5-5M62 22h7M6 10l-4-4" stroke={INK} strokeWidth="2.4" />
    </svg>
  );
}
