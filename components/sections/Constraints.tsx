"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const constraintCategories = [
  {
    icon: "⚙️",
    title: "Technical",
    constraints: [
      "Cannot compete with retailers (no direct purchasing)",
      "Must work across multiple stores (not single-brand)",
      "AI quality dependent on photo inputs (garbage in, garbage out)",
      "Must handle items that go out of stock or links that break",
    ],
  },
  {
    icon: "👤",
    title: "User Experience",
    constraints: [
      "Privacy concerns with body photos (sensitive data handling)",
      "Must prevent fake/low-quality item links (spam prevention)",
      "What if AI generation fails repeatedly? (fallback needed)",
      "Different body types require different photo angles",
    ],
  },
  {
    icon: "💼",
    title: "Business",
    constraints: [
      "Return reduction value prop needs validation with retailers",
      "Monetization: affiliate vs. B2B vs. premium tier?",
      "How to measure success? (returns? purchases? engagement?)",
      "Retailer partnerships required for complete solution",
    ],
  },
];

export default function Constraints() {
  return (
    <section id="constraints" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="19" title="Constraints & Considerations" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          Every design decision was made within real constraints and considerations that shaped the
          final solution.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {constraintCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#2a1e36] rounded-2xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {cat.constraints.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-[#5C5759] dark:text-gray-300">
                    <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5 shrink-0">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-2xl p-6 flex items-start gap-4"
        >
          <span className="text-2xl">💡</span>
          <p className="text-[#5C5759] dark:text-gray-300">
            These constraints were not limitations—they were guardrails that led to better
            decisions. For example, privacy concerns led to on-demand model setup instead of forced
            onboarding.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
