"use client";

import React from "react";
import { motion } from "framer-motion";
import { CLINIC_STATS } from "@/data/clinicData";

export const AboutSection: React.FC = () => {
  const commitments = [
    {
      num: "01",
      title: "Цифрова мікроскопія та 3D-планування",
      text: "Лікування кореневих каналів під 20-кратним збільшенням німецького мікроскопа Carl Zeiss та діагностика на цифровому томографі. Ми рятуємо зуби, зберігаючи кожну здорову клітину емалі та дентину.",
    },
    {
      num: "02",
      title: "Безболісний прийом та дитяча седація",
      text: "Атравматичне знеболення і безпечна седація закисом азоту («звеселяючий газ») для дітей та пацієнтів із тривожністю. Візит до стоматолога більше не викликає страху чи стресу.",
    },
    {
      num: "03",
      title: "Міжнародні біосумісні матеріали",
      text: "Оригінальні швейцарські імплантати Straumann® з довічною гарантією виробника, ультратонкі керамічні вініри e.max та безпечне відбілювання Beyond Polus без опіку емалі.",
    },
  ];

  return (
    <section
      id="about"
      className="relative z-20 -mt-6 sm:-mt-10 pt-20 lg:pt-28 pb-20 lg:pb-24 bg-[#0c4134] text-[#faf9f5] rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-20px_50px_rgba(7,31,25,0.4)] border-t border-white/15 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start"
        >
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#5fc4aa]">
              Про клініку Nova Dente
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
              Турбота, професіоналізм, технології
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-4 text-white/80 text-base leading-relaxed">
            <p>
              Nova Dente створена у Мукачеві з великою любов&apos;ю до своєї справи. 
              Наша мета — не просто лікувати зуби, а дарувати впевненість та спокій, знаючи, що ваше здоров&apos;я знаходиться в руках фахівців із понад 10 роками клінічного стажу.
            </p>
            <p>
              Ми застосовуємо комплексний колегіальний підхід: хірурги, ортопеди, ендодонтисти та дитячі лікарі працюють як єдина команда над кожною історією пацієнта.
            </p>
          </div>
        </motion.div>

        {/* Asymmetric Clinical Commitments List */}
        <div className="border-t border-white/15 divide-y divide-white/15">
          {commitments.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="md:col-span-1 font-serif text-sm font-bold text-[#5fc4aa]">
                {item.num}
              </div>
              <div className="md:col-span-4 font-serif text-xl sm:text-2xl font-medium text-white">
                {item.title}
              </div>
              <div className="md:col-span-7 text-sm sm:text-base text-white/75 leading-relaxed">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Credential Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pt-12 mt-4 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {CLINIC_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

