
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "發送成功",
        description: "我們已收到您的訊息，將會盡快與您聯繫。",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-light tracking-[0.3em] mb-8">聯絡我們</h2>
              <p className="text-muted-foreground tracking-wider leading-relaxed">
                對於空間有任何想法或是具體的規劃需求，歡迎填寫表單或透過社群媒體與我們聯繫。
              </p>
            </div>

            <div className="space-y-6 text-sm tracking-widest">
              <div className="flex flex-col">
                <span className="text-muted-foreground text-[10px] uppercase mb-1">Company</span>
                <span>大唐室內設計 Datang Interior Design</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-[10px] uppercase mb-1">Phone</span>
                <span>02-2345-6789</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-[10px] uppercase mb-1">Email</span>
                <span>contact@datang.design</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground text-[10px] uppercase mb-1">Address</span>
                <span>台北市信義區信義路五段7號</span>
              </div>
              <div className="flex gap-4 pt-4">
                <span className="hover:text-primary cursor-pointer transition-colors">LINE</span>
                <span className="hover:text-primary cursor-pointer transition-colors">INSTAGRAM</span>
              </div>
            </div>

            <div className="aspect-video bg-muted relative grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3615.003504936357!2d121.56450031500643!3d25.03396398397241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e11%3A0x12dc530e69186641!2z5Y-w5YyXMTAx!5e0!3m2!1szh-TW!2stw!4v1614745423631!5m2!1szh-TW!2stw" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8 bg-secondary/20 p-8 lg:p-12 rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">姓名 Name</label>
                  <Input required className="border-0 border-b border-muted bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">電話 Phone</label>
                  <Input required className="border-0 border-b border-muted bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
                <Input required type="email" className="border-0 border-b border-muted bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">空間類型 Space Type</label>
                  <Select>
                    <SelectTrigger className="border-0 border-b border-muted bg-transparent rounded-none px-0 focus:ring-0">
                      <SelectValue placeholder="選擇類型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">住宅空間</SelectItem>
                      <SelectItem value="commercial">商業空間</SelectItem>
                      <SelectItem value="show-home">實品屋</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">預算範圍 Budget</label>
                  <Select>
                    <SelectTrigger className="border-0 border-b border-muted bg-transparent rounded-none px-0 focus:ring-0">
                      <SelectValue placeholder="選擇預算" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-300">100 - 300 萬</SelectItem>
                      <SelectItem value="300-500">300 - 500 萬</SelectItem>
                      <SelectItem value="500-up">500 萬以上</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">需求說明 Requirements</label>
                <Textarea className="border-0 border-b border-muted bg-transparent rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary transition-colors min-h-[120px]" />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full lg:w-auto px-12 py-6 bg-foreground text-white hover:bg-primary transition-all rounded-none tracking-widest"
              >
                {isSubmitting ? "發送中..." : "送出申請 SEND ENQUIRY"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
