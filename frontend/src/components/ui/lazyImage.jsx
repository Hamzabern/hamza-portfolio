import { useState } from "react";

export default function LazyImage({
  src,
  alt = "",
  className = "",
  width,
  height,
  fit = "cover",      // "cover" | "contain" | "none"
  aspect,             // ex: "1200/630" si tu veux VRAIMENT le forcer
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  // style d’aspect ratio uniquement SI fourni (sinon, on laisse h-auto)
  const aspectStyle = aspect ? { aspectRatio: aspect } : undefined;

  return (
    <div className={`relative overflow-hidden ${className}`} style={aspectStyle}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full ${aspect ? "h-full" : "h-auto"} object-${fit} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </div>
  );
}
