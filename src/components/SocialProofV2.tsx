import { motion } from "framer-motion";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Andrea Blanco",
    role: "Local Guide · 120 opiniones",
    initial: "A",
    rating: 5,
    text: "La verdad que no tengo palabras para agradecer al Dr. Luis Garzon quien atendió a mi mamá cuando el dolor era tan intenso (por la artritis la artrosis y el reumatismo) que ella comenzó a hablarnos de la eutanasia por que no aguantaba estar así. Literal mi mamá llego al consultorio encogida casi sin poder caminar y luego de dos horas donde el dr le dio total atención y buenos tratos |ella salio muy relajada y hasta el momento no se ha presentado otra crisis similar|. De todo corazón lo recomiendo se que hay que esforzarse pero es mejor ir donde el especialista",
    bgColor: "bg-primary",
  },
  {
    name: "Leidy Escobar",
    role: "Local Guide · 40 opiniones",
    initial: "L",
    rating: 4,
    text: "En general, |la atención al cliente es muy buena|. Tuve varias sesiones de fisioterapia y los profesionales fueron muy amables y atentos, además de contar con instalaciones limpias y bien cuidadas. Sin embargo, me gustaría que prestaran un poco más de atención a los ejercicios durante las sesiones, ya que en mi caso sentí un nivel de dolor considerable, y la terapia me pareció algo pasiva en relación con el malestar que experimentaba en ese momento. Agradezco el esfuerzo de todo el equipo",
    bgColor: "bg-[#4285F4]",
  },
  {
    name: "Claudia Angelica Camargo Molina",
    role: "3 opiniones",
    initial: "C",
    rating: 5,
    text: "|Es un lugar fantástico| se siente el servicio humano y acogedor!",
    bgColor: "bg-primary",
  },
];

// Helper function to render text with bold highlights (marked with |text|)
function renderHighlightedText(text: string) {
  const parts = text.split(/\|([^|]+)\|/);
  return parts.map((part, index) => {
    // Odd indices are the highlighted parts
    if (index % 2 === 1) {
      return (
        <strong key={index} className="text-foreground font-semibold">
          {part}
        </strong>
      );
    }
    return part;
  });
}

const stats = [
  { value: "500+", label: "Pacientes atendidos" },
  { value: "20+", label: "Años de experiencia" },
  { value: "10+", label: "Especialistas certificados" },
];

export function SocialProofV2() {
  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Opiniones reales de pacientes que han confiado en nuestro equipo médico especializado
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl"
              style={{
                boxShadow: "0 8px 32px -8px hsla(0, 0%, 0%, 0.08)",
              }}
            >
              {/* Card with glassmorphism */}
              <div
                className="relative h-full bg-card p-6 md:p-7 border border-border/60 hover:border-primary/30 transition-all duration-300"
                style={{
                  background: "linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--muted) / 0.3) 100%)",
                }}
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-5">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                {/* Google Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1.5 bg-muted/60 border border-border rounded-full px-3 py-1.5">
                    <BadgeCheck className="w-4 h-4 text-[#4285F4]" />
                    <span className="text-xs font-medium text-muted-foreground">
                      Reseña real de Google My Business
                    </span>
                  </div>
                </div>

                {/* Stars - golden style */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5"
                      style={{
                        fill: "hsl(45, 93%, 58%)",
                        color: "hsl(45, 93%, 58%)",
                        filter: "drop-shadow(0 1px 2px hsla(45, 93%, 40%, 0.3))",
                      }}
                    />
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-muted-foreground/20" />
                  ))}
                </div>

                {/* Quote with highlighted text */}
                <p className="text-foreground leading-relaxed mb-6 text-sm line-clamp-5">
                  "{renderHighlightedText(testimonial.text)}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0 ${
                      index === 1 ? "bg-[#4285F4]" : "bg-primary"
                    }`}
                  >
                    {testimonial.initial}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-foreground text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Convenio con aseguradoras
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["allianz", "seguros-bolivar", "seguros-alfa", "sura"].map((insurer) => (
              <img
                key={insurer}
                src={`/images/insurers/${insurer}.png`}
                alt={insurer}
                className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                loading="lazy"
                width={120}
                height={48}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
