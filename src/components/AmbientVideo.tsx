import { useReducedMotion } from "../hooks/useReducedMotion";

interface AmbientVideoProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

export function AmbientVideo({ src, poster, alt, className = "" }: AmbientVideoProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <img
        src={poster}
        alt={alt}
        className={className}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-label={alt}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
