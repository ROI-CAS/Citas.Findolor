

## Plan: Mejorar botón de calendario y ampliar modal

### Problemas identificados
1. **Botón "Prefiero elegir horario"** — tiene poco contraste, borde sutil y fondo casi transparente. No destaca como CTA.
2. **Modal del calendario** — `sm:max-w-lg` (512px) es angosto para el widget de GHL que necesita más espacio.

### Cambios

**`src/components/HeroV2.tsx`** — `BookingTabs`:
- **Botón**: Cambiar de estilo ghost/outline a un estilo más llamativo con fondo sólido `bg-secondary text-secondary-foreground` (verde), padding más alto (`py-3`), texto `text-base font-semibold`, y sombra sutil. Agregar emoji o icono más visible.
- **Dialog**: Ampliar de `sm:max-w-lg` a `sm:max-w-2xl` (672px) y agregar `max-h-[90vh] overflow-y-auto` para que el iframe tenga suficiente espacio y sea scrollable si es necesario. Aumentar `minHeight` del iframe a `700px`.

**`src/pages/IndexV2.tsx`** — `BottomBookingTabs`:
- Mismos cambios exactos al botón y al Dialog.

### Detalle del botón (ambos archivos)
```
className="w-full mt-3 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-secondary hover:bg-secondary/90 text-white text-base font-semibold shadow-md transition-all duration-200"
```

### Detalle del Dialog (ambos archivos)
```
className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0"
```

### Archivos a modificar
- `src/components/HeroV2.tsx`
- `src/pages/IndexV2.tsx`

