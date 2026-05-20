
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xs">
            <div className="relative h-12 w-12 mb-6">
              <Image 
                src="https://wishxu513.github.io/datang-website/logo.jpg" 
                alt="Datang Logo" 
                fill 
                className="object-contain rounded-sm grayscale"
              />
            </div>
            <h4 className="text-lg font-medium tracking-widest mb-4">大唐室內設計</h4>
            <p className="text-xs text-muted-foreground tracking-widest leading-relaxed uppercase">
              Datang Interior Design. Est. 2018. Crafted for modern living.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 text-xs tracking-[0.2em] uppercase">
            <div className="space-y-4 flex flex-col">
              <span className="text-muted-foreground mb-2">Pages</span>
              <Link href="#about" className="hover:text-primary transition-colors">About</Link>
              <Link href="#projects" className="hover:text-primary transition-colors">Project</Link>
              <Link href="#workflow" className="hover:text-primary transition-colors">Workflow</Link>
              <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
            <div className="space-y-4 flex flex-col">
              <span className="text-muted-foreground mb-2">Social</span>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="hover:text-primary transition-colors">Line</a>
              <a href="#" className="hover:text-primary transition-colors">Pinterest</a>
            </div>
            <div className="hidden md:flex flex-col space-y-4">
              <span className="text-muted-foreground mb-2">Legal</span>
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          <span>© {new Date().getFullYear()} Datang Interior Design. All rights reserved.</span>
          <span>Designed with precision.</span>
        </div>
      </div>
    </footer>
  );
}
