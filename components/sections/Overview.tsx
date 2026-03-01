"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const outcomeItems = [
  {
    icon: "📱",
    title: "Universal Saving",
    desc: "Paste links from any store to build collections",
  },
  {
    icon: "✨",
    title: "AI Virtual Try-On",
    desc: "See how items look on your body before buying",
  },
  {
    icon: "🗂️",
    title: "Occasion-Based Organization",
    desc: "Collections for vacation, work, events—not item types",
  },
];

export default function Overview() {
  return (
    <section id="overview" className="py-28 bg-white dark:bg-[#1e1530]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="01" title="Overview" fontWeight="font-medium" />

        {/* 2×2 grid: row 1 = Brief | Outcome header, row 2 = Challenge+Approach | Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">

          {/* Row 1, Left: The Brief */}
          <motion.div {...fadeInUp}>
            <h3 className="font-clash text-2xl font-medium text-[#1D1A1C] dark:text-white mb-3">
              The Brief
            </h3>
            <p className="text-[#5C5759] dark:text-gray-300 text-lg leading-relaxed italic border-l-4 border-[#3D2B4C]/30 pl-4">
              "Create a mobile app that uses AI to generate outfit visualizations from clothing items."
            </p>
          </motion.div>

          {/* Row 1, Right: The Outcome heading + description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-clash text-2xl font-medium text-[#1D1A1C] dark:text-white mb-3">
              The Outcome
            </h3>
            <p className="text-[#5C5759] dark:text-gray-300 text-lg leading-relaxed">
              A shopping companion that helps users make confident purchase decisions across any
              retailer by combining:
            </p>
          </motion.div>

          {/* Row 2, Left: The Challenge + My Approach */}
          <motion.div {...fadeInUp} className="space-y-8">
            <div>
              <h3 className="font-clash text-2xl font-medium text-[#1D1A1C] dark:text-white mb-3">
                The Challenge
              </h3>
              <p className="text-[#5C5759] dark:text-gray-300 text-lg leading-relaxed">
                Virtual try-on technology exists—but where does it create the most value? I needed
                to find the right problem to solve.
              </p>
            </div>

            <div>
              <h3 className="font-clash text-2xl font-medium text-[#1D1A1C] dark:text-white mb-3">
                My Approach
              </h3>
              <ul className="space-y-2">
                {[
                  "Research existing solutions",
                  "Identify use case gaps",
                  "Define strategic opportunity",
                  "Design for that context",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#5C5759] dark:text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-[#3D2B4C]/10 dark:bg-purple-500/20 text-[#3D2B4C] dark:text-purple-300 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Row 2, Right: Combined box — top aligns with The Challenge, bottom with "Design for that context" */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="h-full rounded-xl bg-[#FAF9FA] dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 flex flex-col justify-around px-5 py-4">
              {outcomeItems.map((f) => (
                <div key={f.title} className="flex items-center gap-4">
                  <span className="text-2xl flex-shrink-0">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-[#1D1A1C] dark:text-white text-sm">{f.title}</p>
                    <p className="text-[#5C5759] dark:text-gray-400 text-sm mt-0.5">{f.desc}</p>
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
