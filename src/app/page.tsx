"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustTicker } from "@/components/sections/TrustTicker";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { TechEquipmentSection } from "@/components/sections/TechEquipmentSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { BookingModal } from "@/components/ui/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedDoctor, setPreselectedDoctor] = useState("");
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenBooking = () => {
    setPreselectedDoctor("");
    setPreselectedService("");
    setIsBookingOpen(true);
  };

  const handleSelectDoctorForBooking = (doctorName: string) => {
    setPreselectedDoctor(doctorName);
    setPreselectedService("");
    setIsBookingOpen(true);
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setPreselectedDoctor("");
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#faf9f5]">
      {/* Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Showcase (Sticky for parallax effect) */}
      <HeroSection onOpenBooking={handleOpenBooking} />

      {/* Main Content Wrapper - stays above sticky Hero on scroll with transparent overlap */}
      <div className="relative z-20 bg-transparent">
        {/* About & Philosophy (Parallax Overlap) */}
        <AboutSection />

        {/* Categorized Services */}
        <ServicesSection onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 4 Founders & Doctors */}
        <DoctorsSection onSelectDoctorForBooking={handleSelectDoctorForBooking} />

        {/* Digital Technology & Equipment */}
        <TechEquipmentSection />

        {/* Transparent Pricing */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* Authentic Reviews */}
        <ReviewsSection />

        {/* Infinite Trust Ticker */}
        <TrustTicker />

        {/* Location & Contacts */}
        <ContactSection onOpenBooking={handleOpenBooking} />

        {/* Statement Footer */}
        <Footer />
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedDoctor={preselectedDoctor}
        preselectedService={preselectedService}
      />
    </main>
  );
}
