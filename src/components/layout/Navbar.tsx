"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Clock, MapPin } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getAssetPath } from "@/lib/utils";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Про клініку", href: "#about" },
    { name: "Послуги", href: "#services" },
    { name: "Лікарі", href: "#doctors" },
    { name: "Технології", href: "#technology" },
    { name: "Ціни", href: "#pricing" },
    { name: "Відгуки", href: "#reviews" },
    { name: "Контакти", href: "#contacts" },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        style={{
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
        }}
        className={`fixed top-0 left-0 right-0 z-[100] bg-[#0c4134] text-white border-b border-white/10 transition-all duration-200 ${
          isScrolled ? "py-2.5 shadow-md" : "py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clinic Brand */}
          <Link
            href="/"
            onClick={(e) => {
              // Smoothly scroll to the very top when clicked
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Головна сторінка Nova Dente"
            className="flex items-center cursor-pointer"
          >
            <Image
              src={getAssetPath("/images/clinic/logo.png")}
              alt="Nova Dente Logo"
              width={56}
              height={56}
              className="object-contain shrink-0 h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm sm:text-[15px] font-semibold text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors py-1 focus-visible:outline-2 focus-visible:outline-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-white"
            >
              <Phone className="w-4 h-4 text-[#5fc4aa]" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4.5 py-2.5 bg-white text-[#0c4134] text-sm font-semibold rounded-lg hover:bg-[#e4f2ed] active:translate-y-px transition-colors focus-visible:outline-2 focus-visible:outline-white shadow-xs"
            >
              <span>Записатися</span>
            </motion.button>
          </div>

          {/* Mobile button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-lg bg-white text-[#0c4134] text-xs font-semibold hover:bg-[#e4f2ed] active:scale-95 transition-all shadow-xs cursor-pointer"
            >
              Записатися
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Меню"
              className="p-1.5 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile menu (Overlay on top of other layers) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Subtle backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMobileMenuOpen(false)}
                className="lg:hidden fixed inset-0 top-[60px] bg-black/40 backdrop-blur-xs z-40"
              />

              {/* Menu Container */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="lg:hidden absolute top-full left-0 right-0 z-50 border-t border-white/10 bg-[#07241d] px-4 pt-3 pb-6 space-y-3 shadow-2xl"
              >
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10"
                  >
                    <Phone className="w-4 h-4 text-[#5fc4aa]" />
                    <span>{CLINIC_INFO.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-[#0c4134] text-xs font-semibold rounded-lg hover:bg-[#e4f2ed]"
                  >
                    <span>Записатися на прийом</span>
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
