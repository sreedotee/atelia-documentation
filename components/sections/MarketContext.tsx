"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const stats = [
  {
    number: "30–40%",
    label: "Online fashion return rate",
    source: "Narvar Returns Report",
  },
  {
    number: "$550B",
    label: "Annual cost of returns globally",
    source: "Industry reports",
  },
  {
    number: "64%",
    label: "Returns due to fit issues",
    source: "Fashion e-commerce studies",
  },
];

export default function MarketContext() {
  return (
    <section className="py-28 bg-white dark:bg-[#1e1530]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="02b" title="Market Context" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-16 max-w-2xl"
        >
          Online fashion returns are a massive problem costing retailers billions annually,
          primarily driven by fit and appearance uncertainty.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#FAFAFA] dark:bg-[#2a1e36] border border-[#E5E5E5] dark:border-[#3D2B4C]/30 p-8"
            >
              <p className="font-clash text-5xl font-bold text-[#1D1A1C] dark:text-white leading-none">
                {s.number}
              </p>
              <p className="text-sm text-[#737373] dark:text-gray-400 mt-4 leading-relaxed">
                {s.label}
              </p>
              <p className="text-xs text-[#A3A3A3] dark:text-gray-600 mt-2">
                Source: {s.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
