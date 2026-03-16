import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import findolorLogo from "@/assets/findolor-logo.png";

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: object) => void;
    gtag_report_conversion?: (url: string) => boolean;
  }
}

const Gracias = () => {
  useEffect(() => {
    // Google Ads conversion tracking for form submission
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-853236324/FORM_CONVERSION_LABEL",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <img
          src={findolorLogo}
          alt="Findolor"
          className="h-12 mx-auto"
        />

        {/* Confirmation icon */}
        <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-14 h-14 text-secondary" />
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            ¡Gracias por tu solicitud!
          </h1>
          <p className="text-muted-foreground text-lg">
            Nuestro equipo se pondrá en contacto contigo pronto para confirmar tu cita.
          </p>
        </div>

        {/* Phone numbers */}
        <div className="bg-muted/50 rounded-2xl p-6 space-y-3">
          <p className="text-sm text-muted-foreground font-medium">
            También puedes llamarnos directamente:
          </p>
          <div className="flex flex-col items-center gap-2">
            <a
              href="tel:+573186912799"
              onClick={() => window.gtag_report_conversion?.("tel:+573186912799")}
              className="flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Phone className="w-4 h-4" />
              318 691 2799
            </a>
            <a
              href="tel:+576016736707"
              onClick={() => window.gtag_report_conversion?.("tel:+576016736707")}
              className="flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Phone className="w-4 h-4" />
              601 673 6707
            </a>
          </div>
        </div>

        {/* Blog link */}
        <a
          href="https://www.findolor.com/blog-de-manejo-del-dolor-y-cuidados-paliativos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" size="lg" className="gap-2 w-full">
            Visita nuestro blog sobre manejo del dolor
          </Button>
        </a>

        {/* Back button */}
        <Link to="/">
          <Button variant="outline" size="lg" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Gracias;
