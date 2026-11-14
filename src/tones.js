// Literal class names so Tailwind can see them. Never build these with template strings.
// Keep text on coloured areas dark ink, or put it on a cream chip, for contrast.
export const tones = {
  sage: { bg: "bg-sage", hover: "hover:bg-sage", soft: "bg-sage/40", border: "border-sage", hex: "#A5AD91" },
  olive: { bg: "bg-olive", hover: "hover:bg-olive", soft: "bg-olive/30", border: "border-olive", hex: "#777D58" },
  brick: { bg: "bg-brick", hover: "hover:bg-brick", soft: "bg-brick/30", border: "border-brick", hex: "#B76E5B" },
  sky: { bg: "bg-sky", hover: "hover:bg-sky", soft: "bg-sky/35", border: "border-sky", hex: "#8298A5" },
  mustard: { bg: "bg-mustard", hover: "hover:bg-mustard", soft: "bg-mustard/40", border: "border-mustard", hex: "#C5AC70" },
  dust: { bg: "bg-dust", hover: "hover:bg-dust", soft: "bg-dust/30", border: "border-dust", hex: "#9B8068" },
};

export const tone = (name) => tones[name] || tones.sage;
