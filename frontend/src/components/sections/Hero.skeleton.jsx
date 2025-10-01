export default function HeroSkeleton() {
  return (
    <section className="cv-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="skel skel-title w-3/4"></div>
          <div className="skel skel-sub w-11/12"></div>
          <div className="space-y-2 mt-2">
            <div className="skel skel-line w-full"></div>
            <div className="skel skel-line w-10/12"></div>
            <div className="skel skel-line w-8/12"></div>
          </div>
          <div className="flex gap-3 pt-2">
            <div className="skel h-10 w-28 rounded"></div>
            <div className="skel h-10 w-28 rounded"></div>
          </div>
        </div>
        <div className="skel rounded-xl h-64 md:h-80 lg:h-[28rem]"></div>
      </div>
    </section>
  );
}
