"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

export default function ResearchApproach() {
  const methods = [
    {
      icon: "🔍",
      title: "Competitive Analysis",
      desc: "Analyze 5 existing apps to identify use cases, gaps, and opportunities in the market.",
      stats: ["5 apps analyzed", "3 use cases identified", "Feature comparison", "Gap analysis"],
    },
    {
      icon: "💬",
      title: "User Interviews",
      desc: "Interview 5 online shoppers to understand saving behavior, organization methods, and pain points.",
      stats: ["5 participants", "30 min each", "Saving behavior", "Organization patterns", "Purchase pain points"],
    },
    {
      icon: "🃏",
      title: "Card Sorting",
      desc: "Test how users naturally organize clothing to validate occasion-based vs. type-based mental models.",
      stats: ["20 clothing items", "Photo sorting task", "Occasion vs. type", "Mental model validation"],
    },
  ];

  return (
    <section id="research" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="03" title="Research & Approach" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          To identify where virtual try-on creates value, I analyzed the existing landscape and
          validated user needs through interviews and card sorting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ background: "#3D2B4C" }}
        >
          {methods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/20 p-6 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl mb-4 block">{m.icon}</span>
              <h3 className="font-clash text-xl font-semibold text-white mb-3">{m.title}</h3>
              <p className="text-purple-200 text-sm leading-relaxed mb-5">{m.desc}</p>
              <ul className="space-y-1.5">
                {m.stats.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-purple-300 text-sm">
                    <span className="text-purple-400">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
