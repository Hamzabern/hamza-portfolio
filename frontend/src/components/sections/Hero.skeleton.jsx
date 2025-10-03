export default function HeroSkeleton() {
  return (
    <section className="cv-auto">
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

        {/* Placeholder image : dimensions réalistes pour éviter l'impression de zoom */}
        <div className="skel rounded-xl h-56 md:h-64 lg:h-72"></div>
      </div>
    </section>
  );
}
