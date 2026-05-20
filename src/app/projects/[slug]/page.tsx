
"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/app/data/projects.json";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const router = useRouter();
  
  const projectIdx = projectsData.findIndex(p => p.slug === slug);
  const project = projectsData[projectIdx];

  if (!project) return null;

  const prevProject = projectsData[projectIdx - 1] || projectsData[projectsData.length - 1];
  const nextProject = projectsData[projectIdx + 1] || projectsData[0];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-3 h-3" />
            BACK TO GALLERY
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
            <div className="lg:col-span-8">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image 
                  src={project.mainImage} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] text-primary uppercase">{project.category}</span>
                <h1 className="text-4xl lg:text-5xl font-light tracking-widest">{project.title}</h1>
              </div>

              <div className="grid grid-cols-2 gap-y-6 text-sm tracking-widest">
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-[10px] uppercase mb-1">Year</span>
                  <span>{project.year}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-[10px] uppercase mb-1">Location</span>
                  <span>{project.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-[10px] uppercase mb-1">Size</span>
                  <span>{project.size}</span>
                </div>
              </div>

              <div className="space-y-6 text-muted-foreground leading-loose tracking-wider">
                <p>{project.description}</p>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:space-y-24 mb-32">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-muted">
                <Image 
                  src={img} 
                  alt={`${project.title} gallery ${idx}`} 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            ))}
          </div>

          <div className="pt-16 border-t border-border flex justify-between items-center text-[11px] tracking-[0.3em] uppercase">
            <Link 
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-4 hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>PREVIOUS</span>
            </Link>
            <Link 
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-4 hover:text-primary transition-colors"
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
