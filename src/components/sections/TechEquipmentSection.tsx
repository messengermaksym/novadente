"use client";

import React from "react";
import { motion } from "framer-motion";

// Crisp SVG country flags and certification badges
const SwissFlag = () => (
  <svg className="w-6 h-4.5 rounded-xs shadow-xs overflow-hidden" viewBox="0 0 32 32">
    <rect width="32" height="32" fill="#D52B1E" />
    <rect x="13" y="6" width="6" height="20" fill="#FFFFFF" />
    <rect x="6" y="13" width="20" height="6" fill="#FFFFFF" />
  </svg>
);

const GermanFlag = () => (
  <svg className="w-6 h-4.5 rounded-xs shadow-xs overflow-hidden" viewBox="0 0 32 24">
    <rect width="32" height="8" y="0" fill="#000000" />
    <rect width="32" height="8" y="8" fill="#DD0000" />
    <rect width="32" height="8" y="16" fill="#FFCE00" />
  </svg>
);

const UsaFlag = () => (
  <svg className="w-6 h-4.5 rounded-xs shadow-xs overflow-hidden" viewBox="0 0 32 24">
    <rect width="32" height="24" fill="#B22234" />
    <rect y="3.7" width="32" height="3.7" fill="#FFFFFF" />
    <rect y="11.1" width="32" height="3.7" fill="#FFFFFF" />
    <rect y="18.5" width="32" height="3.7" fill="#FFFFFF" />
    <rect width="14" height="13" fill="#3C3B6E" />
    <circle cx="4" cy="4" r="1" fill="#FFFFFF" />
    <circle cx="10" cy="4" r="1" fill="#FFFFFF" />
    <circle cx="7" cy="7" r="1" fill="#FFFFFF" />
    <circle cx="4" cy="10" r="1" fill="#FFFFFF" />
    <circle cx="10" cy="10" r="1" fill="#FFFFFF" />
  </svg>
);

const EuFlag = () => (
  <svg className="w-6 h-4.5 rounded-xs shadow-xs overflow-hidden" viewBox="0 0 32 24">
    <rect width="32" height="24" fill="#003399" />
    <circle cx="16" cy="4" r="1" fill="#FFCC00" />
    <circle cx="16" cy="20" r="1" fill="#FFCC00" />
    <circle cx="8" cy="12" r="1" fill="#FFCC00" />
    <circle cx="24" cy="12" r="1" fill="#FFCC00" />
    <circle cx="10" cy="6" r="1" fill="#FFCC00" />
    <circle cx="22" cy="6" r="1" fill="#FFCC00" />
    <circle cx="10" cy="18" r="1" fill="#FFCC00" />
    <circle cx="22" cy="18" r="1" fill="#FFCC00" />
  </svg>
);

const MedicalStandardBadge = () => (
  <svg className="w-6 h-4.5 rounded-xs shadow-xs overflow-hidden" viewBox="0 0 32 24">
    <rect width="32" height="24" fill="#1e755f" />
    <rect x="13" y="4" width="6" height="16" fill="#FFFFFF" rx="1" />
    <rect x="7" y="9" width="18" height="6" fill="#FFFFFF" rx="1" />
  </svg>
);

const DigitalDentalBadge = () => (
  <svg className="w-6 h-4.5 rounded-xs shadow-xs overflow-hidden" viewBox="0 0 32 24">
    <rect width="32" height="24" fill="#104c3e" />
    <circle cx="16" cy="12" r="7" stroke="#5fc4aa" strokeWidth="2" fill="none" />
    <circle cx="16" cy="12" r="2.5" fill="#5fc4aa" />
  </svg>
);

export const TechEquipmentSection: React.FC = () => {
  const technologies = [
    {
      FlagComponent: SwissFlag,
      country: "Швейцарія",
      title: "Імпланти Straumann®",
      description:
        "Світовий золотий стандарт імплантації. Поверхня SLActive® забезпечує прискорену остеоінтеграцію та довічну надійність.",
    },
    {
      FlagComponent: GermanFlag,
      country: "Німеччина",
      title: "Мікроскопи Carl Zeiss",
      description:
        "20-кратне оптичне збільшення дає змогу виявляти додаткові канали, проходити звужені ділянки та зберігати здорові тканини.",
    },
    {
      FlagComponent: UsaFlag,
      country: "США",
      title: "Beyond Polus Advanced",
      description:
        "Холодне галогеново-світлодіодне світло з оптичною фільтрацією ультрафіолету. Освітлення зубів без перегріву та болю.",
    },
    {
      FlagComponent: MedicalStandardBadge,
      country: "Міжнародний протокол",
      title: "Седація закисом азоту",
      description:
        "Комфортне лікування діток та дорослих пацієнтів із тривожністю. Швидкий ефект розслаблення без токсичного навантаження.",
    },
    {
      FlagComponent: EuFlag,
      country: "Стандарт ЄС EN 13060",
      title: "Стерилізація класу «B»",
      description:
        "Вакуумні автоклави найвищого медичного стандарту з повною триступеневою дезінфекцією та індивідуальним пакуванням.",
    },
    {
      FlagComponent: DigitalDentalBadge,
      country: "Цифрова точність",
      title: "3D-томографія та сканування",
      description:
        "Комп'ютерна 3D-діагностика та фотофіксація на кожному етапі для мікронної точності та повного узгодження плану з пацієнтом.",
    },
  ];

  return (
    <section id="technology" className="py-20 lg:py-24 bg-[#0c4134] text-[#faf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14 space-y-2"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-normal leading-[1.2]">
            Оснащення клініки світового рівня
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            Ми використовуємо діагностичне та лікувальне обладнання з Німеччини, Швейцарії та США для мікронної точності кожної маніпуляції.
          </p>
        </motion.div>

        {/* Technical Grid with hairline borders and authentic flags */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => {
            const Flag = tech.FlagComponent;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#07241d] rounded-xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/25 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <Flag />
                      <span className="text-[11px] font-medium tracking-wide text-white/80">
                        {tech.country}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-white mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
