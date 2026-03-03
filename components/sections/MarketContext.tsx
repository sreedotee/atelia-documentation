"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const stats = [
  {
    number: "78%",
    label: "Browse 5+ different retailers per purchase",
  },
  {
    number: "4.2 locations",
    label: "Average places used to save items",
  },
  {
    number: "64%",
    label: 'Hesitate due to "unsure how it looks on me"',
  },
];

export default function MarketContext() {
  return (
    <section className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="" title="Key Findings" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] leading-relaxed mb-16 max-w-2xl"
        >
          Survey of 47 online shoppers revealed three core behavioral patterns driving the need for better shopping tools.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#FAFAFA] border border-[#E5E5E5] p-8"
            >
              <p className="font-clash text-5xl font-semibold text-[#1D1A1C] leading-none">
                {s.number}
              </p>
              <p className="text-sm text-[#737373] mt-4 leading-relaxed">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
