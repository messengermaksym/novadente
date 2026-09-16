"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="sticky top-[58px] sm:top-[68px] z-10 mt-[58px] sm:mt-[68px] pt-4 pb-16 sm:pt-8 sm:pb-20 lg:pt-14 lg:pb-28 bg-[#f9f8f4] border-b border-[#e3e1d8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MOBILE VIEW (< lg): Full team portrait with centered headline & description overlay */}
        <div className="lg:hidden space-y-4">
          {/* Full Team Photo Frame with Centered Headline & Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden border border-[#e3e1d8] bg-[#0c4134] shadow-sm aspect-[4/5] w-full"
          >
            <Image
              src={getAssetPath("/images/clinic/hero-team.png")}
              alt="Команда лікарів Nova Dente"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
              priority
            />
            {/* Dark gradient scrim for crisp text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061e18]/95 via-[#061e18]/65 to-[#061e18]/30" />
            
            {/* Centered Headline & Description Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-8 space-y-3.5">
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-[1.15] tracking-tight drop-shadow-md">
                Стоматологія, якій довіряють.
              </h1>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-sm drop-shadow-sm font-normal">
                Nova Dente — сучасна стоматологія у Мукачеві. 
                Ми об&apos;єднали дбайливий підхід без болю та страху зі світовими стандартами: 
                швейцарською імплантацією <span className="font-semibold text-white">Straumann®</span>, 
                лікуванням каналів під оптикою <span className="font-semibold text-white">Carl Zeiss</span> та комфортною седацією для дітей.
              </p>
            </div>
          </motion.div>

          {/* Direct Action Button on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="pt-1"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0c4134] text-white font-semibold text-sm rounded-xl hover:bg-[#155a49] active:translate-y-px transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c4134]"
            >
              <span>Записатися на консультацію</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* DESKTOP VIEW (lg+): 2-Column Editorial Grid */}
        <div className="hidden lg:grid grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-7 space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl lg:text-6xl font-semibold text-[#0c4134] leading-[1.1] tracking-tight"
            >
              Стоматологія, якій довіряють.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-[#515e59] max-w-xl leading-relaxed"
            >
              Nova Dente — сучасна стоматологія у Мукачеві. 
              Ми об&apos;єднали дбайливий підхід без болю та страху зі світовими стандартами: 
              швейцарською імплантацією <span className="font-semibold text-[#121815]">Straumann®</span>, 
              лікуванням каналів під оптикою <span className="font-semibold text-[#121815]">Carl Zeiss</span> та комфортною седацією для дітей.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pt-2 flex items-center gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0c4134] text-white font-medium text-sm rounded-xl hover:bg-[#155a49] active:translate-y-px transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0c4134]"
              >
                <span>Записатися на консультацію</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Team Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-5"
          >
            <figure className="relative rounded-2xl overflow-hidden border border-[#e3e1d8] bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/5] w-full bg-[#f2f0ea]">
                <Image
                  src={getAssetPath("/images/clinic/hero-team.png")}
                  alt="Команда лікарів Nova Dente"
                  fill
                  sizes="42vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </figure>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
