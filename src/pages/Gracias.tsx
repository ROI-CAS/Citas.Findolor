import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { CheckCircle, Phone, MapPin, ArrowLeft, Clock, PhoneCall, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import findolorLogo from "@/assets/findolor-logo.png";
import drGarzonImage from "@/assets/dr-garzon.webp";

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: object) => void;
    gtag_report_conversion?: (url: string) => boolean;
  }
}

const steps = [
  {
    icon: Clock,
    title: "Revisamos tu solicitud",
    description: "Nuestro equipo revisa los datos que nos enviaste para orientar mejor tu caso.",
  },
  {
    icon: PhoneCall,
    title: "Te contactamos hoy",
    description: "Una asistente se pondrá en contacto contigo para conocer más detalles y verificar disponibilidad.",
  },
  {
    icon: CalendarCheck,
    title: "Confirmamos tu cita",
    description: "Si tu caso es compatible con nuestros servicios, agendamos la fecha y hora de tu valoración.",
  },
];

const Gracias = () => {
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: "AW-853236324/FORM_CONVERSION_LABEL" });
    }

    // Celebración confetti
    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        origin: { y: 0.5 },
        ...opts,
        particleCount: Math.floor(150 * particleRatio),
      });
    };

    const timer = setTimeout(() => {
      fire(0.25, { spread: 26, startVelocity: 55, colors: ["#29b6f6", "#50D87F"] });
      fire(0.2,  { spread: 60, colors: ["#29b6f6", "#ffffff"] });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ["#50D87F", "#29b6f6"] });
      fire(0.1,  { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1,  { spread: 120, startVelocity: 45 });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Logo */}
        <img src={findolorLogo} alt="Findolor" className="h-11 mx-auto" />

        {/* Confirmation header — full width centered */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
            >
              <CheckCircle className="w-11 h-11 text-secondary" />
            </motion.div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-foreground"
          >
            ¡Solicitud recibida!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto"
          >
            Gracias por contactarnos. Nos pondremos en contacto contigo lo más pronto posible.
          </motion.p>
        </div>

        {/* Desktop: two columns / Mobile: single column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* LEFT column */}
          <div className="space-y-5">

            {/* What's next */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-5 space-y-4">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wide">¿Qué sigue?</p>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <step.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Phone + Address */}
            <div className="bg-muted/40 rounded-2xl p-5 space-y-4">
              <p className="text-sm font-semibold text-foreground">¿Tienes alguna duda? Llámanos:</p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+573186912799"
                  onClick={() => window.gtag_report_conversion?.("tel:+573186912799")}
                  className="flex items-center gap-2 text-primary font-bold text-base hover:underline"
                >
                  <Phone className="w-4 h-4" /> 318 691 2799
                </a>
                <a
                  href="tel:+576016736707"
                  onClick={() => window.gtag_report_conversion?.("tel:+576016736707")}
                  className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                >
                  <Phone className="w-4 h-4" /> 601 673 6707
                </a>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-border">
                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  Cra 16 #97-46, Edificio Torre 97, Torre 2, Consultorios 705-706 · Bogotá
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT column */}
          <div className="space-y-5">

            {/* Dr. Garzón */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
              <div className="flex flex-col items-center text-center gap-3">
                <img
                  src={drGarzonImage}
                  alt="Dr. Luis Alberto Garzón"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-2 border-primary/20 shadow-md"
                />
                <div>
                  <p className="text-sm text-foreground leading-relaxed italic">
                    "Cada caso es diferente. Nuestro compromiso es orientarte con honestidad para que recibas la atención que realmente necesitas."
                  </p>
                  <p className="text-sm text-primary font-semibold mt-3">Dr. Luis Alberto Garzón</p>
                  <p className="text-xs text-muted-foreground">Especialista en Medicina del Dolor</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-5">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-yellow-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed italic">
                "Mi mamá llegó al consultorio casi sin poder caminar y luego de dos horas <strong>salió muy relajada</strong>. De todo corazón lo recomiendo."
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Andrea Blanco · Google</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <a
                href="https://www.findolor.com/blog-de-manejo-del-dolor-y-cuidados-paliativos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="w-full">
                  Leer sobre manejo del dolor
                </Button>
              </a>
              <Link to="/">
                <Button variant="outline" size="lg" className="gap-2 w-full">
                  <ArrowLeft className="w-4 h-4" />
                  Volver al inicio
                </Button>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Gracias;
