"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

export default function BriefChallenge() {
  return (
    <section id="brief" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="02" title="The Brief & Challenge" />

        <motion.div {...fadeInUp} className="mb-12 max-w-3xl">
          <p className="text-xl text-[#5C5759] leading-relaxed">
            The starting point was simple:{" "}
            <em>"Create a mobile app that uses AI to generate outfit visualizations from clothing items."</em>
          </p>
          <p className="text-xl text-[#5C5759] leading-relaxed mt-4">
            But the real challenge was strategic:{" "}
            <strong className="text-[#1D1A1C]">
              Where does this technology create the most value?
            </strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "The Question",
              content:
                "Virtual try-on technology exists—but for what purpose? Where does it solve real problems?",
              highlight: false,
            },
            {
              title: "My Approach",
              content:
                "Research existing solutions → Identify use case gaps → Define strategic opportunity → Design for that context",
              highlight: true,
            },
            {
              title: "The Outcome",
              content:
                "A shopping companion that helps users make confident purchase decisions across any retailer.",
              highlight: false,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${
                card.highlight
                  ? "bg-[#3D2B4C] text-white"
                  : "bg-white border border-[#E8E5E6]"
              } hover:shadow-lg transition-shadow`}
            >
              <h3
                className={`font-clash text-base md:text-lg lg:text-xl font-medium mb-4 ${
                  card.highlight ? "text-white" : "text-[#1D1A1C]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  card.highlight ? "text-purple-200" : "text-[#5C5759]"
                }`}
              >
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
