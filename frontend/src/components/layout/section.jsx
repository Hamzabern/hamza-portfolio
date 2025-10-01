export default function Section({ title, subtitle, children, id, loading = false }) {
  return (
    <section
      id={id}
      className={`section section--lazy ${loading ? "is-loading" : ""} py-12 sm:py-16`}>
      <div className="site-container section__inner">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
            <span className="pr-2 text-[var(--accent)]">◆</span>{title}
          </h2>
          {subtitle && <p className="opacity-70 mt-1 text-sm">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
