import { useState, useEffect, useRef, PropsWithChildren } from 'react';

export const LazySection = ({ children, height = "500px" }: PropsWithChildren<{ height?: string }>) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic fallback for very old browsers, although practically non-existent now
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } // Pre-load slightly before scrolling into view to avoid empty gaps
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (inView) {
    return <>{children}</>;
  }

  // Render an empty placeholder that mirrors the expected height to prevent large CLS variations
  return <div ref={ref} style={{ minHeight: height }} aria-hidden="true" />;
};
