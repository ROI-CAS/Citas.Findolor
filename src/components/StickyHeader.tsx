import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const logo = "/images/findolor-logo.webp";
const PHONE_NUMBER = "573186912799";

declare global {
  interface Window {
    gtag_report_conversion?: (url: string) => boolean;
  }
}

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formFocused, setFormFocused] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight * 0.5);
      setIsScrolled(scrollY > 50);
      if (scrollY > 100) {
        setScrolledDown(scrollY > lastY);
      }
      lastY = scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) {
        setFormFocused(true);
      }
    };
    const handleFocusOut = (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement || e.target instanceof HTMLTextAreaElement) {
        setFormFocused(false);
      }
    };
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const hidden = !isVisible || formFocused || scrolledDown;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        opacity: hidden ? 0 : 1,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <div
        className={`glass-card border-b border-border/50 ${isScrolled ? "shadow-lg" : ""}`}
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
              {/* Desktop phone */}
              <a
                href={`tel:+${PHONE_NUMBER}`}
                onClick={() => window.gtag_report_conversion?.(`tel:+${PHONE_NUMBER}`)}
                className="hidden md:flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10"
              >
                <span>318 691 2799</span>
              </a>

              {/* CTA Button */}
              <div className="relative">
                <a href="#agendar">
                  <Button
                    className="btn-cta h-10 md:h-11 px-4 md:px-6 rounded-xl text-sm md:text-base font-semibold animate-pulse-subtle"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar
                  </Button>
                </a>
                {/* Urgency micro-badge */}
                <span className="absolute -top-2.5 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none shadow-md whitespace-nowrap">
                  Hoy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
