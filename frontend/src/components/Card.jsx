import { motion as Motion } from "framer-motion";
export default function Card({ children, className = "" }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: .35 }}
      className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:shadow-glow transition ${className}`}
    >
      {children}
    </Motion.div>
  );
}
