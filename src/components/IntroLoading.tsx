
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface IntroLoadingProps {
  onComplete: () => void;
}

export default function IntroLoading({ onComplete }: IntroLoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2A3034] text-white">
      <div className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border-2 border-white/20">
        <Image
          src="https://wishxu513.github.io/datang-website/logo.jpg"
          alt="Datang Logo"
          fill
          className="object-cover"
          priority
          data-ai-hint="logo image"
        />
      </div>
      <div className="w-64">
        <div className="mb-2 flex justify-between text-xs font-light tracking-widest text-white/60">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
        <div className="h-[1px] w-full bg-white/10">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
