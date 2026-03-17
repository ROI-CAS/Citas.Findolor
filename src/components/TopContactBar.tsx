import { Smartphone, Phone as PhoneIcon } from "lucide-react";

export function TopContactBar() {
  return (
    <div className="w-full absolute top-0 left-0 z-50 pt-6 flex flex-col items-center justify-center">
      <p className="text-white text-base md:text-lg mb-1 tracking-wide font-medium drop-shadow-md">
        Contáctanos para Agendar tu Cita
      </p>
      <div className="flex items-center gap-3 text-2xl md:text-[32px] font-semibold tracking-tight text-white drop-shadow-md">
        <a href="tel:+573186912799" className="flex items-center gap-2 hover:text-[#29b6f6] transition-colors">
          <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-[#29b6f6]" strokeWidth={2.5} />
          <span>318 6912799</span>
        </a>
        <div className="h-8 md:h-10 w-px bg-white/40 mx-2" />
        <a href="tel:+576016736707" className="flex items-center gap-2 hover:text-[#29b6f6] transition-colors">
          <PhoneIcon className="w-6 h-6 md:w-8 md:h-8 text-[#29b6f6]" strokeWidth={2.5} />
          <span>601 6736707</span>
        </a>
      </div>
    </div>
  );
}
