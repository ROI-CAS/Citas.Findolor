import { motion } from "framer-motion";
import { Eye, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useAppointments, getBogotaHour } from "@/context/AppointmentContext";

// Obtener rango de "viendo ahora" según franja horaria de Bogotá
const getViewerRange = (): { min: number; max: number } => {
  const hour = getBogotaHour();
  
  if (hour >= 6 && hour < 10) {
    return { min: 4, max: 8 };   // Inicio de actividad
  } else if (hour >= 10 && hour < 14) {
    return { min: 7, max: 14 };  // Pico de búsqueda
  } else if (hour >= 14 && hour < 18) {
    return { min: 5, max: 12 };  // Actividad moderada
  } else if (hour >= 18 && hour < 22) {
    return { min: 3, max: 8 };   // Fin del día
  }
  // 10pm - 6am: actividad baja
  return { min: 2, max: 5 };
};

export function LiveCounter() {
  const { consultasHoy } = useAppointments();
  const [viewingNow, setViewingNow] = useState(() => {
    const range = getViewerRange();
    return Math.floor((range.min + range.max) / 2);
  });

  useEffect(() => {
    // Simular visualizaciones en tiempo real con rangos basados en hora de Bogotá
    const viewerInterval = setInterval(() => {
      const range = getViewerRange();
      setViewingNow(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.min(Math.max(newVal, range.min), range.max);
      });
    }, 8000);

    return () => clearInterval(viewerInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:block fixed bottom-24 left-4 z-40 bg-white rounded-xl shadow-xl border border-border p-3 sm:p-4 max-w-[200px] sm:max-w-xs"
    >
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="relative flex-shrink-0">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-pulse" />
        </div>
        <div className="text-xs sm:text-sm">
          <span className="font-semibold text-foreground">{viewingNow}</span>
          <span className="text-muted-foreground"> viendo ahora</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-3 border-t border-border">
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
        <div className="text-xs sm:text-sm">
          <span className="font-semibold text-foreground">{consultasHoy}</span>
          <span className="text-muted-foreground"> consultas hoy</span>
        </div>
      </div>
    </motion.div>
  );
}
