"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Phone, CheckCircle, ExternalLink, Clock, ShieldCheck } from "lucide-react";
import { CLINIC_INFO, DOCTORS, SERVICES } from "@/data/clinicData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDoctor?: string;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedDoctor = "",
  preselectedService = "",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(preselectedDoctor);
  const [selectedService, setSelectedService] = useState(preselectedService);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedDoctor) setSelectedDoctor(preselectedDoctor);
    if (preselectedService) setSelectedService(preselectedService);
  }, [preselectedDoctor, preselectedService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#061c16]/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#faf9f5] border border-[#0c4134]/15 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#0c4134] text-[#faf9f5] px-6 py-5 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#5fc4aa] font-semibold">
                  Nova Dente • Мукачево
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight">
                  Запис на консультацію
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Закрити модальне вікно"
                className="p-2 rounded-full text-[#faf9f5]/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* ClinicCards Banner */}
              <div className="bg-[#e4f2ed] border border-[#298d74]/30 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0c4134] text-[#faf9f5] flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0c4134]">
                      Миттєвий онлайн-запис ClinicCards
                    </div>
                    <div className="text-xs text-[#52605b]">
                      Оберіть точний вільний час у розкладі лікарів
                    </div>
                  </div>
                </div>
                <a
                  href={CLINIC_INFO.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0c4134] text-white text-xs font-medium rounded-lg hover:bg-[#145a48] transition-colors shrink-0"
                >
                  Відкрити розклад
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#e4f2ed] text-[#0c4134] flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#0c4134]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#0c4134] font-medium">
                    Дякуємо за довіру, {name}!
                  </h4>
                  <p className="text-sm text-[#52605b] max-w-sm mx-auto leading-relaxed">
                    Адміністратор клініки Nova Dente зателефонує вам на номер{" "}
                    <span className="font-semibold text-[#121815]">{phone}</span> протягом 15 хвилин для підтвердження візиту.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 bg-[#0c4134] text-white text-sm font-medium rounded-xl hover:bg-[#145a48] transition-colors"
                    >
                      Зрозуміло
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#121815] uppercase tracking-wider mb-1.5">
                        Ваше ім&apos;я *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#899691] absolute left-3.5 top-3" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Олена або Михайло"
                          className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#cbd5cf] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4134] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#121815] uppercase tracking-wider mb-1.5">
                        Номер телефону *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#899691] absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+38 (066) 000-00-00"
                          className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#cbd5cf] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4134] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#121815] uppercase tracking-wider mb-1.5">
                        Бажана послуга
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#cbd5cf] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4134] focus:border-transparent transition-all"
                      >
                        <option value="">Оберіть напрямок...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#121815] uppercase tracking-wider mb-1.5">
                        Бажаний лікар
                      </label>
                      <select
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#cbd5cf] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4134] focus:border-transparent transition-all"
                      >
                        <option value="">Будь-який вільний фахівець</option>
                        {DOCTORS.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#121815] uppercase tracking-wider mb-1.5">
                        Зручна дата
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#cbd5cf] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4134] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#121815] uppercase tracking-wider mb-1.5">
                        Коментар або симптоми
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Наприклад: турбує чутливість..."
                        className="w-full px-3.5 py-2.5 bg-white border border-[#cbd5cf] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4134] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-[#0c4134] text-white font-medium text-sm rounded-xl hover:bg-[#145a48] active:translate-y-0.5 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#0c4134]"
                    >
                      Надіслати заявку на консультацію
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 text-xs text-[#52605b] pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#298d74]" />
                      Конфіденційність гарантовано
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#298d74]" />
                      Відповідь до 15 хвилин
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
