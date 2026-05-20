
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import projectsData from "@/app/data/projects.json";

const categories = ["全部", "住宅空間", "商業空間", "實品屋"];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredProjects = activeCategory === "全部" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 lg:py-40 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap gap-8 mb-20 justify-center uppercase text-sm tracking-[0.2em]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-1 transition-colors relative ${activeCategory === cat ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {cat}
              {activeCategory === cat && <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary"></span>}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {filteredProjects.map((project, idx) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              className="group block relative overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  data-ai-hint="project thumbnail"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 tracking-widest text-sm font-light">
                    VIEW PROJECT
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-baseline">
                <h3 className="text-lg font-light tracking-widest">{project.title}</h3>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
