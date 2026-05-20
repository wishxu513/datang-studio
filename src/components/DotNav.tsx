
"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECT" },
  { id: "workflow", label: "WORKFLOW" },
  { id: "contact", label: "CONTACT" }
];

export default function DotNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8 items-end group">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="flex items-center gap-4 group/item"
        >
          <span className={`text-[10px] tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 ${activeSection === section.id ? 'text-primary' : 'text-muted-foreground'}`}>
            {section.label}
          </span>
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === section.id ? 'bg-primary scale-150' : 'bg-muted-foreground group-hover/item:bg-foreground'}`}></div>
        </a>
      ))}
    </nav>
  );
}
