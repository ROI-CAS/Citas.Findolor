import { motion } from "framer-motion";
import { Calendar, Stethoscope, Activity, MapPin } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqCategories = [
  {
    id: "citas",
    label: "Citas",
    icon: Calendar,
    faqs: [
      {
        question: "¿Puedo agendar mi primera cita sin remisión médica?",
        answer:
          "Sí, puedes agendar tu valoración médica inicial directamente con nosotros sin necesidad de una remisión previa. Nuestro equipo médico realizará una evaluación completa para determinar el mejor plan de tratamiento para tu caso.",
      },
      {
        question: "¿Cómo agendo una cita?",
        answer:
          "Puedes agendar tu cita por WhatsApp o llamada al 318 691 2799, por teléfono fijo al 601 673 6707, o completando el formulario de contacto en esta página. Te responderemos en el menor tiempo posible para confirmar tu cita.",
      },
      {
        question: "¿Cuál es la política de cancelación?",
        answer:
          "Te pedimos informarnos con al menos 24 horas de anticipación si necesitas cancelar o reprogramar tu cita. Esto nos permite ofrecerle ese espacio a otro paciente que lo necesite y reagendar tu consulta sin inconvenientes.",
      },
    ],
  },
  {
    id: "servicios",
    label: "Servicios",
    icon: Stethoscope,
    faqs: [
      {
        question: "¿Qué tipos de dolor tratan?",
        answer:
          "Atendemos dolor musculoesquelético, neuropático, postquirúrgico, oncológico, cefaleas, lumbalgia, lesiones deportivas y dolor crónico de diversas causas. Nuestro enfoque es integral y personalizado según las necesidades de cada paciente.",
      },
      {
        question: "¿Qué especialidades conforman el equipo?",
        answer:
          "Contamos con un equipo interdisciplinario que incluye especialistas en Medicina del Dolor, Anestesiología, Psicología del dolor y Rehabilitación. El equipo que te acompañe dependerá de las necesidades específicas de tu caso.",
      },
      {
        question: "¿Ofrecen telemedicina?",
        answer:
          "Sí, ofrecemos consultas de telemedicina para seguimiento y casos que no requieran examen físico presencial. Esta modalidad te permite recibir atención desde la comodidad de tu hogar.",
      },
      {
        question: "¿Qué es el programa Paciente Experto?",
        answer:
          "Es un programa único que empodera a pacientes que han culminado exitosamente su tratamiento para convertirse en testimonios vivos y guías para otros pacientes que inician su proceso. Estos pacientes comparten su experiencia y brindan apoyo emocional a quienes están comenzando.",
      },
    ],
  },
  {
    id: "procedimientos",
    label: "Procedimientos",
    icon: Activity,
    faqs: [
      {
        question: "¿Realizan procedimientos intervencionistas?",
        answer:
          "Sí, realizamos diversos procedimientos mínimamente invasivos como bloqueos nerviosos, infiltraciones guiadas por imagen, radiofrecuencia y neuromodulación. Estos tratamientos están diseñados para aliviar el dolor de manera efectiva y segura.",
      },
      {
        question: "¿Los procedimientos requieren hospitalización?",
        answer:
          "La mayoría de nuestros procedimientos son ambulatorios, lo que significa que puedes regresar a casa el mismo día. Te entregamos instrucciones claras de preparación y cuidados posteriores para garantizar tu bienestar.",
      },
      {
        question: "¿Cuándo veré mejoría?",
        answer:
          "Los resultados varían según cada paciente y diagnóstico. La mejoría suele ser progresiva y se evalúa en controles periódicos. Tu médico te explicará qué esperar según tu condición específica y ajustará el tratamiento según sea necesario.",
      },
    ],
  },
  {
    id: "ubicacion",
    label: "Ubicación y Pagos",
    icon: MapPin,
    faqs: [
      {
        question: "¿Dónde están ubicados?",
        answer:
          "Estamos ubicados en la Carrera 16 # 97-46, Edificio Torre 97, Torre 2, Consultorios 705-706, en Bogotá. La zona cuenta con parqueadero disponible y nuestras instalaciones tienen accesibilidad para personas con movilidad reducida.",
      },
    ],
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-light text-primary font-medium text-sm rounded-full mb-4">
            Resolvemos tus dudas
          </span>
          <h2 className="section-heading mb-4">Preguntas Frecuentes</h2>
          <p className="section-subheading mx-auto">
            Encuentra respuestas organizadas por tema para resolver tus dudas
            rápidamente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="citas" className="w-full">
            <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
              <TabsList className="flex md:grid md:grid-cols-4 w-max md:w-full h-auto gap-2 bg-transparent p-0 mb-8">
                {faqCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border bg-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all duration-200 hover:border-primary/50 whitespace-nowrap flex-shrink-0"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {faqCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border border-border rounded-xl px-6 data-[state=open]:bg-primary-light/30 data-[state=open]:border-primary/30 transition-colors"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
