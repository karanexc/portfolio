"use client";

import React from "react";
import { Button } from "./ui/MovingBorders";

const educationData = [
  {
    title: "MSc Computer Science (Artificial Intelligence)",
    school: "University of Kent, United Kingdom",
    date: "Sep 2025 – 2026",
    desc: "Machine Learning, Deep Learning, NLP, Software Engineering, Computer Systems",
    thumbnail: "/education1.svg",
  },
  {
    title: "PGP Artificial Intelligence & Machine Learning",
    school: "University of Texas & Great Lakes (GreatLearning)",
    date: "Jan 2024 – 2025",
    desc: "Machine Learning, Deep Learning, SQL, Data Visualization, Computer Vision, Transformers, RAG",
    thumbnail: "/education2.svg",
  },
  {
    title: "Bachelor’s in Computer Applications",
    school: "NIILM University",
    date: "2017 – 2020",
    desc: "Databases, Web Development, Computer Networks, Linux, Software Engineering",
    thumbnail: "/education3.svg",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 w-full">
      <h1 className="heading text-center mb-12">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="w-full max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Timeline left side */}
            <div className="hidden md:flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-purple border-2 border-purple/30"></div>
              {index !== educationData.length - 1 && (
                <div className="w-0.5 h-full bg-purple/30 mt-2"></div>
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="mb-2">
                <span className="text-purple text-sm font-mono">{edu.date}</span>
              </div>
              
              <div className="bg-black-200/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{edu.title}</h3>
                    <p className="text-purple text-sm">{edu.school}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;