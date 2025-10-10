import { Suspense, lazy } from "react";
import Section from "../components/layout/section";

const Hero = lazy(() => import("../components/sections/Hero"));
const HeroSkel = lazy(() => import("../components/sections/skeleton/Hero.skeleton"));
const Services = lazy(() => import("../components/sections/Services"));
const ServicesSkel = lazy(() => import("../components/sections/skeleton/Services.skeleton"));
const Tech = lazy(() => import("../components/sections/Tech"));
const TechSkel  = lazy(() => import("../components/sections/skeleton/Tech.skeleton.jsx"));
const Cta = lazy(() => import("../components/sections/Cta.jsx"));
const CtaSkeleton = lazy(() => import("../components/sections/skeleton/Cta.skeleton.jsx"));
const Projects   = lazy(() => import("../components/sections/Projects"));
const ProjectsSkel = lazy(() => import("../components/sections/skeleton/Projects.skeleton.jsx"));
const Skills = lazy(() => import("../components/sections/Skills"));
const SkillsSkeleton = lazy(() => import("../components/sections/skeleton/Skills.skeleton.jsx"));
const Experience = lazy(() => import("../components/sections/Experience"));
const ExperienceSkeleton = lazy(() => import("../components/sections/skeleton/Experience.skeleton.jsx"));
const Cta2 = lazy(() => import("../components/sections/Cta2.jsx"));
const Cta2Skeleton = lazy(() => import("../components/sections/skeleton/Cta2.skeleton.jsx"));
const KeyStatsSkeleton = lazy(() => import("../components/sections/skeleton/KeyStats.skeleton.jsx"));
const ContactSkeleton  = lazy(() => import("../components/sections/skeleton/Contact.skeleton.jsx"));
const KeyStats = lazy(() => import("../components/sections/KeyStats"));
const Contact = lazy(() => import("../components/sections/Contact"));

export default function Home() {
return (
  <>
    <div className="space-y-16">
      {/* HERO Section */}
      <Suspense fallback={<HeroSkel />}>
        <Hero />
      </Suspense>
        <div className="my-8 divider-accent" />

      {/* SERVICES Section */}
      <Suspense fallback={<ServicesSkel />}>
        <Services />
      </Suspense>

      {/* TECHNOLOGIES */}
      <Suspense fallback={<TechSkel />}>
        <Tech />
      </Suspense>

      {/* PROJECTS Section */}
      <Suspense fallback={<ProjectsSkel />}>
        <Projects />
      </Suspense>

      {/* CTA */}
      <Suspense fallback={<CtaSkeleton />}>
        <Cta />
      </Suspense>

      {/* SKILLS */}
      <Suspense fallback={<SkillsSkeleton />}>
        <Skills />
      </Suspense>

      {/* EXPERIENCE */}
      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience />
      </Suspense>
      
      {/* CTA  */}
      <Suspense fallback={<Cta2Skeleton />}>
        <Cta2 />
      </Suspense>

      {/* METRICS */}
      <Suspense fallback={<KeyStatsSkeleton />}>
        <KeyStats />
      </Suspense>

      <div className="my-8 divider-accent" />

      {/* CONTACT */}
      <Suspense fallback={<ContactSkeleton />}>
        <Contact />
      </Suspense>
    </div>
  </>
);}
