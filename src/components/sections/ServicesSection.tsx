"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/data/clinicData";
import { getAssetPath } from "@/lib/utils";

interface ServicesSectionProps {
  onSelectServiceForBooking?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  return (
    <section id="services" className="py-20 lg:py-24 bg-[#f2f0ea] border-b border-[#e3e1d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 mb-14 max-w-2xl"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c4134] tracking-normal leading-[1.2]">
            Послуги клініки Nova Dente
          </h2>
          <p className="text-sm sm:text-base text-[#515e59] leading-relaxed">
            Від профілактичної гігієни до складної імплантації та естетичного відновлення посмішки. 
            Кожна процедура базується на цифрових протоколах.
          </p>
        </motion.div>

        {/* Services Grid with Balanced 4-Column Layout (8 items = 2 perfect rows of 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{
                duration: 0.5,
                delay: (idx % 4) * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl border border-[#e3e1d8] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group will-change-transform"
            >
              <div>
                {/* Service Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-[#e4f2ed] border-b border-[#e3e1d8] overflow-hidden">
                  <Image
                    src={getAssetPath(service.image)}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-semibold text-[#0c4134] leading-snug">
                      {service.title}
                    </h3>
                    {service.priceHint && (
                      <span className="text-xs font-semibold text-[#1e755f] tabular-nums whitespace-nowrap">
                        {service.priceHint}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#515e59] leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#e3e1d8]">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-baseline gap-2 text-xs text-[#121815]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3aa88c] shrink-0 self-center" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Action for this service */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking?.(service.title)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#f2f0ea] hover:bg-[#0c4134] text-[#0c4134] hover:text-white text-xs font-semibold transition-colors flex items-center justify-between group/btn cursor-pointer"
                >
                  <span>Записатися на прийом</span>
                  <span className="text-sm transition-transform group-hover/btn:translate-x-0.5">→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
