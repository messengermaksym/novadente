"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Calendar, ArrowUp } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#071f19] text-[#faf9f5] pt-14 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ft5 Statement & Clinical Colophon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Clinic Identity & Manifesto */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/clinic/logo.png"
                alt="Nova Dente Logo"
                width={52}
                height={52}
                className="object-contain shrink-0 h-12 w-auto"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Nova Dente
              </span>
            </div>
            <p className="text-sm text-white/70 max-w-lg leading-relaxed">
              Сімейна стоматологічна клініка в Мукачеві. 
              Заснована лікарями Михайлом Тодавчичем, Юрієм Тодавчичем та Ярославом Козарем. 
              Комплексне лікування за світовими протоколами цифрової точності та сімейної турботи.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Nova Dente"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0c4134] text-white flex items-center justify-center border border-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Nova Dente"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0c4134] text-white flex items-center justify-center border border-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Direct Clinical Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#5fc4aa]">
              Локація та години
            </div>
            <p className="text-xs text-white/75 flex items-start gap-2 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#5fc4aa] shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.fullAddress}</span>
            </p>
            <p className="text-xs text-white/75 leading-relaxed">
              Графік прийому: {CLINIC_INFO.schedule}
            </p>
            <p className="text-xs text-white/50">
              {CLINIC_INFO.scheduleWeekend}
            </p>
          </div>

          {/* Direct Contact & Booking */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#5fc4aa]">
              Зв&apos;язок
            </div>
            <p className="text-xs text-white/75 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#5fc4aa] shrink-0" />
              <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                {CLINIC_INFO.phone}
              </a>
            </p>
            <p className="text-xs text-white/75 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#5fc4aa] shrink-0" />
              <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors break-all">
                {CLINIC_INFO.email}
              </a>
            </p>
            <div className="pt-2">
              <a
                href={CLINIC_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-[#0c4134] text-xs font-medium rounded-lg transition-colors border border-white/15"
              >
                <Calendar className="w-3.5 h-3.5 text-[#5fc4aa]" />
                <span>Онлайн-розклад ClinicCards</span>
              </a>
            </div>
          </div>
        </div>

        {/* Colophon bottom line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <div>
            © {new Date().getFullYear()} Стоматологічна клініка Nova Dente. Ліцензія МОЗ України на медичну практику.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-white/60 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
          >
            <span>Нагору</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
