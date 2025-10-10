import Section from "../../layout/section";

export default function ContactSkeleton() {
  return (
    <Section id="contact" title="Contact" subtitle="Discutons de ton projet. Réponse < 24h." loading>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Colonne gauche (infos rapides) */}
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5">
          <div className="skel h-3 w-9/12 rounded mb-2" />
          <div className="skel h-3 w-7/12 rounded mb-4" />
          <div className="flex gap-2">
            <div className="skel h-9 w-9 rounded" />
            <div className="skel h-9 w-9 rounded" />
          </div>
        </div>

        {/* Colonne droite (form) */}
        <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5">
          <div className="grid gap-3 md:grid-cols-2">
            {/* Nom / Email */}
            <div className="space-y-2">
              <div className="skel h-3 w-20 rounded" />
              <div className="skel h-9 w-full rounded" />
            </div>
            <div className="space-y-2">
              <div className="skel h-3 w-16 rounded" />
              <div className="skel h-9 w-full rounded" />
            </div>
            {/* Société / Budget / Délai */}
            <div className="space-y-2">
              <div className="skel h-3 w-40 rounded" />
              <div className="skel h-9 w-full rounded" />
            </div>
            <div className="space-y-2">
              <div className="skel h-3 w-28 rounded" />
              <div className="skel h-9 w-full rounded" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <div className="skel h-3 w-28 rounded" />
              <div className="skel h-9 w-full rounded" />
            </div>
            {/* Chips types */}
            <div className="space-y-2 md:col-span-2">
              <div className="skel h-3 w-28 rounded" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="skel h-7 w-24 rounded-full" />
                ))}
              </div>
            </div>
            {/* Message */}
            <div className="space-y-2 md:col-span-2">
              <div className="skel h-3 w-36 rounded" />
              <div className="skel h-28 w-full rounded" />
            </div>
            {/* Fichier */}
            <div className="space-y-2 md:col-span-2">
              <div className="skel h-3 w-36 rounded" />
              <div className="skel h-10 w-60 rounded" />
              <div className="skel h-3 w-64 rounded" />
            </div>
            {/* Consentement + bouton */}
            <div className="md:col-span-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="skel h-4 w-4 rounded" />
                <div className="skel h-3 w-64 rounded" />
              </div>
              <div className="skel h-10 w-40 rounded" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
