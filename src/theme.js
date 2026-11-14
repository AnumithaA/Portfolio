// Section background colours, in page order. Each one is a soft, light tint of the
// palette so the site stays bright. Edit a colour here and the gradients between
// sections update automatically.
const colors = {
  hero: "#F3F0E6",
  about: "#DDE0CB",
  education: "#EFE3C4",
  skills: "#D9E1DF",
  projects: "#EBD3C4",
  experience: "#E6D9C8",
  achievements: "#DFE2C9",
  contact: "#D3D9C3",
};

const order = Object.keys(colors);

// Returns the inline CSS variables used by the `.flow` class.
export function flow(id) {
  const i = order.indexOf(id);
  const prev = colors[order[Math.max(0, i - 1)]];
  const next = colors[order[Math.min(order.length - 1, i + 1)]];
  return { "--c": colors[id], "--prev": prev, "--next": next };
}
