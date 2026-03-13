

## Plan: Calendario en ventana emergente (Dialog) en vez de embebido

### Problema
El iframe del calendario GHL queda embebido dentro del cuadro del formulario, se ve comprimido y la experiencia es pobre — especialmente en móvil.

### Solución
Cambiar la pestaña "Elegir horario" para que en lugar de mostrar el iframe inline, abra un **Dialog (modal)** centrado con el calendario. El modal tendrá ancho controlado (`max-w-lg`) para no cubrir toda la pantalla, será responsive, y se cerrará fácilmente.

### Cambios

**`src/components/HeroV2.tsx`** — Componente `BookingTabs`:
- Importar `Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle` desde `@/components/ui/dialog`.
- Agregar estado `showCalendar` (boolean).
- Cambiar la pestaña "calendar": en vez de `TabsContent` con iframe, al hacer clic en la tab "Elegir horario" se abre el Dialog con el iframe dentro.
- El Dialog tendrá `max-w-lg` y el iframe con `min-height: 600px` para que se vea completo.
- Al cerrar el dialog, volver a la tab "call".

**`src/pages/IndexV2.tsx`** — Componente `BottomBookingTabs`:
- Mismo cambio: la tab "Elegir horario" abre un Dialog modal con el calendario.

### UX
- El formulario "Te llamamos" sigue inline como está.
- "Elegir horario" abre modal centrado, limpio, con fondo overlay.
- Responsive: `max-w-[95vw] sm:max-w-lg` para móvil y desktop.
- El usuario puede cerrar con X o clic fuera.

### Archivos a modificar
- `src/components/HeroV2.tsx`
- `src/pages/IndexV2.tsx`

