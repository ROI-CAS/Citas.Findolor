

## Plan: Agregar pestaña de calendario GHL a ambos formularios

Restaurar el sistema de tabs (como existía en `BookingCalendar.tsx`) en ambos formularios — hero y sección inferior — con dos pestañas:
1. **"Te llamamos"** → MultiStepForm actual
2. **"Elegir horario"** → iframe de GHL calendario

### Cambios

**1. `src/components/HeroV2.tsx`** (líneas 114-125)
- Reemplazar el contenido del formulario con `Tabs` de Radix UI
- Tab 1: "Te llamamos" con el `MultiStepForm` existente
- Tab 2: "Elegir horario" con el iframe de GHL:
  ```
  <iframe src="https://api.leadconnectorhq.com/widget/booking/AxHFQX42P4lbkb5Invw5" />
  ```
- Cargar script `form_embed.js` dinámicamente cuando se seleccione la pestaña de calendario

**2. `src/pages/IndexV2.tsx`** (líneas 90-103)
- Mismo cambio: agregar `Tabs` con las dos opciones
- Tab 1: MultiStepForm con `formSource="booking-section"`
- Tab 2: iframe del calendario GHL

**3. Ambos formularios:**
- Mantener título "Agenda tu valoración médica"
- Tabs con iconos: `Phone` para "Te llamamos", `CalendarDays` para "Elegir horario"
- El iframe se renderiza solo cuando la pestaña está activa (lazy render)
- Estilo del iframe: `width: 100%, min-height: 500px, border: none`

### Archivos a modificar
- `src/components/HeroV2.tsx`
- `src/pages/IndexV2.tsx`

