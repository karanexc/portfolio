"use client";

import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-10 pt-20">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Background Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          {/* Tagline */}
          <p className="uppercase tracking-widest text-sm md:text-base text-center text-blue-100 max-w-80">
            AIML Engineer | LLM | RAG | NLP
          </p>

          {/* Heading */}
          <TextGenerateEffect
            words="Building Intelligent AI Systems for Real-World Impact"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
          />

          {/* Description */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m{" "}
            <span className="text-purple fond-bold">Karan Mhaswadkar</span>, an AI Engineer based in the UK.
            I build end-to-end AI systems using Machine Learning, LLMs, and scalable pipelines,
            focusing on real-world applications like RAG systems, computer vision, and intelligent automation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <a href="#projects">
              <MagicButton
                title="View My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="View my Resume"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;