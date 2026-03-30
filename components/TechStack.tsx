"use client";

import React from "react";

const skillCategories = [
  {
    category: "Programming & Core",
    skills: ["Python", "SQL", "Bash"]
  },
  {
    category: "ML & Deep Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"]
  },
  {
    category: "GenAI & LLMs",
    skills: ["LangChain","AI Agents", "RAG", "Vector DB", "Hugging Face"]
  },
  {
    category: "MLOps & Cloud",
    skills: ["FastAPI", "Docker", "AWS", "CI/CD"]
  }
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="group bg-black-200/50 rounded-2xl p-6 border border-white/10 hover:border-purple/30 transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-purple font-semibold text-lg mb-4 border-b border-purple/30 pb-2">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-3 py-1.5 rounded-full bg-purple/10 text-purple text-sm border border-purple/30 hover:border-purple transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;