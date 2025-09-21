import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProgressBar({ label, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div ref={ref}>
      <div className="flex justify-between text-xs mb-1 opacity-80">
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="h-2 rounded bg-black/10 dark:bg-white/10 overflow-hidden">
        <Motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full"
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--accent), color-mix(in oklab, var(--accent), white 15%))"
          }}
        />
      </div>
     
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 0.3 : 0 }}
        transition={{ duration: 0.8 }}
        className="h-1 mt-1 rounded bg-black/10 dark:bg-white/10"
      />
    </div>
  );
}
