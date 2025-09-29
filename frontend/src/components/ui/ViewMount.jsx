import { useEffect, useRef, useState } from "react";

export default function ViewMount({ margin = "200px", children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || show) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: margin }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [show, margin]);

  return <div ref={ref}>{show ? children : null}</div>;
}
