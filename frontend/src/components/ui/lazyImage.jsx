import { useState } from "react";

export default function LazyImage({
  src,
  alt = "",
  className = "",
  width,
  height,
  fit = "cover",      
  aspect,            
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  const aspectStyle = aspect ? { aspectRatio: aspect } : undefined;

  return (
    <div className={`relative overflow-hidden ${className}`} style={aspectStyle}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-700" />
      )}
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" onLoad={() => setLoaded(true)}
        className={`w-full ${aspect ? "h-full" : "h-auto"} object-${fit} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </div>
  );
}
