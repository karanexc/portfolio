"use client";

import React from "react";

const skills = [
  { name: "Python", level: "Advanced", width: "90%" },
  { name: "TensorFlow", level: "Intermediate", width: "80%" },
  { name: "LangChain / RAG", level: "Advanced", width: "85%" },
  { name: "FastAPI", level: "Intermediate", width: "75%" },
  { name: "AWS", level: "Intermediate", width: "75%" },
  { name: "Docker", level: "Intermediate", width: "70%" },
  { name: "PostgreSQL / pgvector", level: "Intermediate", width: "75%" },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="max-w-md mx-auto mt-12 space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            {/* Title */}
            <div className="flex justify-between mb-2">
              <span className="text-white font-medium">
                {skill.name}
              </span>
              <span className="text-sm text-[#C1C2D3]">
                {skill.level}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-[#1a1f3a] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-700"
                style={{ width: skill.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;