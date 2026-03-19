import { motion } from "framer-motion";
import { ClipboardCheck, Stethoscope, Pill, HeartPulse, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "1",
    title: "Contacto Inicial",
    description: "Llena el formulario o llámanos para solicitar tu valoración.",
  },
  {
    icon: HeartPulse,
    number: "2",
    title: "Confirmación",
    description: "Te llamamos el mismo día (en horario hábil) para confirmar tu cita.",
  },
  {
    icon: Stethoscope,
    number: "3",
    title: "Valoración Especializada",
    description: "Asiste a tu cita con nuestros especialistas y da el primer paso hacia una vida sin dolor.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Tu Proceso de Atención
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Reserva Tu Cita en 3 Sencillos Pasos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y transparente diseñado para brindarte la mejor atención médica especializada
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 mx-auto bg-white rounded-full shadow-lg border-4 border-primary flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Step Number */}
                <div className="absolute top-16 right-1/4 bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  {step.number}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="relative flex flex-col items-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-secondary my-2" />
                )}
              </div>

              <div className="pb-8">
                <span className="text-primary font-bold text-sm">{step.number}</span>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
