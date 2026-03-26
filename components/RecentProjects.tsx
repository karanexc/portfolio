"use client";

import React from "react";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-0 w-full">
      
      {/* Heading */}
      <h1 className="heading text-left">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* 🔥 GRID FIX (IMPORTANT) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full"
          >
            <div className="relative flex flex-col justify-between w-full h-full bg-[#0a0a0a] border border-white/[0.1] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300">

              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                
                <div>
                  <h1 className="font-bold text-xl md:text-2xl text-white mb-2">
                    {project.title}
                  </h1>

                  <p className="text-sm md:text-base text-white-200">
                    {project.des}
                  </p>
                </div>

                {/* Bottom section */}
                <div className="flex justify-between items-center mt-6">
                  
                  {/* Tech Icons */}
                  <div className="flex items-center gap-2">
                    {project.iconLists?.length > 0 &&
                      project.iconLists.map((icon, index) => (
                        <img
                          key={index}
                          src={icon}
                          alt="tech"
                          className="w-6 h-6"
                        />
                      ))}
                  </div>

                  {/* View Code */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple text-sm md:text-base font-semibold hover:underline"
                  >
                    View Code →
                  </a>

                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default RecentProjects;