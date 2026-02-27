"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const validated = [
  { title: "Paste-link flow", detail: "5/5 completed successfully" },
  { title: "Three-mode structure", detail: '"Makes sense, feels natural"' },
  { title: "Collections organization", detail: '"This is how I think about it"' },
  { title: "Try-on quality", detail: '"Looks realistic, I\'d trust this"' },
];

const improvements = [
  {
    issue: "Privacy messaging: 3/5 hesitated at photo upload",
    solution: 'Added "Why we need this" explainer in onboarding',
  },
  {
    issue: "History discoverability: 2/5 didn't notice History section",
    solution: "Increased visual prominence, added clear label",
  },
];

const quotes = [
  {
    text: "This would save me so much time. I'm always juggling tabs and screenshots.",
    attr: "— Participant 2",
  },
  {
    text: "I love that I can organize by trip or event, not by category type.",
    attr: "— Participant 5",
  },
  {
    text: "The try-on looks real enough that I'd actually trust it before buying.",
    attr: "— Participant 4",
  },
];

const metrics = [
  { number: "100%", label: "Task Success", detail: "All participants completed core flows without assistance" },
  { number: "5/5", label: "Would Use", detail: "All participants said they'd use this for shopping decisions" },
  { number: "~2 min", label: "Avg Task Time", detail: "Quick completion indicates intuitive navigation" },
];

export default function Validation() {
  return (
    <section id="validation" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="18" title="Validation & Testing" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          I tested the prototype with 5 users to validate core assumptions and identify usability
          issues.
        </motion.p>

        {/* Testing Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: "👥", label: "Participants", value: "5", detail: "Online shoppers, 22–34" },
            { icon: "📱", label: "Method", value: "Remote", detail: "Prototype testing" },
            { icon: "✅", label: "Tasks", value: "3", detail: "Core user flows" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-[#2a1e36] rounded-xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30 text-center"
            >
              <span className="text-3xl block mb-3">{stat.icon}</span>
              <p className="text-xs text-[#7D767A] dark:text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
              <p className="font-clash text-3xl font-bold text-[#1D1A1C] dark:text-white mb-1">{stat.value}</p>
              <p className="text-xs text-[#5C5759] dark:text-gray-400">{stat.detail}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Validated */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/40 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-lg">
                ✓
              </div>
              <h3 className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white">
                Validated
              </h3>
            </div>

            <div className="space-y-3">
              {validated.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <div>
                    <p className="font-medium text-[#1D1A1C] dark:text-white text-sm">{v.title}</p>
                    <p className="text-sm text-[#5C5759] dark:text-gray-400">{v.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Improvements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-lg">
                ⚠
              </div>
              <h3 className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white">
                Improvements Made
              </h3>
            </div>

            <div className="space-y-5">
              {improvements.map((imp) => (
                <div key={imp.issue} className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5">⚠️</span>
                    <p className="text-sm text-[#1D1A1C] dark:text-white">{imp.issue}</p>
                  </div>
                  <div className="flex items-start gap-2 ml-5">
                    <span className="text-[#3D2B4C] dark:text-purple-400">→</span>
                    <p className="text-sm text-[#5C5759] dark:text-gray-400">{imp.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-6">
            What Participants Said
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((q) => (
              <div
                key={q.attr}
                className="bg-white dark:bg-[#2a1e36] rounded-xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30 border-l-4 border-l-[#3D2B4C]"
              >
                <p className="text-[#1D1A1C] dark:text-white italic leading-relaxed mb-3">"{q.text}"</p>
                <p className="text-sm text-[#7D767A] dark:text-gray-500">{q.attr}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#3D2B4C] text-white rounded-xl p-6"
            >
              <p className="font-clash text-4xl font-bold mb-1">{m.number}</p>
              <p className="font-semibold mb-2">{m.label}</p>
              <p className="text-purple-200 text-sm">{m.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
