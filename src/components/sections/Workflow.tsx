
"use client";

const steps = [
  { id: "01", title: "初步接洽", desc: "了解需求、生活型態與預算考量，說明服務流程與收費方式。" },
  { id: "02", title: "現場丈量", desc: "前往工地現場實地測量，記錄建築現況、採光與管線位置。" },
  { id: "03", title: "平面規劃", desc: "提出平面配置建議，討論動線與初步空間機能配置。" },
  { id: "04", title: "設計委任", desc: "簽署設計合約，開啟細部設計階段，深入探討美學細節。" },
  { id: "05", title: "細部設計", desc: "繪製立面圖、施工大樣圖，選定面材顏色與燈具配置。" },
  { id: "06", title: "工程報價", desc: "依據最終定案圖面提供完整工程報價單與材料明細。" },
  { id: "07", title: "工程合約", desc: "簽署工程合約，擬定工程進度表，嚴格執行品質管案。" },
  { id: "08", title: "完工交屋", desc: "驗收完成後點交，提供保固服務，正式啟動新生活。" }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 lg:py-40 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl lg:text-4xl font-light tracking-[0.3em] text-center mb-24">服務流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 lg:gap-y-24 md:gap-x-12 lg:gap-x-20">
          {steps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div className="flex items-center gap-6 mb-4">
                <span className="text-primary font-light text-4xl lg:text-5xl opacity-50 tracking-tighter">{step.id}</span>
                <div className="h-[1px] flex-1 bg-primary/20"></div>
              </div>
              <h3 className="text-xl font-medium tracking-widest mb-4">{step.title}</h3>
              <p className="text-muted-foreground tracking-wider leading-relaxed text-sm lg:text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
