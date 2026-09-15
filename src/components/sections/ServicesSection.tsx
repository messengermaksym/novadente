"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/data/clinicData";
import { getAssetPath } from "@/lib/utils";

interface ServicesSectionProps {
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Всі");

  const categories = ["Всі", "Хірургія", "Терапія", "Естетика", "Пародонтологія", "Дітям", "Ортодонтія"];

  const filteredServices =
    activeCategory === "Всі"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#f2f0ea] border-b border-[#e3e1d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 mb-12"
        >
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1e755f]">
              Напрями лікування
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c4134] tracking-tight">
              Послуги клініки Nova Dente
            </h2>
            <p className="text-sm sm:text-base text-[#515e59] leading-relaxed">
              Від профілактичної гігієни до складної імплантації та естетичного відновлення посмішки. 
              Кожна процедура базується на цифрових протоколах.
            </p>
          </div>

          {/* Category Tabs with wrap */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#0c4134] ${
                  activeCategory === cat
                    ? "bg-[#0c4134] text-white font-semibold shadow-xs"
                    : "bg-white text-[#515e59] hover:text-[#0c4134] hover:bg-[#e4f2ed] border border-[#e3e1d8]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid with subtle hover lift and scroll reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.article
                key={service.id}
                layout
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl border border-[#e3e1d8] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Service Image Frame */}
                  <div className="relative aspect-[16/10] w-full bg-[#e4f2ed] border-b border-[#e3e1d8] overflow-hidden">
                    <Image
                      src={getAssetPath(service.image)}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-xs rounded text-[11px] font-semibold text-[#0c4134] border border-[#e3e1d8]">
                      {service.category}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#0c4134] text-white rounded text-xs font-semibold">
                      {service.priceHint}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="font-serif text-2xl font-semibold text-[#0c4134] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#515e59] leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-[#e3e1d8]">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-baseline gap-2 text-xs text-[#121815]">
                          <span className="text-[#1e755f] font-bold">—</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
