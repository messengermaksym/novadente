"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DOCTORS } from "@/data/clinicData";

interface DoctorsSectionProps {
  onSelectDoctorForBooking?: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = () => {
  return (
    <section id="doctors" className="py-20 lg:py-24 bg-[#f9f8f4] border-b border-[#e3e1d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14 space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#1e755f]">
            Команда Nova Dente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c4134] tracking-tight">
            Лікарі клініки Nova Dente
          </h2>
          <p className="text-sm sm:text-base text-[#515e59] leading-relaxed">
            Постійна практика понад 10 років, міжнародні сертифікації та персональна відповідальність за кожну операцію і процедуру.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doctor, idx) => (
            <motion.article
              key={doctor.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl border border-[#e3e1d8] overflow-hidden flex flex-col justify-between h-full shadow-xs hover:shadow-md transition-shadow group"
            >
              <div>
                {/* Doctor Portrait Frame */}
                <div className="relative aspect-[3/4] w-full bg-[#e4f2ed] border-b border-[#e3e1d8] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Doctor Bio */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#0c4134] leading-snug">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-[#1e755f] font-medium mt-1 leading-relaxed">
                      {doctor.role}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#e3e1d8] space-y-1.5">
                    <span className="text-[10px] font-bold text-[#83918b] uppercase tracking-wider block">
                      Напрями роботи:
                    </span>
                    <ul className="space-y-1.5">
                      {doctor.specialties.map((spec, sIdx) => (
                        <li key={sIdx} className="text-xs text-[#515e59] leading-relaxed flex items-baseline gap-1.5">
                          <span className="text-[#1e755f] font-bold">—</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
