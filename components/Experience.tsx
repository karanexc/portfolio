import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  const years = [
    "Jan 2025 - June 2025",                   // Computer Vision Project (most recent - top)
    "Jan 2026",  // Machine Learning Intern
    "June 2020 - Dec 2024"             // Professional Esports Athlete
  ];
  
  return (
    <div className="py-10 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full max-w-4xl mx-auto mt-12 space-y-8">
        {workExperience.map((card, index) => (
          <div key={card.id} className="relative flex gap-6">
            {/* Timeline left side */}
            <div className="hidden md:flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-purple border-2 border-purple/30"></div>
              {index !== workExperience.length - 1 && (
                <div className="w-0.5 h-full bg-purple/30 mt-2"></div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="mb-2">
                <span className="text-purple text-sm font-mono">{years[index]}</span>
              </div>
              
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <img
                    src={card.thumbnail}
                    alt={card.thumbnail}
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;