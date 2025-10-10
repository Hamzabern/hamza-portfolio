import Section from "../../layout/section";

export default function Cta2Skeleton() {
  return (
    <Section id="cta2" title="Un projet en tête ?" subtitle="Voyons ensemble comment le réaliser." loading>
      <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5">
        <div className="skel h-5 w-64 rounded mb-2" />
        <div className="skel h-4 w-80 rounded" />
        <div className="mt-4 flex gap-3">
          <div className="skel h-10 w-36 rounded" />
          <div className="skel h-10 w-28 rounded" />
        </div>
      </div>
    </Section>
  );
}
