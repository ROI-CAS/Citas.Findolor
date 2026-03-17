import { Smartphone, Phone as PhoneIcon } from "lucide-react";

export function TopContactBar() {
  return (
    <div className="w-full mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
      <p className="text-white/90 text-sm md:text-base mb-3 text-center font-medium">
        Contáctanos para Agendar tu Cita
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <a href="tel:+573186912799" className="flex items-center gap-2 group hover:scale-105 transition-transform">
          <div className="bg-[#29b6f6]/20 p-2 rounded-lg group-hover:bg-[#29b6f6]/30 transition-colors">
            <Smartphone className="w-5 h-5 text-[#29b6f6]" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">318 6912799</span>
        </a>
        <div className="hidden sm:block w-px h-8 bg-white/20" />
        <a href="tel:+576016736707" className="flex items-center gap-2 group hover:scale-105 transition-transform">
          <div className="bg-[#29b6f6]/20 p-2 rounded-lg group-hover:bg-[#29b6f6]/30 transition-colors">
            <PhoneIcon className="w-5 h-5 text-[#29b6f6]" strokeWidth={2.5} />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">601 6736707</span>
        </a>
      </div>
    </div>
  );
}
