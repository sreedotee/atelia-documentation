"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

// Drop your image/SVG in /public/icons/ and set iconSrc — the emoji placeholder is replaced automatically.
const outcomeItems = [
  {
    iconSrc: "", // e.g. "/icons/universal-saving.svg"
    placeholder: "📱",
    title: "Universal Saving",
    desc: "Paste links from any store to build collections",
  },
  {
    iconSrc: "", // e.g. "/icons/virtual-try-on.svg"
    placeholder: "✨",
    title: "AI Virtual Try-On",
    desc: "See how items look on your body before buying",
  },
  {
    iconSrc: "", // e.g. "/icons/occasion-based.svg"
    placeholder: "🗂️",
    title: "Occasion-Based Organization",
    desc: "Collections for vacation, work, events—not item types",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="py-28 bg-white dark:bg-[#1e1530]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="01" title="Overview" fontWeight="font-medium" />

        {/*
          DOM order → mobile: Brief → Challenge+Approach → Outcome header → Box
          Desktop (lg): explicit col/row placement gives the 2×2 grid:
            col1-row1: Brief              | col2-row1: Outcome header
            col1-row2: Challenge+Approach | col2-row2: Box
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">

          {/* Brief — desktop: col 1, row 1 */}
          <motion.div {...fadeInUp} className="lg:col-start-1 lg:row-start-1">
            <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] dark:text-white mb-3">
              The Brief
            </h3>
            <p className="text-[#5C5759] dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed italic border-l-4 border-[#3D2B4C]/30 pl-4">
              "Create a mobile app that uses AI to generate outfit visualizations from clothing items."
            </p>
          </motion.div>

          {/* Challenge + Approach — desktop: col 1, row 2 */}
          <motion.div {...fadeInUp} className="space-y-8 lg:col-start-1 lg:row-start-2">
            <div>
              <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] dark:text-white mb-3">
                The Challenge
              </h3>
              <p className="text-[#5C5759] dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
                Virtual try-on technology exists—but where does it create the most value? I needed
                to find the right problem to solve.
              </p>
            </div>

            <div>
              <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] dark:text-white mb-3">
                My Approach
              </h3>
              <ul className="space-y-2">
                {[
                  "Research existing solutions",
                  "Identify use case gaps",
                  "Define strategic opportunity",
                  "Design for that context",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#5C5759] dark:text-gray-300 text-sm md:text-base">
                    <span className="w-6 h-6 rounded-full bg-[#3D2B4C]/10 dark:bg-purple-500/20 text-[#3D2B4C] dark:text-purple-300 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Outcome heading + description — desktop: col 2, row 1 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-start-2 lg:row-start-1"
          >
            <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] dark:text-white mb-3">
              The Outcome
            </h3>
            <p className="text-[#5C5759] dark:text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed">
              A shopping companion that helps users make confident purchase decisions across any
              retailer by combining:
            </p>
          </motion.div>

          {/* Combined box — desktop: col 2, row 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full lg:col-start-2 lg:row-start-2"
          >
            <div className="h-full rounded-xl bg-[#FAF9FA] dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 flex flex-col justify-around px-6 py-6">
              {outcomeItems.map((f) => (
                <div key={f.title} className="flex items-center gap-5">
                  {/* Icon slot — 48×48. Set iconSrc above to replace the emoji placeholder with your image/SVG */}
                  {f.iconSrc ? (
                    <img
                      src={f.iconSrc}
                      alt={f.title}
                      className="w-12 h-12 object-contain flex-shrink-0"
                    />
                  ) : (
                    <span className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-3xl">
                      {f.placeholder}
                    </span>
                  )}
                  <div>
                    <p className="font-medium text-[#1D1A1C] dark:text-white text-sm md:text-base lg:text-[18px] leading-tight">{f.title}</p>
                    <p className="text-[#5C5759] dark:text-gray-400 text-sm md:text-base lg:text-[18px] leading-snug mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
