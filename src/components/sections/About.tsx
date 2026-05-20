
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function About() {
  const largeImg = PlaceHolderImages.find(img => img.id === 'about-large');
  const smallImg1 = PlaceHolderImages.find(img => img.id === 'about-small-1');
  const smallImg2 = PlaceHolderImages.find(img => img.id === 'about-small-2');

  return (
    <section id="about" className="py-24 lg:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-1 relative aspect-[3/4] overflow-hidden">
              <Image 
                src={largeImg?.imageUrl || ""} 
                alt="Architecture Detail" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                data-ai-hint="architecture detail"
              />
            </div>
            <div className="col-span-1 grid gap-4">
              <div className="relative aspect-square overflow-hidden">
                 <Image 
                  src={smallImg1?.imageUrl || ""} 
                  alt="Material texture" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="material texture"
                />
              </div>
              <div className="relative aspect-square overflow-hidden">
                <Image 
                  src={smallImg2?.imageUrl || ""} 
                  alt="Light shadow" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="light shadow"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center pt-8">
            <h2 className="text-3xl lg:text-4xl font-light tracking-[0.3em] text-foreground mb-12">大唐理念</h2>
            <div className="space-y-8 text-muted-foreground leading-loose tracking-wider">
              <p>
                大唐相信空間不是裝飾的堆疊，而是生活秩序、材質溫度與光線層次被慢慢安放的結果。
              </p>
              <p>
                設計從人的日常出發，讓比例、收納、動線、光影與材質互相成就，形成可長久居住的空間。我們致力於在極簡的語彙中，尋求機能與美學的和諧統一。
              </p>
            </div>
            <div className="mt-12 w-20 h-[1px] bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
