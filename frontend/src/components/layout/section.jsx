
/* section.jsx */
export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  loading = false,   // <--- NOUVEAU
}) {
  return (
    <section id={id} className={`cv-auto ${className}`}>
      {/* Header de section */}
      <div className="mb-6 sd-stagger">
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
            {title && <h2 className="text-2xl font-semibold sd-fade-up">{title}</h2>}
            {subtitle && <p className="mt-1 text-muted-foreground sd-fade-up">{subtitle}</p>}
          </>
        )}
      </div>

      {/* Contenu */}
      <div className="sd-stagger">
        {children}
      </div>
    </section>
  );
}
