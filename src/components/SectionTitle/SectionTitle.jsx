/**
 * SectionTitle — reusable elegant heading block
 * Props: eyebrow, title, subtitle, centered (bool), light (bool)
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`inline-block tracking-[0.25em] uppercase text-xs font-medium mb-3 ${
            light ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${
          light ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-neutral-300" : "text-neutral-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
