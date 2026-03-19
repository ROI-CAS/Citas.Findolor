import { motion, AnimatePresence } from "framer-motion";
import { X, HeartPulse, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Desktop: trigger on mouse leaving viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Mobile: trigger after 35 seconds of inactivity
    let mobileTimer: ReturnType<typeof setTimeout> | null = null;
    const isMobile = window.innerWidth < 768;

    if (isMobile && !hasShown) {
      mobileTimer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 35000);
    } else {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (mobileTimer) clearTimeout(mobileTimer);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email captured:", email);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-4">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground relative">
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">¿Aún tienes dudas?</h3>
                    <p className="text-sm text-white/80">Es normal — estamos aquí para orientarte</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Una llamada sin compromiso puede orientarte
                </h4>
                <p className="text-muted-foreground text-sm mb-6">
                  El Dr. Garzón atiende a personas que llevan años buscando una solución. Cuéntanos tu caso — sin costo, sin presión.
                </p>

                <Button onClick={() => { setIsVisible(false); document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' }); }} className="w-full h-12" size="lg">
                  Quiero orientación por teléfono
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
