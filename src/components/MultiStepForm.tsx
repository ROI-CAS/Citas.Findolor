import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Phone, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppointments } from "@/context/AppointmentContext";
import { Checkbox } from "@/components/ui/checkbox";

const especialidades = [
  "Medicina del dolor",
  "Cuidados paliativos",
  "Anestesia"
];

const entidades = [
  "Particular",
  "Allianz",
  "Seguros Bolívar",
  "Seguros Alfa",
  "Sura",
  "Otro"
];

interface MultiStepFormProps {
  formSource?: "hero" | "booking-section";
}

export function MultiStepForm({ formSource = "hero" }: MultiStepFormProps) {
  const navigate = useNavigate();
  const { registrarConsulta } = useAppointments();
  
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    especialidad: "",
    entidad: "",
    acceptedPolicies: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.telefono || !formData.email || !formData.especialidad || !formData.entidad || !formData.acceptedPolicies) return;
    
    setIsSubmitting(true);

    const payload = {
      formSource,
      nombre: formData.nombre,
      telefono: formData.telefono,
      email: formData.email,
      especialidad: formData.especialidad,
      entidad: formData.entidad,
      mensaje: "",
    };

    // Fire-and-forget: we don't block navigation
    fetch("https://services.leadconnectorhq.com/hooks/6jIqC8dVIpPZSaRRRora/webhook-trigger/37367ef5-1ca4-4cad-acb8-23fbfb8f033a", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(err => console.error("[Webhook] Error:", err));

    console.log("[Lead] Form submitted (Single Step)", payload);
    registrarConsulta();
    navigate("/gracias");
  };

  const canProceed = formData.nombre.trim().length > 0 && 
                     formData.telefono.trim().length > 0 && 
                     formData.email.trim().length > 0 && 
                     formData.especialidad !== "" && 
                     formData.entidad !== "" && 
                     formData.acceptedPolicies;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full mb-2"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre" className="flex items-center gap-2 text-foreground font-semibold">
              <User className="w-4 h-4 text-primary" /> Nombre completo <span className="text-destructive">*</span>
            </Label>
            <Input 
              id="nombre" 
              value={formData.nombre} 
              onChange={e => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
              placeholder="¿Cómo te llamas?" 
              className="h-12 text-base bg-background/50 focus:bg-background transition-colors" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="telefono" className="flex items-center gap-2 text-foreground font-semibold">
              <Phone className="w-4 h-4 text-primary" /> Teléfono / Celular <span className="text-destructive">*</span>
            </Label>
            <Input 
              id="telefono" 
              type="tel" 
              value={formData.telefono} 
              onChange={e => setFormData(prev => ({ ...prev, telefono: e.target.value }))}
              placeholder="Para llamarte y confirmar" 
              className="h-12 text-base bg-background/50 focus:bg-background transition-colors" 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-semibold">
              <Mail className="w-4 h-4 text-primary" /> Correo electrónico <span className="text-destructive">*</span>
            </Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Para enviarte detalles de la cita" 
              className="h-12 text-base bg-background/50 focus:bg-background transition-colors" 
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="especialidad" className="flex items-center gap-2 text-foreground font-semibold">
              Seleccione una Especialidad <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <select
                id="especialidad"
                value={formData.especialidad}
                onChange={e => setFormData(prev => ({ ...prev, especialidad: e.target.value }))}
                className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background/50 px-3 py-2 text-base shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-primary transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>Selecciona una opción</option>
                {especialidades.map(esp => (
                  <option key={esp} value={esp}>{esp}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
                <svg className="h-4 w-4 opacity-50" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="entidad" className="flex items-center gap-2 text-foreground font-semibold">
              Seleccione una Entidad <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <select
                id="entidad"
                value={formData.entidad}
                onChange={e => setFormData(prev => ({ ...prev, entidad: e.target.value }))}
                className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background/50 px-3 py-2 text-base shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-primary transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>Selecciona una opción</option>
                {entidades.map(ent => (
                  <option key={ent} value={ent}>{ent}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground">
                <svg className="h-4 w-4 opacity-50" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <Checkbox 
            id="policies" 
            checked={formData.acceptedPolicies} 
            onCheckedChange={checked => setFormData(prev => ({ ...prev, acceptedPolicies: !!checked }))}
            className="mt-1" 
          />
          <Label htmlFor="policies" className="text-xs text-muted-foreground leading-relaxed cursor-pointer pr-2 border-none">
            Acepto las <a href="https://www.findolor.com/manual-de-politicas-de-tratamiento/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Políticas de tratamiento de datos</a>
          </Label>
        </div>

        <Button 
          type="submit" 
          disabled={!canProceed || isSubmitting} 
          className="w-full h-14 btn-cta text-base font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
        >
          {isSubmitting ? (
            <span className="flex items-center">Procesando...</span>
          ) : (
            <span className="flex items-center justify-center">
              Solicitar Que Me Llamen <CheckCircle className="w-5 h-5 ml-2" />
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  );
}