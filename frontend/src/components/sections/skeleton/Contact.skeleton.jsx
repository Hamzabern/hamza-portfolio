import Section from "../../layout/section";

export default function ContactSkeleton() {
  return (
    <Section id="contact" title="Contact" subtitle="Discutons de ton projet. Réponse < 24h." loading>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Colonne gauche (infos) */}
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
          <div className="space-y-3">
            <div className="skel h-3 w-16 rounded" />
            <div className="skel h-9 w-full rounded" />
            <div className="skel h-3 w-28 rounded" />
            <div className="skel h-9 w-full rounded" />
            <div className="skel h-3 w-20 rounded" />
            <div className="skel h-28 w-full rounded" />
            <div className="skel h-10 w-36 rounded ml-auto" />
          </div>
        </div>
      </div>
    </Section>
  );
}
