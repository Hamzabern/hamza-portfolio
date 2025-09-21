export default function Section({ title, subtitle, children, id }) {
  return (
    <section id={id} className="py-12 sm:py-16">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
          <span className="pr-2 text-[var(--accent)]">◆</span>{title}
        </h2>
        {subtitle && <p className="opacity-70 mt-1 text-sm">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
