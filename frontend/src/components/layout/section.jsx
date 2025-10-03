export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  loading = false,
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 cv-auto ${className}`}>
      <div className="site-container">
        <div className="mb-6">
          {loading ? (
            <>
              <div className="skel skel-title w-2/3"></div>
              {subtitle !== undefined && (
                <div className="mt-2 space-y-2">
                  <div className="skel skel-sub w-5/6"></div>
                  <div className="skel skel-line w-2/3"></div>
                </div>
              )}
            </>
          ) : (
            <>
              {title && (
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight sd-fade-up">
                  <span className="pr-2 text-[var(--accent)]">◆</span>{title}
                </h2>
              )}
              {subtitle && (
                <p className="opacity-70 mt-1 text-sm sd-fade-up">{subtitle}</p>
              )}
            </>
          )}
        </div>

        {/* Contenu : animé uniquement hors-skeleton */}
        <div className={loading ? "" : "sd-stagger"}>
          {children}
        </div>
      </div>
    </section>
  );
}
