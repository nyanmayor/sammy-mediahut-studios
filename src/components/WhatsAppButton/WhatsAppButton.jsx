import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { getWhatsAppUrl } from "../../utils/helpers";

export default function WhatsAppButton() {
  const url = getWhatsAppUrl(
    siteConfig.whatsapp.number,
    siteConfig.whatsapp.defaultMessage
  );

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle size={26} fill="white" className="relative z-10" />
    </motion.a>
  );
}
