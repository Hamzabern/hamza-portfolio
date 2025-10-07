import { useEffect, useState } from "react";

export default function Lightbox({ open, images = [], index = 0, onClose }) {
  const [idx, setIdx] = useState(index);
  const [zoom, setZoom] = useState(1);

  useEffect(() => { setIdx(index); setZoom(1); }, [index, open]);

  useEffect(() => {
    function onScroll() {
      if (open) onClose?.();
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, onClose]);

  useEffect(() => {
    function onKey(e) {
      if (!open) return;
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") setIdx(i => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx(i => (i - 1 + images.length) % images.length);
      if (e.key === "+") setZoom(z => Math.min(3, z + 0.25));
      if (e.key === "-") setZoom(z => Math.max(1, z - 0.25));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose]);

  if (!open) return null;
  const src = images[idx] || images[0];

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}>
      <button aria-label="Fermer" className="lb-close" onClick={onClose}>✕</button>

      <div className="relative max-w-5xl w-full h-[70vh] bg-black/20 rounded-xl overflow-hidden">
        <img src={src} alt="" className="absolute inset-0 m-auto max-w-full max-h-full object-contain transition-transform" style={{ transform: `scale(${zoom})` }}
          loading="eager" decoding="async" />
        {images.length > 1 && (
          <>
            <button aria-label="Précédente" className="lb-nav left-2" onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}>‹</button>
            <button aria-label="Suivante" className="lb-nav right-2" onClick={() => setIdx(i => (i + 1) % images.length)}>›</button>
          </>
        )}
        <div className="lb-zoom">
          <button onClick={() => setZoom(z => Math.max(1, z - 0.25))} aria-label="Zoom out">−</button>
          <span className="px-2">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(z => Math.min(3, z + 0.25))} aria-label="Zoom in">+</button>
        </div>
      </div>
    </div>
  );
}
