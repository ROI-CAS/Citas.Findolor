import { useState, useEffect, PropsWithChildren } from 'react';

// Pequeño wrapper para retrasar el montaje de botones flotantes pesados (ej. Framer Motion)
// hasta que el hilo principal (main thread) esté libre, o pasen unos segundos.
export const DelayedMount = ({ children, delay = 2500 }: PropsWithChildren<{ delay?: number }>) => {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    // 1. Mount immediately if user interacts (scroll, click, touch, mousemove)
    const handleInteraction = () => setShouldMount(true);
    
    ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'].forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    // 2. Fallback delay if no interaction happens
    const timer = setTimeout(() => {
      setShouldMount(true);
    }, delay);

    return () => {
      clearTimeout(timer);
      ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'].forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, [delay]);

  if (!shouldMount) {
    return null; // Don't mount or download chunk yet!
  }

  return <>{children}</>;
};
