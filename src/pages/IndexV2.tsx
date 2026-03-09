import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { HeroV2 } from "@/components/HeroV2";
import { TrustBadges } from "@/components/TrustBadges";
import { StickyHeader } from "@/components/StickyHeader";
import { MultiStepForm } from "@/components/MultiStepForm";

// Lazy load below-fold components
const SocialProofV2 = lazy(() => import("@/components/SocialProofV2").then(m => ({ default: m.SocialProofV2 })));
const VideoSection = lazy(() => import("@/components/VideoSection").then(m => ({ default: m.VideoSection })));
const DoctorsSection = lazy(() => import("@/components/DoctorsSection").then(m => ({ default: m.DoctorsSection })));
const ProcessTimeline = lazy(() => import("@/components/ProcessTimeline").then(m => ({ default: m.ProcessTimeline })));
const BenefitsV2 = lazy(() => import("@/components/BenefitsV2").then(m => ({ default: m.BenefitsV2 })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTAV2 = lazy(() => import("@/components/FinalCTAV2").then(m => ({ default: m.FinalCTAV2 })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const ClickToCallButton = lazy(() => import("@/components/ClickToCallButton").then(m => ({ default: m.ClickToCallButton })));
const LiveCounter = lazy(() => import("@/components/LiveCounter").then(m => ({ default: m.LiveCounter })));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup").then(m => ({ default: m.ExitIntentPopup })));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton").then(m => ({ default: m.WhatsAppButton })));

const SectionFallback = () => <div className="py-20" />;

const IndexV2 = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroV2 />
      <TrustBadges />
      <Suspense fallback={<SectionFallback />}>
        <SocialProofV2 />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <VideoSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <DoctorsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProcessTimeline />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BenefitsV2 />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>

      {/* Sección de agendamiento inferior */}
      <section id="agendar" className="py-16 md:py-20 bg-muted/30">
        <div className="container max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Da el primer paso hacia una vida sin dolor
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Solicita tu valoración médica y recibe orientación personalizada de nuestro equipo especialista
            </p>
          </div>
          <div
            className="relative rounded-3xl p-5 md:p-7 shadow-2xl overflow-hidden"
            style={{
              background: "hsla(0, 0%, 100%, 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid hsla(0, 0%, 100%, 0.6)",
              boxShadow: "0 25px 50px -12px hsla(0, 0%, 0%, 0.25), 0 0 0 1px hsla(0, 0%, 100%, 0.1) inset",
            }}
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, hsla(199, 76%, 52%, 0.08), transparent 50%)",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Te llamamos</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Nuestro equipo médico se comunicará contigo para orientarte y agendar tu valoración médica en el menor tiempo posible.
              </p>
              <MultiStepForm formSource="booking-section" />
              <p className="text-center text-xs text-muted-foreground mt-3">
                🔒 Tu información está protegida. Recibirás confirmación por WhatsApp y correo electrónico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionFallback />}>
        <FinalCTAV2 />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
        <ClickToCallButton />
      </Suspense>
      <Suspense fallback={null}>
        <LiveCounter />
      </Suspense>
      <Suspense fallback={null}>
        <ExitIntentPopup />
      </Suspense>
    </div>
  );
};

export default IndexV2;
