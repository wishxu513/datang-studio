
"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  onEnded: () => void;
}

export default function HeroVideo({ onEnded }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleEnded = () => {
    setIsVisible(false);
    setTimeout(onEnded, 1000);
  };

  return (
    <div className={`fixed inset-0 z-[90] bg-black transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="h-full w-full object-cover"
      >
        <source src="https://wishxu513.github.io/datang-website/intro.webm" type="video/webm" />
        <source src="https://wishxu513.github.io/datang-website/intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
