import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const logo = "/images/findolor-logo.webp";
const PHONE_NUMBER = "573186912799";

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling past hero section (approximately 100vh)
      setIsVisible(scrollY > window.innerHeight * 0.5);
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div
            className={`
              glass-card border-b border-border/50
              ${isScrolled ? "shadow-lg" : ""}
            `}
            style={{
              background: "hsla(0, 0%, 100%, 0.85)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="container">
              <div className="flex items-center justify-between h-16 md:h-18">
                {/* Logo */}
                <a href="#" className="flex items-center">
                  <img
                    src={logo}
                    alt="Findolor"
                    className="w-auto"
                    style={{ height: '58px', width: '87px' }}
                  />
                </a>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-3">
                  {/* Click-to-Call - mobile */}
                  <motion.a
                    href={`tel:+${PHONE_NUMBER}`}
                    onClick={() => (window as any).gtag_report_conversion?.(`tel:+${PHONE_NUMBER}`)}
                    className="md:hidden relative"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <div className="relative h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-soft">
                      <Phone className="w-4 h-4" />
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full animate-ping" />
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-accent rounded-full" />
                    </div>
                  </motion.a>

                  {/* Desktop phone */}
                  <motion.a
                    href={`tel:+${PHONE_NUMBER}`}
                    onClick={() => (window as any).gtag_report_conversion?.(`tel:+${PHONE_NUMBER}`)}
                    className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <div className="relative">
                      <Phone className="w-4 h-4" />
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full animate-ping" />
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <span>318 691 2799</span>
                  </motion.a>

                  {/* CTA Button */}
                  <motion.a
                    href="#agendar"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      className="btn-cta h-10 md:h-11 px-4 md:px-6 rounded-xl text-sm md:text-base font-semibold animate-pulse-subtle"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Agendar Cita</span>
                      <span className="sm:hidden">Agendar</span>
                    </Button>
                    {/* Urgency micro-badge */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5, y: 4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                      className="absolute -top-2.5 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none shadow-md whitespace-nowrap"
                    >
                      Hoy
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
