
"use client";

import { useState } from "react";
import IntroLoading from "@/components/IntroLoading";
import HeroVideo from "@/components/HeroVideo";
import Navbar from "@/components/Navbar";
import DotNav from "@/components/DotNav";
import About from "@/components/sections/About";
import ProjectGallery from "@/components/sections/ProjectGallery";
import Workflow from "@/components/sections/Workflow";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  // 狀態流：loading -> intro -> main
  const [stage, setStage] = useState<"loading" | "intro" | "main">("loading");

  if (stage === "loading") {
    return <IntroLoading onComplete={() => setStage("intro")} />;
  }

  if (stage === "intro") {
    return <HeroVideo onEnded={() => setStage("main")} />;
  }

  return (
    <main className="relative bg-white animate-in fade-in duration-1000">
      <Navbar />
      <DotNav />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="relative h-40 w-40 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Image 
              src="https://wishxu513.github.io/datang-website/logo.jpg" 
              alt="Datang Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <h1 className="text-sm lg:text-base tracking-[0.5em] font-light text-muted-foreground uppercase">
              Datang Interior Design
            </h1>
            <p className="text-xl lg:text-2xl font-light tracking-[0.3em] text-foreground">
              大唐室內設計
            </p>
          </div>
          
          <div className="mt-20 animate-bounce text-muted-foreground/30">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </section>

      <About />
      <ProjectGallery />
      <Workflow />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
