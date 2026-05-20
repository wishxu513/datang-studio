
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center">
          <div className="relative h-8 w-8 mb-1">
             <Image 
              src="https://wishxu513.github.io/datang-website/logo.jpg" 
              alt="Datang Logo" 
              fill 
              className="object-contain rounded-sm"
              priority
            />
          </div>
          <span className="text-[10px] tracking-[0.2em] font-light text-foreground/80">DATANG DESIGN</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[11px] tracking-[0.25em] font-light">
          <Link href="#about" className="hover:text-primary transition-colors">ABOUT</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">PROJECT</Link>
          <Link href="#workflow" className="hover:text-primary transition-colors">WORKFLOW</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">CONTACT</Link>
          <span className="text-muted-foreground/30">|</span>
          <Link href="#" className="hover:text-primary transition-colors text-primary font-medium">繁體中文</Link>
        </nav>

        {/* Mobile menu toggle could go here, omitting for minimalism as requested to focus on clean design */}
        <div className="lg:hidden w-8"></div>
      </div>
    </header>
  );
}
