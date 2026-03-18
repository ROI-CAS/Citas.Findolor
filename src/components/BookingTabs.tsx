import { useState } from "react";
import { Phone, CalendarDays, CheckCircle, ArrowRight, Clock } from "lucide-react";
import { MultiStepForm } from "./MultiStepForm";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/AxHFQX42P4lbkb5Invw5";

interface BookingTabsProps {
  formSource: "hero" | "booking-section";
}

export function BookingTabs({ formSource }: BookingTabsProps) {
  const [activeTab, setActiveTab] = useState<"call" | "calendar">("call");
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      {/* Tab buttons */}
      <div className="flex rounded-xl overflow-hidden mb-4 bg-muted p-1 gap-1">
        <button
          type="button"
          onClick={() => setActiveTab("call")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeTab === "call"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground border border-border"
          }`}
        >
          <Phone className="w-4 h-4" />
          Te llamamos
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("calendar")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
            activeTab === "calendar"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground border border-border"
          }`}
        >
          <CalendarDays className="w-4 h-4" />
          Prefiero elegir
        </button>
      </div>

      {/* 24h Badge only on call tab */}
      {activeTab === "call" && (
        <div className="mb-4 text-center">
          <p className="inline-flex items-center justify-center gap-1.5 bg-[#50D87F]/10 text-emerald-700 dark:bg-[#50D87F]/20 dark:text-emerald-300 font-semibold px-4 py-1.5 rounded-full text-xs sm:text-sm">
            <Clock className="w-3.5 h-3.5" />
            Respuesta en <span className="font-bold underline decoration-emerald-500/30 underline-offset-2">menos de 24 horas</span>
          </p>
        </div>
      )}

      {/* Tab content - fixed height container */}
      <div className="min-h-[340px]">
        {activeTab === "call" ? (
          <MultiStepForm formSource={formSource} />
        ) : (
          <div className="text-center py-4 flex flex-col items-center justify-center min-h-[340px]">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <CalendarDays className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-lg font-bold text-foreground mb-1">Elige tu horario ideal</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Visualiza nuestra disponibilidad y selecciona el día y hora que mejor se ajuste a ti.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              <span className="inline-flex items-center gap-1 text-xs bg-muted px-2.5 py-1 rounded-full font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-primary" /> Confirmación inmediata
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-muted px-2.5 py-1 rounded-full font-medium">
                <CalendarDays className="w-3.5 h-3.5 text-primary" /> Horarios flexibles
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-muted px-2.5 py-1 rounded-full font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-primary" /> Sin filas ni esperas
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowCalendar(true)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-accent text-accent-foreground text-base font-bold shadow-lg border-2 border-accent/80 hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
            >
              Abrir Calendario <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Calendar Dialog */}
      <Dialog open={showCalendar} onOpenChange={setShowCalendar}>
        <DialogContent className="max-w-[80vw] max-h-[85vh] p-0 overflow-hidden">
          <DialogTitle className="sr-only">Calendario de citas</DialogTitle>
          <iframe
            src={BOOKING_URL}
            title="Calendario de citas"
            style={{ width: "100%", height: "80vh", border: "none" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
