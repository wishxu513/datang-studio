"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  onEnded: () => void;
}

export default function HeroVideo({ onEnded }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const desktopVideo =
    "https://wishxu513.github.io/datang-website/datang-website.webm";

  const mobileVideo =
    "https://raw.githubusercontent.com/wishxu513/datang-studio/main/public/videos/mobile-intro.webm";

  const handleFinish = () => {
    setIsVisible(false);
    setTimeout(onEnded, 800);
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const selectedVideo = isMobile ? mobileVideo : desktopVideo;

    console.log("HeroVideo selected source:", selectedVideo);
    setVideoSrc(selectedVideo);
  }, []);

  useEffect(() => {
    if (!videoSrc || !videoRef.current) return;

    const timer = setTimeout(() => {
      console.warn("HeroVideo: timeout fallback");
      handleFinish();
    }, 12000);

    videoRef.current.play().catch((err) => {
      console.warn("HeroVideo autoplay failed:", err);
    });

    return () => clearTimeout(timer);
  }, [videoSrc]);

  if (!videoSrc) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <video
        ref={videoRef}
        key={videoSrc}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleFinish}
        onError={(e) => {
          console.error("HeroVideo source error:", videoSrc, e);
          handleFinish();
        }}
        className="h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/webm" />
      </video>
    </div>
  );
}
