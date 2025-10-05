import { useState, useCallback } from "react";
import LazyImage from "./LazyImage";

export default function ImageCarousel({ images = [], alt = "", onZoom }) {
  const [idx, setIdx] = useState(0);
  const total = images.length || 1;

  const prev = useCallback(() => setIdx(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx(i => (i + 1) % total), [total]);

  const src = images[idx] || images[0];

  return (
    <div className="relative group">
      <LazyImage src={src} alt={alt} width={960} height={540} aspect="16/9" className="project-media rounded-t-xl"/>
      {/* Flèches */}
      {total > 1 && (
        <>
          <button type="button" onClick={prev} className="carousel-btn left-2" aria-label="Image précédente">‹</button>
          <button type="button" onClick={next} className="carousel-btn right-2" aria-label="Image suivante">›</button>
        </>
      )}
      {/* Zoom */}
      <button type="button" onClick={() => onZoom?.(idx)} className="zoom-btn" aria-label="Agrandir l’image" title="Zoom">
        ⤢
      </button>
      {/* Indicateur */}
      {total > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] px-2 py-0.5 rounded bg-black/50 text-white">
          {idx + 1} / {total}
        </div>
      )}
    </div>
  );
}
