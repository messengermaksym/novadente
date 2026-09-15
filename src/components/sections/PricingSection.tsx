"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRICING_PREVIEW } from "@/data/clinicData";

interface PricingSectionProps {
  onOpenBooking?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Всі");

  const categories = ["Всі", ...PRICING_PREVIEW.map((c) => c.category)];

  const displayedGroups =
    selectedCategory === "Всі"
      ? PRICING_PREVIEW
      : PRICING_PREVIEW.filter((c) => c.category === selectedCategory);

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#f9f8f4] border-b border-[#e3e1d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 pb-8 border-b border-[#e3e1d8]"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1e755f]">
              Вартість послуг
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c4134] tracking-tight">
              Орієнтовна вартість лікування
            </h2>
            <p className="text-sm sm:text-base text-[#515e59] leading-relaxed">
              Чесна та прозора цінова політика без прихованих платежів чи непередбачуваних витрат.
            </p>
          </div>

          {/* Category Filter Pills - Separate Row with wrapping */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0c4134] ${
                  selectedCategory === cat
                    ? "bg-[#0c4134] text-white font-semibold shadow-xs"
                    : "bg-white text-[#515e59] hover:text-[#0c4134] hover:bg-[#e4f2ed] border border-[#e3e1d8]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Editorial Tabular Ledger (Anti-AI-slop layout) */}
        <div className="pt-8 space-y-12">
          <AnimatePresence mode="popLayout">
            {displayedGroups.map((group, gIdx) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: gIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                <div className="flex items-baseline justify-between pb-2 border-b-2 border-[#0c4134]/15">
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0c4134]">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#83918b]">
                    Орієнтовна вартість
                  </span>
                </div>

                <div className="divide-y divide-[#e3e1d8]">
                  {group.items.map((item, iIdx) => (
                    <motion.div
                      key={iIdx}
                      whileHover={{ x: 4, transition: { duration: 0.15 } }}
                      className="py-3.5 sm:py-4 flex items-baseline justify-between gap-4 group hover:bg-[#f2f0ea]/50 px-2 -mx-2 rounded transition-colors"
                    >
                      <span className="text-sm sm:text-base text-[#121815] font-normal leading-snug">
                        {item.name}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-[#0c4134] tabular-nums whitespace-nowrap shrink-0 text-right">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quiet Editorial Footnote */}
        <div className="pt-10 mt-6 border-t border-[#e3e1d8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#83918b]">
          <p>
            * Точна вартість визначається після діагностики та узгодження плану лікування з лікарем.
          </p>
        </div>

      </div>
    </section>
  );
};
