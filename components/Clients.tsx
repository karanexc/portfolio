"use client";

import React from "react";

import { companies } from "@/data";

const Clients = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        Companies I&apos;ve worked with
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 mt-10">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex items-center justify-center gap-2"
          >
            <img
              src={company.img}
              alt={company.name}
              className="md:w-12 w-8 object-contain"
            />
            <span className="text-white text-sm md:text-base">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;