import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";

// ─── Validation Schema ────────────────────────────────────────────────────────
const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .regex(/^[0-9+\s\-()]+$/, "Phone number contains invalid characters"),
  eventType: z.string().min(1, "Please select an event type"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  location: z.string().min(3, "Please enter the event location"),
  package: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide a brief message (at least 10 characters)"),
});

const eventTypes = [
  "Wedding",
  "Portrait",
  "Birthday",
  "Corporate Event",
  "Commercial",
  "Pre-Wedding",
  "Fashion",
  "Other",
];

const packages = ["Essential", "Premium", "Luxury", "Custom / Not Sure"];

const FieldError = ({ message }) =>
  message ? (
    <p className="mt-1 text-red-500 text-xs flex items-center gap-1">
      <AlertCircle size={12} /> {message}
    </p>
  ) : null;

/**
 * BookingForm — validated booking form
 * Structured to easily connect to a backend API or Supabase later.
 */
export default function BookingForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data) => {
    setStatus("loading");

    // ── Future backend integration point ──────────────────────────────────────
    // Replace the timeout below with your actual API call, e.g.:
    //   const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/bookings`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ ...data, status: "Pending", createdAt: new Date().toISOString() }),
    //   });
    // ─────────────────────────────────────────────────────────────────────────

    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success
    console.log("Booking submitted:", {
      ...data,
      status: "Pending",
      createdAt: new Date().toISOString(),
    });

    setStatus("success");
    reset();

    // Reset to idle after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputCls = (field) =>
    `w-full border px-4 py-3 text-sm bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 transition ${
      errors[field]
        ? "border-red-400 focus:ring-red-400"
        : "border-neutral-200 focus:ring-neutral-900"
    }`;

  // ── Success state ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle size={56} className="text-green-500 mb-4" />
        <h3 className="font-serif text-2xl text-neutral-900 mb-2">
          Booking Request Received!
        </h3>
        <p className="text-neutral-500 max-w-sm">
          Thank you for reaching out. We'll review your details and get back to
          you within 24 hours to confirm your session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Row: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Your full name"
            {...register("fullName")}
            className={inputCls("fullName")}
          />
          <FieldError message={errors.fullName?.message} />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className={inputCls("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      {/* Row: Phone + Event Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+233 XX XXX XXXX"
            {...register("phone")}
            className={inputCls("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <label htmlFor="eventType" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            {...register("eventType")}
            className={inputCls("eventType")}
            defaultValue=""
          >
            <option value="" disabled>Select event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <FieldError message={errors.eventType?.message} />
        </div>
      </div>

      {/* Row: Date + Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Preferred Date *
          </label>
          <input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
            className={inputCls("preferredDate")}
            min={new Date().toISOString().split("T")[0]}
          />
          <FieldError message={errors.preferredDate?.message} />
        </div>

        <div>
          <label htmlFor="location" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Location *
          </label>
          <input
            id="location"
            type="text"
            placeholder="Event venue or city"
            {...register("location")}
            className={inputCls("location")}
          />
          <FieldError message={errors.location?.message} />
        </div>
      </div>

      {/* Row: Package + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="package" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Package (optional)
          </label>
          <select
            id="package"
            {...register("package")}
            className={inputCls("package")}
            defaultValue=""
          >
            <option value="">Select a package</option>
            {packages.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
            Approximate Budget (optional)
          </label>
          <input
            id="budget"
            type="text"
            placeholder="e.g. GH₵ 2,000"
            {...register("budget")}
            className={inputCls("budget")}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your session — vision, style, guest count, special requests..."
          {...register("message")}
          className={`${inputCls("message")} resize-none`}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-700 transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <Loader size={16} className="animate-spin" /> Sending your request...
          </>
        ) : (
          "Send Booking Request"
        )}
      </button>

      <p className="text-center text-xs text-neutral-400">
        We respond to all enquiries within 24 hours.
      </p>
    </form>
  );
}
