import { motion } from "framer-motion";
import { Award, GraduationCap, Star, Linkedin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import drGarzonImage from "@/assets/dr-garzon.webp";

const doctor = {
  name: "Dr. Luis Alberto Garzón",
  specialty: "Anestesiología, Medicina del Dolor y Cuidados Paliativos",
  image: drGarzonImage,
  experience: "20+ años",
  education: "Especialista Certificado",
  certifications: ["ACED", "IASP", "IAHPC", "SCARE"],
  rating: 4.9,
  reviews: 456,
  bio: "Gerente General de FinDolor. Referente en manejo del dolor y cuidados paliativos en Bogotá, con liderazgo en servicios de dolor en Clínica Los Nogales y el Hospital de San José. Cofundador y director de posgrado en Medicina del Dolor y Cuidados Paliativos (FUCS).",
};

export function DoctorsSection() {
  return (
    <section id="equipo" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Tu Especialista
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Especialista con amplia experiencia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 20 años de práctica clínica y actualización continua con formación internacional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
              {/* Image - matches content height */}
              <div className="relative w-full md:w-72 flex-shrink-0">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 md:h-full object-cover object-[center_15%]"
                  loading="lazy"
                  width={288}
                  height={400}
                />
              </div>

              {/* Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                  </div>
                  <a href="https://www.linkedin.com/in/luis-alberto-garz%C3%B3n-fern%C3%A1ndez-214908126/" target="_blank" rel="noopener noreferrer" aria-label="Ver perfil de LinkedIn del Dr. Garzón" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground mb-6">{doctor.bio}</p>

                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold">{doctor.experience}</span>
                      <p className="text-sm text-muted-foreground">de experiencia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-foreground font-semibold">{doctor.education}</span>
                      <p className="text-sm text-muted-foreground">Formación profesional</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {doctor.certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-full font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                {/* CTA after credentials */}
                <div className="mt-6 pt-6 border-t border-border">
                  <Button asChild className="w-full sm:w-auto btn-cta h-12 px-6 rounded-xl text-base font-semibold">
                    <a href="#agendar">
                      Agenda tu valoración con nuestro especialista
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
