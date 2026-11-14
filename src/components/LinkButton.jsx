import { useState } from "react";

// A link that is honest about missing URLs: when `url` is empty it renders a
// disabled-looking button saying "coming soon" instead of a dead link.
export default function LinkButton({ url, children, icon: Icon, className = "", soonLabel }) {
  const [shown, setShown] = useState(false);
  const classes =
    "inline-flex items-center gap-2 font-type text-sm border-2 border-ink rounded-full px-4 py-2 transition-transform " +
    className;

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`${classes} hover:-translate-y-0.5`}>
        {Icon && <Icon size={16} aria-hidden="true" />}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-disabled="true"
      onClick={() => {
        setShown(true);
        setTimeout(() => setShown(false), 2200);
      }}
      className={`${classes} opacity-70 border-dashed cursor-help`}
      title="Link coming soon"
    >
      {Icon && <Icon size={16} aria-hidden="true" />}
      {shown ? soonLabel || "link coming soon" : children}
    </button>
  );
}
