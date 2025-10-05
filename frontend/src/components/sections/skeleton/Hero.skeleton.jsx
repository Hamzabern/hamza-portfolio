export default function HeroSkeleton() {
  return (
    <section className="cv-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="skel skel-title w-10/12"></div>
            <div className="mt-3 space-y-2">
              <div className="skel skel-sub w-11/12"></div>
              <div className="skel skel-line w-10/12"></div>
              <div className="skel skel-line w-8/12"></div>
            </div>
            <div className="flex gap-3 pt-4">
              <div className="skel h-10 w-32 rounded"></div>
              <div className="skel h-10 w-28 rounded"></div>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto">
            <div className="skel rounded-xl aspect-[3/2]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
