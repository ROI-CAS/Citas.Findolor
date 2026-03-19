import { motion } from "framer-motion";
import { Shield, Clock, Award, ChevronDown, Phone } from "lucide-react";
import { BookingTabs } from "./BookingTabs";
import { TopContactBar } from "./TopContactBar";
import heroImage from "@/assets/hero-findolor-bg.jpg";
import heroImageMobile from "@/assets/hero-findolor-mobile.jpg";
const logo = "/images/findolor-logo.webp";
const trustPoints = [{
  icon: Shield,
  text: "Médicos especialistas en tratamiento del dolor crónico"
}, {
  icon: Clock,
  text: "Llamamos el mismo día"
}, {
  icon: Award,
  text: "+20 años de experiencia"
}];

export function HeroV2() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={heroImageMobile} />
          <img src={heroImage} alt="Paciente aliviado" className="w-full h-full object-cover" fetchPriority="high" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/95 via-[#1a2332]/80 to-[#1a2332]/60" />
      </div>

      <div className="container relative z-10 py-6 lg:py-8 min-h-screen flex flex-col pt-24 lg:pt-32">
        {/* Header - Now positioned absolute or flex */}
        <motion.header initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="absolute top-6 lg:top-8 left-4 lg:left-8 z-50">
          <img src={logo} alt="Findolor" className="w-[160px] md:w-[190px] h-auto brightness-200" />
        </motion.header>

        {/* Main Content */}
        <div className="flex-1 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-8 lg:mt-4">
          {/* Left - Messaging */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="text-white mt-12 lg:mt-24">

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              ¿Llevas años con dolor crónico sin encontrar solución?{" "}
              <span className="text-secondary">Nuestros especialistas lo tratan desde la primera consulta.</span>
            </h1>

            <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
              No más tratamientos que solo alivian temporalmente. En FinDolor evaluamos tu caso completo y diseñamos un plan para que vuelvas a vivir sin depender del dolor.
              <span className="block mt-3 font-medium text-white">
                +20 años de experiencia · 4.9★ en Google · Plan personalizado desde la primera valoración.
              </span>
            </p>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-6 mb-10">
              {trustPoints.map((point, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4,
              delay: 0.3 + index * 0.1
            }} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm text-white/90">{point.text}</span>
                </motion.div>)}
            </div>

            {/* Insurance Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-6 border-t border-white/10 mb-8 lg:mb-12"
            >
              <p className="text-base font-normal text-white/80 mb-5 tracking-wide lowercase">
                en convenio con aseguradoras
              </p>
              <div className="flex flex-wrap items-center gap-6 lg:gap-10 mt-2">
                <img src="/images/insurers/allianz.png" alt="Allianz" className="h-[35px] md:h-[50px] w-auto object-contain trust-logo brightness-0 invert opacity-70 hover:opacity-100" title="Allianz" />
                <img src="/images/insurers/seguros-bolivar.png" alt="Seguros Bolívar" className="h-[45px] md:h-[65px] w-auto object-contain trust-logo brightness-0 invert opacity-70 hover:opacity-100" title="Seguros Bolívar" />
                <img src="/images/insurers/seguros-alfa.png" alt="Seguros Alfa" className="h-[40px] md:h-[55px] w-auto object-contain trust-logo brightness-0 invert opacity-70 hover:opacity-100" title="Seguros Alfa" />
                <img src="/images/insurers/sura.png" alt="Sura" className="h-[30px] md:h-[45px] w-auto object-contain trust-logo brightness-0 invert opacity-70 hover:opacity-100" title="Sura" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form with Glassmorphism */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative z-20 mt-16 md:mt-0">
            
            <TopContactBar />

            <div className="relative rounded-3xl p-5 md:p-7 shadow-2xl overflow-hidden" style={{
              background: "hsla(0, 0%, 100%, 0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid hsla(0, 0%, 100%, 0.6)",
              boxShadow: "0 25px 50px -12px hsla(0, 0%, 0%, 0.25), 0 0 0 1px hsla(0, 0%, 100%, 0.1) inset"
            }}>
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                background: "radial-gradient(circle at top right, hsla(199, 76%, 52%, 0.08), transparent 50%)"
              }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Agenda tu valoración médica</h3>
                </div>
                <BookingTabs formSource="hero" />
                <p className="text-center text-xs text-muted-foreground mt-2">
                  🔒 Tu información está protegida. Recibirás confirmación por WhatsApp y correo electrónico.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button onClick={scrollToContent} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors" aria-label="Scroll down">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </div>
    </section>;
}