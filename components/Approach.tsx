"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-10">
      <h1 className="heading">
        My <span className="text-purple">AI Workflow</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">

        <Card
          title="Data & Problem Understanding"
          icon={<AceternityIcon order="Step 1" />}
          des="I start by understanding the problem and exploring datasets through EDA, identifying patterns, features, and key signals to build effective AI solutions."
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="Model Development"
          icon={<AceternityIcon order="Step 2" />}
          des="I design and train machine learning and deep learning models using techniques like NLP, computer vision, and RAG pipelines to achieve high performance."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="Deployment & Scaling"
          icon={<AceternityIcon order="Step 3" />}
          des="I deploy models using FastAPI and cloud platforms, ensuring scalability, low latency, and seamless integration into real-world applications."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-blue-900 rounded-3xl overflow-hidden"
          />
        </Card>

      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
      dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-6 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>

        <h2 className="text-2xl font-bold text-white mb-2">
          {title}
        </h2>

        <p className="text-sm text-[#E4ECFF]">
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple font-bold text-lg">
        {order}
      </span>
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};