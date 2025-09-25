import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children, y = 10, delay = 0, as = "div" }) {
  const Tag = as;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <Tag ref={ref}>
      <Motion.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : y }}
        transition={{ duration: 0.45, delay }}>
        {children}
      </Motion.div>
    </Tag>
  );
}
