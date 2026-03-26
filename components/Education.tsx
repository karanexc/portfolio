"use client";

import React from "react";

const educationData = [
  {
    title: "MSc Computer Science (Artificial Intelligence)",
    school: "University of Kent, UK",
    date: "Sep 2025 – 2026",
    desc: "Machine Learning, Deep Learning, NLP, Software Engineering, Computer Systems",
  },
  {
    title: "PGP Artificial Intelligence & Machine Learning",
    school: "University of Texas & Great Lakes (GreatLearning)",
    date: "Jan 2024 – 2025",
    desc: "ML, DL, SQL, Data Visualization, Computer Vision, Transformers, RAG",
  },
  {
    title: "Bachelor’s in Computer Applications",
    school: "NIILM University",
    date: "2017 – 2020",
    desc: "Databases, Web Development, Computer Networks, Linux, Software Engineering",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-10">

      {/* Heading */}
      <h1 className="heading text-center mb-12">
        My <span className="text-purple">Education</span>
      </h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative group border border-white/[0.1] rounded-2xl p-6 bg-[#0a0a0a] overflow-hidden transition duration-300 hover:scale-[1.02]"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-1">
                {edu.title}
              </h2>

              <p className="text-purple text-sm mb-1">
                {edu.school}
              </p>

              <p className="text-white-200 text-sm mb-3">
                {edu.date}
              </p>

              <p className="text-white-200 text-sm leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;