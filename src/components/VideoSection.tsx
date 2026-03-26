import { motion } from "framer-motion";
import { Play, CheckCircle } from "lucide-react";
import { useState } from "react";
import videoThumbnail from "@/assets/video-thumbnail.jpg";

const benefits = [
  "Valoración médica integral (historia clínica, examen y definición del plan)",
  "Opciones de tratamiento mínimamente invasivas según cada caso",
  "Seguimiento continuo y personalizado durante tu evolución",
  "Atención especializada y coordinada entre las áreas de dolor y cuidados paliativos",
];

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-muted">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <img 
                    src={videoThumbnail} 
                    alt="Video institucional Findolor" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={640}
                    height={360}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Reproducir video institucional Findolor"
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group"
                    >
                      <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg inline-block">
                      ▶ Ver cómo ayudamos a nuestros pacientes (2:30)
                    </p>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/2_Gku2MN8YI?autoplay=1"
                  title="Video institucional Findolor"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Video Stats */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-6 py-3 flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-xs text-muted-foreground">Años de experiencia</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Especialistas</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Nuestro Método
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Un enfoque integral para{" "}
              <span className="text-primary">el manejo del dolor</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Integramos valoración clínica, diagnóstico y un plan de tratamiento 
              personalizado para cada paciente. Priorizamos opciones seguras y 
              mínimamente invasivas, con acompañamiento cercano durante todo el proceso:
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
