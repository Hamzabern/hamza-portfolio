import Section from "../../layout/section";

export default function CtaSkeleton() {
  return (
    <Section id="cta" title="Prêt à discuter ?" subtitle="Je peux t’aider à lancer ou améliorer ton application." loading>
      <div className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-white/5 flex flex-wrap items-center gap-3 justify-between">
        <div className="skel h-5 w-56 rounded" />
        <div className="flex gap-2">
          <div className="skel h-10 w-36 rounded" />
          <div className="skel h-10 w-28 rounded" />
        </div>
      </div>
    </Section>
  );
}
