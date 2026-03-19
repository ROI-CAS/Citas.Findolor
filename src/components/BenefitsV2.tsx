import { motion } from "framer-motion";
import { 
  Heart, 
  Users,
  Sparkles,
  CheckCircle
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Atención Humanizada",
    description: "El Dr. Garzón y su equipo te escuchan durante toda la consulta — sin prisa, sin recetas genéricas.",
  },
  {
    icon: Users,
    title: "Equipo con +20 Años",
    description: "Experiencia sólida en el manejo clínico del dolor y cuidados paliativos.",
  },
  {
    icon: Users,
    title: "Programa Paciente Experto",
    description: "Pacientes que culminaron su tratamiento guían y acompañan a quienes inician su camino.",
  },
];

const guarantees = [
  "Valoración médica integral (historia clínica, examen y definición del plan)",
  "Plan de tratamiento personalizado según tu diagnóstico y objetivos",
  "Atención oportuna, sin esperas innecesarias",
  "Acompañamiento continuo y seguimiento con ajustes según tu evolución",
];

export function BenefitsV2() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-muted/80 via-background to-primary/5">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              ¿Por qué elegir FinDolor?
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Donde otros tratamientos fallaron,{" "}
              <span className="text-gradient">FinDolor encuentra la solución</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              En FinDolor no ofrecemos soluciones genéricas. Evaluamos tu caso de forma integral y diseñamos un plan de manejo personalizado para aliviar el dolor, mejorar tu funcionalidad y elevar tu calidad de vida, con acompañamiento cercano en cada etapa.
            </p>

            {/* Guarantees */}
            <div className="space-y-3 mb-8">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{guarantee}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 btn-cta px-8 py-4 rounded-xl text-lg"
            >
              Agenda Tu Cita Ahora
            </a>
          </motion.div>

          {/* Right - Benefits Grid */}
          <div className="grid grid-cols-2 gap-4 items-start">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 ${
                  index === 2 ? "col-span-2 flex items-center gap-5 p-6" : ""
                }`}
              >
                <div className={`rounded-xl bg-primary/10 flex items-center justify-center shrink-0 ${
                  index === 2 ? "w-14 h-14" : "w-11 h-11 mb-3"
                }`}>
                  <benefit.icon className={`text-primary ${index === 2 ? "w-7 h-7" : "w-5 h-5"}`} />
                </div>
                <div>
                  <h3 className={`font-semibold text-foreground mb-1.5 ${index === 2 ? "text-base" : "text-sm"}`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed ${index === 2 ? "text-sm" : "text-xs"}`}>
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
