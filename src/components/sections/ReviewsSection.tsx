"use client";

import React from "react";
import { MessageSquarePlus, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { REVIEWS, CLINIC_INFO } from "@/data/clinicData";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-[#f2f0ea] border-b border-[#e3e1d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1e755f]">
              Досвід пацієнтів
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c4134] tracking-tight">
              Відгуки про Nova Dente
            </h2>
            <p className="text-sm sm:text-base text-[#515e59] leading-relaxed">
              Історії пацієнтів із Мукачева та інших міст, які довірили нам здоров&apos;я своїх посмішок.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 bg-white rounded-lg border border-[#e3e1d8] text-xs font-medium text-[#121815] shadow-xs">
              <span className="font-bold text-[#0c4134]">5.0</span> рейтинг у Google
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={CLINIC_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#0c4134] text-white text-xs font-semibold rounded-lg hover:bg-[#155a49] transition-colors focus-visible:outline-2 focus-visible:outline-[#0c4134] shadow-xs"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Залишити відгук</span>
              <ExternalLink className="w-3 h-3 text-[#5fc4aa]" />
            </motion.a>
          </div>
        </motion.div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 border border-[#e3e1d8] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="text-[11px] font-semibold text-[#1e755f] uppercase tracking-wider">
                  {review.treatment}
                </div>
                <p className="text-xs sm:text-sm text-[#515e59] leading-relaxed">
                  «{review.comment}»
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#f2f0ea]">
                <div className="font-serif text-sm font-bold text-[#0c4134]">
                  {review.author}
                </div>
                <div className="text-[11px] text-[#83918b]">
                  {review.city} • {review.date}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
