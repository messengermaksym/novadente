"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contacts" className="py-20 lg:py-28 bg-[#faf9f5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#1d725d] font-bold">
                Локація та зв&apos;язок
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c4134] tracking-tight">
                Завітайте до Nova Dente у Мукачеві
              </h2>
              <p className="text-sm sm:text-base text-[#52605b] leading-relaxed">
                Ми знаходимося у затишному центрі міста Мукачево зі зручним під&apos;їздом та паркінгом для пацієнтів. 
                Чекаємо на ваш візит!
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white p-5 rounded-2xl border border-[#0c4134]/10 shadow-xs hover:shadow-md transition-shadow space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-[#e4f2ed] text-[#0c4134] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#121815] uppercase tracking-wider">
                  Адреса клініки
                </div>
                <p className="text-xs text-[#52605b] leading-relaxed">
                  {CLINIC_INFO.fullAddress}
                </p>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1d725d] hover:text-[#0c4134] transition-colors pt-1"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Прокласти маршрут</span>
                </a>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white p-5 rounded-2xl border border-[#0c4134]/10 shadow-xs hover:shadow-md transition-shadow space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-[#e4f2ed] text-[#0c4134] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#121815] uppercase tracking-wider">
                  Графік прийому
                </div>
                <p className="text-xs text-[#52605b] leading-relaxed">
                  {CLINIC_INFO.schedule}
                </p>
                <p className="text-[11px] text-[#899691]">
                  {CLINIC_INFO.scheduleWeekend}
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white p-5 rounded-2xl border border-[#0c4134]/10 shadow-xs hover:shadow-md transition-shadow space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-[#e4f2ed] text-[#0c4134] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#121815] uppercase tracking-wider">
                  Телефон рецепції
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="block text-sm font-bold text-[#0c4134] hover:text-[#1d725d] transition-colors"
                >
                  {CLINIC_INFO.phone}
                </a>
                <p className="text-[11px] text-[#899691]">
                  Дзвінки згідно з тарифами вашого оператора
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white p-5 rounded-2xl border border-[#0c4134]/10 shadow-xs hover:shadow-md transition-shadow space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-[#e4f2ed] text-[#0c4134] flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-[#121815] uppercase tracking-wider">
                  Електронна пошта
                </div>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="block text-xs font-bold text-[#0c4134] hover:text-[#1d725d] transition-colors break-all"
                >
                  {CLINIC_INFO.email}
                </a>
                <p className="text-[11px] text-[#899691]">
                  Для документації та запитань
                </p>
              </motion.div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0c4134] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#145a48] transition-colors shadow-sm"
              >
                <span>Записатися на прийом</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CLINIC_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#0c4134] border border-[#0c4134]/20 text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#e4f2ed] transition-colors"
              >
                <span>ClinicCards онлайн</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Map Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="bg-white p-3 rounded-3xl border border-[#0c4134]/10 shadow-lg overflow-hidden">
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-[#e4f2ed]">
                <iframe
                  title="Карта проїзду до стоматології Nova Dente Мукачево"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
