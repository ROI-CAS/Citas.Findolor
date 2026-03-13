

## Plan: Implementar tabs "Te llamamos" / "Prefiero elegir" con popup de calendario al 80%

### Referencia
La segunda imagen muestra el diseño anterior con dos tabs en la parte superior del formulario: **"Te llamamos"** (muestra el MultiStepForm) y **"Prefiero elegir"** (muestra un panel informativo con botón "Abrir Calendario" que abre el popup). Al hacer clic en "Abrir Calendario", se abre un Dialog al **80% de ancho** con el iframe del calendario GHL y altura del **85vh**.

### Cambios

**Crear `src/components/BookingTabs.tsx`** — componente reutilizable:
- Dos tabs estilo pill: "Te llamamos" (activo por defecto, fondo primary) y "Prefiero elegir" (con icono CalendarDays).
- Tab "Te llamamos" → renderiza `<MultiStepForm />`.
- Tab "Prefiero elegir" → panel con icono de calendario, título "Elige tu horario ideal", descripción, 3 badges (Confirmación inmediata, Horarios flexibles, Sin filas ni esperas), y botón verde "Abrir Calendario →" que abre un `Dialog`.
- El `Dialog` usa `max-w-[80vw]` y `max-h-[85vh]` con iframe del calendario GHL a `height: 80vh`.
- Recibe prop `formSource` para pasar al MultiStepForm.

**`src/components/HeroV2.tsx`**:
- Reemplazar `HeroTabs` por el nuevo `<BookingTabs formSource="hero" />`.
- Eliminar el botón suelto de calendario y la constante `BOOKING_URL` local.

**`src/pages/IndexV2.tsx`**:
- Reemplazar `BottomBookingTabs` por `<BookingTabs formSource="booking-section" />`.
- Eliminar el botón suelto y la constante `BOOKING_URL` local.

### Diseño del tab "Prefiero elegir"
```text
┌──────────────────────────────────────┐
│  📅  Elige tu horario ideal          │
│  Visualiza nuestra disponibilidad... │
│                                      │
│  ✓ Confirmación   📅 Horarios   ✓ Sin│
│    inmediata        flexibles    filas│
│                                      │
│  ┌──────────────────────────────┐    │
│  │   Abrir Calendario  →        │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
```

### Dialog del calendario
- Ancho: `max-w-[80vw]`
- Altura máxima: `max-h-[85vh]`
- Iframe: `width: 100%`, `height: 80vh`, `border: none`
- Padding: `p-0` para máximo espacio al iframe

### Archivos a modificar
- Crear: `src/components/BookingTabs.tsx`
- Editar: `src/components/HeroV2.tsx`
- Editar: `src/pages/IndexV2.tsx`

