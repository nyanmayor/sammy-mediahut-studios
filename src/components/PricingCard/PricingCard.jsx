import { Check } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * PricingCard component
 * Props: pkg — from pricingPackages in servicesData.js
 */
export default function PricingCard({ pkg }) {
  return (
    <div
      className={`relative flex flex-col p-8 border transition-all duration-300 hover:-translate-y-1 ${
        pkg.highlighted
          ? "bg-neutral-900 border-neutral-900 text-white shadow-2xl"
          : "bg-white border-neutral-200 text-neutral-900"
      }`}
    >
      {/* Badge */}
      {pkg.badge && (
        <span className="absolute -top-3 left-8 bg-white text-neutral-900 text-xs font-medium px-3 py-1 border border-neutral-200">
          {pkg.badge}
        </span>
      )}

      <div className="mb-6">
        <p
          className={`text-xs tracking-widest uppercase font-medium mb-2 ${
            pkg.highlighted ? "text-neutral-400" : "text-neutral-500"
          }`}
        >
          {pkg.name}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-4xl">{pkg.price}</span>
        </div>
        <p className={`text-sm mt-1 ${pkg.highlighted ? "text-neutral-400" : "text-neutral-500"}`}>
          {pkg.duration}
        </p>
        <p className={`text-sm mt-3 ${pkg.highlighted ? "text-neutral-300" : "text-neutral-600"}`}>
          {pkg.description}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              size={16}
              className={`mt-0.5 flex-shrink-0 ${
                pkg.highlighted ? "text-neutral-300" : "text-neutral-500"
              }`}
            />
            <span className={pkg.highlighted ? "text-neutral-200" : "text-neutral-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`inline-flex items-center justify-center w-full py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
          pkg.highlighted
            ? "bg-white text-neutral-900 hover:bg-neutral-100"
            : "bg-neutral-900 text-white hover:bg-neutral-700"
        }`}
      >
        {pkg.cta}
      </Link>
    </div>
  );
}
