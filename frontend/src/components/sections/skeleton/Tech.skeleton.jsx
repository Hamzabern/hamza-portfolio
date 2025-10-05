import Section from "../../layout/section";

export default function TechSkeleton() {
  return (
    <Section id="tech" title="Technologies" subtitle="Outils que j’utilise au quotidien." loading>
      {/* viewport + bande défilante comme la vraie section */}
      <div className="tech-viewport">
        <div className="tech-scroll">
          {/* 2 pistes "cartes" skeleton pour imiter le marquee */}
          {[0,1].map((track) => (
            <div key={track} className="flex gap-3 py-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <article key={i} className="tech-card">
                  <div className="tech-icon-wrap">
                    <div className="skel h-6 w-6 rounded" />
                  </div>
                  <div className="space-y-1">
                    <div className="skel h-4 w-24 rounded" />
                    <div className="skel h-3 w-32 rounded" />
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
