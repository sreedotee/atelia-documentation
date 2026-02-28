"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const modes = [
  {
    number: "01",
    title: "BEFORE",
    subtitle: "Collecting & Organizing",
    details: [
      { label: "Behavior", value: "Browsing, saving, curating" },
      { label: "Mental model", value: '"Gathering inspiration"' },
      { label: "Reference", value: "Pinterest, Instagram Saved" },
    ],
    implication: "Low-friction saving, visual browsing, flexible organization",
    highlight: false,
  },
  {
    number: "02",
    title: "DURING",
    subtitle: "Creating & Experimenting",
    details: [
      { label: "Behavior", value: "Mixing items, trying combinations" },
      { label: "Mental model", value: '"Playing with looks"' },
      { label: "Reference", value: "Dress-up games" },
    ],
    implication: "Interactive canvas, immediate feedback, easy regeneration",
    highlight: true,
  },
  {
    number: "03",
    title: "AFTER",
    subtitle: "Reviewing & Deciding",
    details: [
      { label: "Behavior", value: "Viewing results, saving favorites" },
      { label: "Mental model", value: "Recipe apps (outfit = dish, items = ingredients)" },
      { label: "Reference", value: "Recipe apps, cookbooks" },
    ],
    implication: 'Show "items used," clear save/share actions, purchase paths',
    highlight: false,
  },
];

export default function ThreeModes() {
  return (
    <section id="framework" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="09" title="Three Behavioral Modes" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-16 max-w-2xl">
          Users don't do one thing in this app—they shift between three distinct mindsets during the
          shopping journey. Each mode needed its own UI patterns and interactions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${
                mode.highlight
                  ? "bg-[#3D2B4C] text-white"
                  : "bg-white dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30"
              }`}
            >
              <p
                className={`font-clash text-7xl font-bold leading-none mb-3 ${
                  mode.highlight ? "text-white/20" : "text-[#3D2B4C]/10 dark:text-purple-500/20"
                }`}
              >
                {mode.number}
              </p>
              <h3
                className={`font-clash text-2xl font-bold mb-1 ${
                  mode.highlight ? "text-white" : "text-[#1D1A1C] dark:text-white"
                }`}
              >
                {mode.title}
              </h3>
              <p
                className={`font-clash text-lg mb-6 ${
                  mode.highlight ? "text-purple-200" : "text-[#3D2B4C] dark:text-purple-300"
                }`}
              >
                {mode.subtitle}
              </p>

              <div className="space-y-3 mb-6">
                {mode.details.map((d) => (
                  <div key={d.label}>
                    <p
                      className={`text-xs uppercase tracking-wide font-medium mb-0.5 ${
                        mode.highlight ? "text-purple-300" : "text-[#7D767A] dark:text-gray-500"
                      }`}
                    >
                      {d.label}
                    </p>
                    <p
                      className={`text-sm ${
                        mode.highlight ? "text-white/90" : "text-[#1D1A1C] dark:text-gray-200"
                      }`}
                    >
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={`rounded-xl p-4 ${
                  mode.highlight ? "bg-white/10" : "bg-[#3D2B4C]/5 dark:bg-purple-500/10"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-wide font-bold mb-1 ${
                    mode.highlight ? "text-purple-300" : "text-[#3D2B4C] dark:text-purple-400"
                  }`}
                >
                  Design implication
                </p>
                <p
                  className={`text-sm ${
                    mode.highlight ? "text-white/90" : "text-[#5C5759] dark:text-gray-300"
                  }`}
                >
                  {mode.implication}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
