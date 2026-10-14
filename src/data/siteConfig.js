// ─── Site Configuration ───────────────────────────────────────────────────────
// Edit this file to update brand info, WhatsApp number, and social links
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  brand: {
    name: "MediaHut Studios",
    tagline: "Capturing Moments. Creating Memories.",
    description:
      "Award-winning photography studio specialising in weddings, portraits, events and commercial photography. Based in Accra, Ghana.",
    email: "hello@mediahutstudios.com",
    phone: "+233 20 539 5953",
    address: "East Legon, Accra, Ghana",
    founded: "2018",
  },

  // WhatsApp — update the number here ONLY
  whatsapp: {
    number: import.meta.env.VITE_WHATSAPP_NUMBER || "+233205395953",
    defaultMessage: "Hello, I would like to make a photography booking.",
  },

  social: {
    instagram: "https://www.instagram.com/mediahut_studios/",
    facebook: "https://facebook.com/mediahutstudios",
    tiktok: "https://tiktok.com/@mediahutstudios",
    youtube: "https://www.youtube.com/results?search_query=mediahut+studio",
    linkedin: "https://linkedin.com/company/mediahutstudios",
  },
};
