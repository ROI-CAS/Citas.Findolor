

## Plan: Reemplazar widget GHL por botón WhatsApp con UTM tracking

### Cambios

1. **Eliminar widget de chat GHL** (`index.html`)
   - Remover el script de LeadConnector (`widgets.leadconnectorhq.com`) del `<body>`.

2. **Agregar WhatsApp button a IndexV2** (`src/pages/IndexV2.tsx`)
   - Importar `WhatsAppButton` con lazy loading y agregarlo al JSX con `<Suspense>`.

3. **Agregar UTM al link de WhatsApp** (`src/components/WhatsAppButton.tsx`)
   - Modificar el mensaje de WhatsApp para incluir parámetros UTM que GHL pueda rastrear.
   - El link quedará algo como:
     ```
     https://wa.me/573186912799?text=Hola, quiero agendar mi cita... (Ref: utm_source=website&utm_medium=chat&utm_campaign=landing_findolor)
     ```
   - Esto permite que al recibir el mensaje en GHL, el equipo pueda identificar que el lead viene del botón flotante de la landing page.

### Archivos a modificar
- `index.html` — eliminar script GHL
- `src/pages/IndexV2.tsx` — agregar WhatsAppButton
- `src/components/WhatsAppButton.tsx` — agregar UTM al mensaje

