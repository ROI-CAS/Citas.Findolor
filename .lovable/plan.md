

## Plan: Abrir calendario en nueva pestaña en vez de iframe

### Problema
El iframe del calendario GHL se corta en la parte inferior sin importar la altura configurada. El widget de GHL no se adapta bien dentro de un iframe con altura fija, y `scrolling="no"` impide ver el contenido completo.

### Solución
En vez de luchar con el iframe dentro de un modal, **abrir el calendario directamente en una nueva pestaña del navegador**. Esto garantiza que el calendario se vea completo, sin restricciones de tamaño, y funciona perfectamente en cualquier dispositivo.

El botón cambiará de abrir un Dialog a hacer `window.open(url, '_blank')`.

### Cambios

**`src/components/HeroV2.tsx`**:
- Eliminar el `Dialog` completo y el estado `showCalendar` y el `useEffect` del script.
- El botón "Prefiero elegir horario en el calendario" hará `window.open("https://api.leadconnectorhq.com/widget/booking/AxHFQX42P4lbkb5Invw5", "_blank")`.
- Eliminar imports de Dialog que ya no se usan.

**`src/pages/IndexV2.tsx`**:
- Mismo cambio en `BottomBookingTabs`: eliminar Dialog, estado, useEffect. El botón abre en nueva pestaña.
- Eliminar imports de Dialog no usados.

### UX
- Un clic → nueva pestaña con el calendario completo, sin restricciones de tamaño.
- El usuario agenda y vuelve a la pestaña original.
- Funciona igual en móvil y desktop.

### Archivos a modificar
- `src/components/HeroV2.tsx`
- `src/pages/IndexV2.tsx`

