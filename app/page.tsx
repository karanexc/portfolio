"use client";

import { navItems } from "@/data";
import TechStack from "@/components/TechStack";


import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

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