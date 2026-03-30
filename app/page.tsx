"use client";

import dynamic from 'next/dynamic';
import { navItems } from "@/data";

// Dynamically import ALL components with SSR disabled
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then(mod => mod.FloatingNav),
  { ssr: false }
);

const Hero = dynamic(
  () => import("@/components/Hero"),
  { ssr: false }
);

const Grid = dynamic(
  () => import("@/components/Grid"),
  { ssr: false }
);

const RecentProjects = dynamic(
  () => import("@/components/RecentProjects"),
  { ssr: false }
);

const TechStack = dynamic(
  () => import("@/components/TechStack"),
  { ssr: false }
);

const Clients = dynamic(
  () => import("@/components/Clients"),
  { ssr: false }
);

const Experience = dynamic(
  () => import("@/components/Experience"),
  { ssr: false }
);

const Education = dynamic(
  () => import("@/components/Education"),
  { ssr: false }
);

const Approach = dynamic(
  () => import("@/components/Approach"),
  { ssr: false }
);

const Footer = dynamic(
  () => import("@/components/Footer"),
  { ssr: false }
);

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      
      <div className="max-w-7xl w-full">
        
        {/* NAVBAR */}
        <FloatingNav navItems={navItems} />

        {/* HERO */}
        <Hero />

        {/* ABOUT GRID */}
        <Grid />

        {/* 🔥 PROJECTS + TECH STACK (BALANCED LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 items-start">
          
          {/* LEFT — PROJECTS */}
          <div className="lg:col-span-2">
            <RecentProjects />
          </div>

          {/* RIGHT — TECH STACK */}
          <div className="lg:col-span-1">
            <TechStack />
          </div>

        </div>

        {/* OTHER SECTIONS */}
        <Clients />
        <Experience />
        <Education />
        <Approach />
        <Footer />

      </div>
    </main>
  );
};

export default Home;