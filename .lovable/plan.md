

## Plan: Configurar webhook para ambos formularios MultiStepForm

### Contexto
Ambos formularios (hero y booking-section) usan el mismo componente `MultiStepForm` con un prop `formSource` que ya distingue entre "hero" (Form 1, arriba) y "booking-section" (Form 2, abajo). Se enviaran los datos al mismo webhook pero incluyendo el campo `formSource` para poder identificar cual formulario convierte mejor.

### Cambios

**`src/components/MultiStepForm.tsx`** - Modificar `handleSubmit` para:
1. Hacer un `fetch` POST al webhook `https://services.leadconnectorhq.com/hooks/6jIqC8dVIpPZSaRRRora/webhook-trigger/37367ef5-1ca4-4cad-acb8-23fbfb8f033a`
2. Enviar un JSON con todos los campos del formulario: `especialidad`, `entidad`, `nombre`, `telefono`, `email`, `mensaje`, y `formSource` (que sera "hero" o "booking-section")
3. Resolver los labels legibles de especialidad y entidad antes de enviar (en vez de los IDs internos)
4. El fetch sera fire-and-forget (no bloquear la navegacion a /gracias si falla el webhook)
5. Mantener la redireccion a `/gracias` despues de disparar el webhook

### Payload que se enviara al webhook

```json
{
  "formSource": "hero",
  "especialidad": "Medicina del dolor",
  "entidad": "Allianz",
  "nombre": "Juan Perez",
  "telefono": "3001234567",
  "email": "juan@email.com",
  "mensaje": "Tengo dolor de espalda"
}
```

El campo `formSource` tendra valor `"hero"` para el formulario de arriba y `"booking-section"` para el de abajo, lo que permite comparar en el CRM cual formulario genera mas conversiones.

### Archivos a modificar
- `src/components/MultiStepForm.tsx` (unica modificacion)

