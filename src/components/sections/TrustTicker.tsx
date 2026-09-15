"use client";

import React from "react";
import { Sparkles, Shield, Award, CheckCircle2 } from "lucide-react";
import { TICKER_ITEMS } from "@/data/clinicData";

export const TrustTicker: React.FC = () => {
  // Duplicate for seamless infinite scrolling loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full bg-[#0c4134] text-[#faf9f5] py-4 overflow-hidden border-y border-white/10 shadow-inner">
      {/* Side gradient fades for smooth marquee entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0c4134] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0c4134] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.map((text, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5fc4aa]" />
            <span className="text-[#faf9f5]/90">{text}</span>
            <span className="text-[#5fc4aa]/50 mx-2">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
