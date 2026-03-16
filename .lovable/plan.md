

## Plan: Mejorar botones del Sticky Header con técnicas UX de conversión

### Cambios en `src/components/StickyHeader.tsx`

**1. Botón "Agendar Cita" — Mayor prominencia y urgencia:**
- Añadir animación `pulse-subtle` (ya existe en el proyecto) para el glow pulsante verde alrededor del CTA.
- Agregar un micro-badge de urgencia encima del botón ("Disponible hoy") que aparece con delay usando framer-motion.
- Hover con `scale(1.05)` para feedback táctil.

**2. Botón de teléfono (móvil) — Más llamativo:**
- Cambiar de `variant="outline"` a fondo sólido con gradiente primary.
- Añadir animación sutil de ring/ping en el icono del teléfono para atraer atención.
- Texto visible del número en desktop con estilo más prominente (font-semibold, color primary).

**3. Entrada con stagger animation:**
- Cuando el header aparece, los botones entran con un ligero delay escalonado (stagger) para guiar la mirada hacia el CTA.

**4. Responsive:**
- Móvil: Botón teléfono con ping + CTA verde pulsante lado a lado.
- Desktop: Número visible + CTA con badge de disponibilidad.

### Archivos a modificar
- `src/components/StickyHeader.tsx`

