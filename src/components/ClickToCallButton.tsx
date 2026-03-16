import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PHONE_NUMBER = "573186912799";

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => boolean;
  }
}

export function ClickToCallButton() {
  const isMobile = useIsMobile();

  // Only show on mobile devices
  if (!isMobile) return null;

  return (
    <motion.a
      href={`tel:+${PHONE_NUMBER}`}
      onClick={() => window.gtag_report_conversion?.(`tel:+${PHONE_NUMBER}`)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed left-4 bottom-24 z-40 group"
      aria-label="Llamar ahora"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
        
        {/* Main button */}
        <div
          className="relative w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          style={{
            boxShadow: "0 8px 30px -4px hsl(199 76% 52% / 0.5)",
          }}
        >
          <Phone className="w-6 h-6" />
        </div>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-foreground text-background text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Llamar: 318 691 2799
          </div>
        </div>
      </div>
    </motion.a>
  );
}
