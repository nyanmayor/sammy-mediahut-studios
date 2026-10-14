/**
 * Generate a WhatsApp URL with a pre-filled message
 * @param {string} phoneNumber - E.164 format e.g. "+233500000000"
 * @param {string} message
 * @returns {string} WhatsApp deep link URL
 */
export function getWhatsAppUrl(phoneNumber, message = "") {
  const cleaned = phoneNumber.replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleaned}?text=${encoded}`;
}

/**
 * Format a price string
 * @param {number} amount
 * @param {string} currency
 */
export function formatPrice(amount, currency = "GH₵") {
  return `${currency} ${Number(amount).toLocaleString()}`;
}

/**
 * Returns the current four-digit year
 */
export function getCurrentYear() {
  return new Date().getFullYear();
}

/**
 * Clamp a number between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Scroll-lock helpers — prevent body scroll when a modal/lightbox is open
 */
export function lockScroll() {
  document.body.style.overflow = "hidden";
}

export function unlockScroll() {
  document.body.style.overflow = "";
}
