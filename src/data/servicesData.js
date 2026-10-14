// ─── Services Data ────────────────────────────────────────────────────────────
// Edit services, pricing, and packages here. No component changes needed.
// ─────────────────────────────────────────────────────────────────────────────

export const servicesData = [
  {
    id: "wedding",
    title: "Wedding Photography",
    subtitle: "Full-Day Coverage",
    description:
      "Your wedding day is one of life's most precious moments. We deliver cinematic, emotive wedding photography that tells your unique love story from preparation to the final dance.",
    image: "https://images.pixieset.com/68754439/5c89fa6a101598290261d280dd7748b1-large.jpg",
    features: [
      "Full wedding-day coverage",
      "Two professional photographers",
      "Engagement session included",
      "Private online gallery",
      "100+ fully edited images",
      "Print release included",
    ],
    startingPrice: "GH₵ 3,500",
    cta: "Book Wedding Package",
  },
  {
    id: "portrait",
    title: "Portrait Photography",
    subtitle: "Personal & Studio Sessions",
    description:
      "Whether it's a personal branding shoot, family portrait, or solo session, we create timeless portraits that reflect your authentic self with elegance and style.",
    image: "https://images.pixieset.com/68754439/0f07884bb4b99294246934af868f4296-large.jpg",
    features: [
      "1–2 hour studio or outdoor session",
      "Professional lighting",
      "Multiple outfit changes",
      "25+ fully edited images",
      "Private online gallery",
      "Digital downloads",
    ],
    startingPrice: "GH₵ 800",
    cta: "Book Portrait Session",
  },
  {
    id: "events",
    title: "Event Photography",
    subtitle: "Corporate & Social Events",
    description:
      "From corporate galas to birthday celebrations, we document your events with energy and professionalism ensuring every key moment is preserved beautifully.",
    image: "https://images.pixieset.com/68754439/95ba9dbb39b93bea8ac829b9b561c5ab-large.jpg",
    features: [
      "Flexible coverage hours",
      "Real-time editing available",
      "Same-day turnaround option",
      "Full-resolution delivery",
      "Private gallery sharing",
      "Unlimited guests photographed",
    ],
    startingPrice: "GH₵ 1,200",
    cta: "Book Event Coverage",
  },
  {
    id: "commercial",
    title: "Commercial Photography",
    subtitle: "Brand & Business",
    description:
      "Elevate your brand with professional commercial photography. We create compelling visuals for marketing campaigns, product launches, and corporate content.",
    image: "https://images.pixieset.com/68754439/bb931729d54333c6a7d47051007e5f2f-large.jpeg",
    features: [
      "Full creative direction",
      "Styled concept shoot",
      "Licensing rights included",
      "50+ edited deliverables",
      "Commercial usage rights",
      "Retouching included",
    ],
    startingPrice: "GH₵ 2,000",
    cta: "Book Commercial Shoot",
  },
  {
    id: "videography",
    title: "Videography",
    subtitle: "Cinematic Video Production",
    description:
      "Our cinematic video production team captures your events and brand stories in stunning motion. From wedding films to promotional content, we deliver premium video.",
    image: "https://images.pixieset.com/68754439/62e26ae4b2508c569ca81fd1d86bf0e9-large.jpg",
    features: [
      "4K cinematic footage",
      "Drone aerial footage",
      "Professional audio capture",
      "Cinematic colour grading",
      "Highlight reel + full edit",
      "Multiple delivery formats",
    ],
    startingPrice: "GH₵ 2,500",
    cta: "Book Videography",
  },
];

// ─── Pricing Packages ─────────────────────────────────────────────────────────
export const pricingPackages = [
  {
    id: "basic",
    name: "Essential",
    price: "GH₵ 800",
    duration: "2 Hours",
    description: "Perfect for quick sessions and portraits",
    features: [
      "2 hours photo session",
      "1 location",
      "25 fully edited images",
      "Online private gallery",
      "Digital downloads",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: "standard",
    name: "Premium",
    price: "GH₵ 1,800",
    duration: "5 Hours",
    description: "Our most popular package for events and portraits",
    features: [
      "5 hours photo session",
      "2 locations",
      "80 fully edited images",
      "Online private gallery",
      "Digital downloads",
      "1 printed album (8×10)",
    ],
    highlighted: true,
    badge: "Most Popular",
    cta: "Choose Premium",
  },
  {
    id: "luxury",
    name: "Luxury",
    price: "GH₵ 3,500",
    duration: "Full Day",
    description: "Complete coverage for weddings and large events",
    features: [
      "Full-day coverage (10 hrs)",
      "2 professional photographers",
      "Unlimited locations",
      "200+ fully edited images",
      "Online private gallery",
      "2 premium printed albums",
      "Engagement session",
      "Priority editing (7 days)",
    ],
    highlighted: false,
    cta: "Go Luxury",
  },
];
