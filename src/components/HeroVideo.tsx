
"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  onEnded: () => void;
}

export default function HeroVideo({ onEnded }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // 統一處理退出影片並進入首頁的函式
  const handleFinish = () => {
    setIsVisible(false);
    // 預留一點時間讓淡出動畫完成
    setTimeout(onEnded, 800);
  };

  useEffect(() => {
    // 5 秒安全機制：如果 5 秒內影片沒開始播放（載入太慢或被攔截），直接跳過
    const safetyTimer = setTimeout(() => {
      if (!hasStarted) {
        console.warn("HeroVideo: Video failed to start within 5s, skipping...");
        handleFinish();
      }
    }, 5000);

    // 嘗試手動觸發播放（應對部分瀏覽器的策略）
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("HeroVideo: Auto-play might be blocked", err);
      });
    }

    return () => clearTimeout(safetyTimer);
  }, [hasStarted]);

  return (
    <div 
      className={`fixed inset-0 z-[90] bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onPlaying={() => setHasStarted(true)}
        onEnded={handleFinish}
        onError={() => {
          console.error("HeroVideo: Video source error");
          handleFinish();
        }}
        className="h-full w-full object-cover"
      >
        <source src="https://wishxu513.github.io/datang-website/datang-website.webm" type="video/webm" />
        {/* 如果需要備援，可以在此加入其他格式，但優先遵循使用者指定的 webm */}
      </video>
    </div>
  );
}
