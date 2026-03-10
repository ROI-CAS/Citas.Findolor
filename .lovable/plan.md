

## Plan: Agregar conversión de Google Ads al botón de WhatsApp

### Cambio

**`src/components/WhatsAppButton.tsx`** (línea 66-74):
- Agregar un `onClick` handler al enlace "Abrir chat" que dispare el evento de conversión de Google Ads antes de abrir WhatsApp.
- Handler: `gtag('event', 'conversion', {'send_to': 'AW-853236324/yt3wCJGDgoYcEOS07ZYD'})`

### Resultado
Cada vez que un usuario haga clic en "Abrir chat" para iniciar la conversación por WhatsApp, se registrará la conversión en Google Ads.

