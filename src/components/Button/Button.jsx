import { Link } from "react-router-dom";

/**
 * Button — polymorphic button/link component
 * variant: "primary" | "secondary" | "outline-white"
 * as: "button" | "link" | "a"
 */
export default function Button({
  children,
  variant = "primary",
  as: Tag = "button",
  to,
  href,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3 font-medium tracking-wide text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-800 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-700 active:scale-[0.98]",
    secondary:
      "bg-white text-neutral-900 hover:bg-neutral-100 active:scale-[0.98]",
    "outline-white":
      "border border-white text-white hover:bg-white hover:text-neutral-900 active:scale-[0.98]",
    "outline-dark":
      "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white active:scale-[0.98]",
  };

  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (Tag === "link" && to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  if (Tag === "a" && href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
