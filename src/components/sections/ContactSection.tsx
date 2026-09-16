/* Hallmark · component: ContactSection · genre: editorial · theme: Forest-Lumen · critique: P5 H5 E5 S5 R5 V5 */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contacts" className="py-20 lg:py-28 bg-[#faf9f5] border-b border-[#e3e1d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-14 space-y-2"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c4134] tracking-normal leading-[1.2]">
            Чекаємо на вас у Мукачеві
          </h2>
          <p className="text-sm sm:text-base text-[#515e59] leading-relaxed">
            Клініка Nova Dente розташована в центрі міста зі зручним під&apos;їздом та паркінгом для пацієнтів.
          </p>
        </motion.div>

        {/* Editorial Two-Column: Structured Directory List + Crisp Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Structured Editorial Directory List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="divide-y divide-[#e3e1d8] border-y border-[#e3e1d8]">
              
              {/* Address Row */}
              <div className="py-5 space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#83918b] block">
                  Адреса клініки
                </span>
                <p className="text-sm font-semibold text-[#121815] leading-snug">
                  {CLINIC_INFO.fullAddress}
                </p>
              </div>

              {/* Working Hours Row */}
              <div className="py-5 space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#83918b] block">
                  Графік прийому
                </span>
                <p className="text-sm font-semibold text-[#121815]">
                  {CLINIC_INFO.schedule}
                </p>
              </div>

              {/* Direct Phone Contact */}
              <div className="py-5 space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#83918b] block">
                  Прямий телефон
                </span>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="font-serif text-lg font-semibold text-[#0c4134] hover:text-[#1e755f] transition-colors block"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              {/* Email / Documentation */}
              <div className="py-5 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#83918b] block">
                  Електронна пошта
                </span>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="text-sm font-semibold text-[#0c4134] hover:text-[#1e755f] transition-colors break-all block"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            {/* Direct CTA Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0c4134] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#155a49] transition-colors shadow-xs cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Записатися на прийом</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={CLINIC_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-white text-[#0c4134] border border-[#e3e1d8] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#e4f2ed] transition-colors"
              >
                <span>ClinicCards</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Clean Architectural Map Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-xl overflow-hidden border border-[#e3e1d8] bg-[#e4f2ed] shadow-xs">
              <iframe
                title="Карта розташування клініки Nova Dente у Мукачеві"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.2319225725776!2d22.716168!3d48.441484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473919e91771f2b9%3A0x4a9fb6cf47f3b6a0!2z0LLRg9C70LjRhtGPINCd0LXQtNC10YbQtdGXLCDQnNGD0LrQsNGH0LXQstC-LCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDg5NjEx!5e0!3m2!1suk!2sua!4v1710000000000!5m2!1suk!2sua"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
