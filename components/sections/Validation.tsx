"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const tasks = [
  {
    name: "Save an item to a collection",
    success: "5/5 (100%)",
    time: "28 seconds",
    difficulty: "1.2/5 (very easy)",
    pct: 100,
    warning: false,
  },
  {
    name: "Generate an outfit using try-on",
    success: "5/5 (100%)",
    time: "1m 42s",
    difficulty: "2.4/5 (easy)",
    pct: 100,
    warning: false,
  },
  {
    name: "Find and save outfit from history",
    success: "4/5 (80%)",
    time: "45 seconds",
    difficulty: "2.8/5 (moderate)",
    note: "1 participant missed History tab",
    pct: 80,
    warning: true,
  },
];

const issues = [
  {
    priority: "P1 — HIGH PRIORITY",
    title: "History tab discoverability",
    description: "1/5 participants didn't notice the History section initially when looking for generated outfits.",
    fix: "Increased visual prominence of History tab, added clear label, included in onboarding tooltip sequence.",
  },
  {
    priority: "P1 — HIGH PRIORITY",
    title: "Photo upload privacy concern",
    description: "3/5 participants hesitated when asked to upload photos for model creation, citing privacy concerns.",
    fix: 'Added "Why we need this" privacy explainer during model setup. Clarified: photos processed locally, not shared, can be deleted anytime.',
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

const validated = [
  { title: "Paste-link flow", detail: "5/5 completed successfully" },
  { title: "Three-mode structure", detail: '"Makes sense, feels natural"' },
  { title: "Collections organization", detail: '"This is how I think about it"' },
  { title: "Try-on quality", detail: '"Looks realistic, I\'d trust this"' },
];

function SUSGauge({ score }: { score: number }) {
  const pct = (score / 100) * 100;
  const getGrade = (s: number) => {
    if (s >= 86) return { label: "Excellent", color: "text-green-700 dark:text-green-400" };
    if (s >= 71) return { label: "Good", color: "text-emerald-600 dark:text-emerald-400" };
    if (s >= 51) return { label: "OK", color: "text-amber-600 dark:text-amber-400" };
    return { label: "Poor", color: "text-red-600 dark:text-red-400" };
  };
  const grade = getGrade(score);

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#2a1e36] border border-[#E5E5E5] dark:border-[#3D2B4C]/30 p-8 max-w-lg">
      <div className="flex items-end gap-6 mb-6">
        <div>
          <p className="font-clash text-7xl font-bold text-[#1D1A1C] dark:text-white leading-none">
            {score}
          </p>
          <p className="text-sm text-[#737373] dark:text-gray-400 mt-1">out of 100</p>
        </div>
        <div className="pb-2">
          <span className={`font-clash text-2xl font-semibold ${grade.color}`}>
            Grade A
          </span>
          <p className={`text-sm mt-0.5 ${grade.color}`}>{grade.label} usability</p>
        </div>
      </div>

      {/* Scale bar */}
      <div className="relative h-4 bg-[#E5E5E5] dark:bg-[#1a1520] rounded-full overflow-hidden mb-3">
        <div className="absolute inset-0 flex">
          <div className="w-[50%] bg-red-200 dark:bg-red-900/40" />
          <div className="w-[20%] bg-amber-200 dark:bg-amber-900/40" />
          <div className="w-[15%] bg-emerald-200 dark:bg-emerald-900/40" />
          <div className="w-[15%] bg-green-300 dark:bg-green-800/40" />
        </div>
        <div
          className="absolute top-0 h-full w-1 bg-[#1D1A1C] dark:bg-white"
          style={{ left: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-[#A3A3A3] dark:text-gray-600">
        <span>0 Poor</span>
        <span>51 OK</span>
        <span>71 Good</span>
        <span>86 Excellent</span>
      </div>
    </div>
  );
}

export default function Validation() {
  return (
    <section id="validation" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="22" title="Validation & Testing" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-16 max-w-2xl">
          I tested the interactive prototype with 5 users to validate core assumptions and identify
          usability issues.
        </motion.p>

        {/* Testing Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: "👥", label: "Participants", value: "5", detail: "Ages 22–34, online shoppers" },
            { icon: "📱", label: "Per session", value: "30 min", detail: "Remote moderated (Zoom)" },
            { icon: "✓", label: "Task completion", value: "95%", detail: "Average across 3 tasks" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 p-8 text-center"
            >
              <span className="text-3xl block mb-4">{stat.icon}</span>
              <p className="font-clash text-4xl font-bold text-[#1D1A1C] dark:text-white leading-none mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-[#737373] dark:text-gray-400">{stat.label}</p>
              <p className="text-xs text-[#A3A3A3] dark:text-gray-600 mt-2">{stat.detail}</p>
            </div>
          ))}
        </motion.div>

        {/* Task Completion Rates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-8">
            Task Completion Rates
          </h3>

          {/* Funnel chart (inline) */}
          <div className="bg-[#FAFAFA] dark:bg-[#2a1e36] border border-[#E5E5E5] dark:border-[#3D2B4C]/30 p-8 mb-8">
            <div className="space-y-6">
              {tasks.map((task) => (
                <div key={task.name}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="text-sm font-medium text-[#1D1A1C] dark:text-white">{task.name}</span>
                    <span className={`text-sm font-medium ${task.warning ? "text-amber-600 dark:text-amber-400" : "text-[#1D1A1C] dark:text-white"}`}>
                      {task.success}
                    </span>
                  </div>
                  <div className="h-8 bg-[#E5E5E5] dark:bg-[#1a1520] rounded-sm overflow-hidden">
                    <div
                      className={`h-full rounded-sm flex items-center px-3 ${task.warning ? "bg-amber-400 dark:bg-amber-600" : "bg-[#3D2B4C] dark:bg-purple-600"}`}
                      style={{ width: `${task.pct}%` }}
                    >
                      <span className="text-xs font-medium text-white">{task.pct}%</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#737373] dark:text-gray-500 mt-1.5">
                    Avg time: {task.time} · Difficulty: {task.difficulty}
                    {task.note && ` · ⚠ ${task.note}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-[#E5E5E5] dark:bg-[#3D2B4C]/30 mb-16" />

        {/* SUS Score */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-4">
            System Usability Scale
          </h3>
          <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
            Participants completed the standard 10-question SUS assessment after testing all tasks.
          </p>
          <SUSGauge score={82} />
        </motion.div>

        <div className="h-px bg-[#E5E5E5] dark:bg-[#3D2B4C]/30 mb-16" />

        {/* Validated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-6">
            What Was Validated
          </h3>
          <div className="bg-[#FAFAFA] dark:bg-[#2a1e36] border border-[#E5E5E5] dark:border-[#3D2B4C]/30 p-6">
            <div className="space-y-4">
              {validated.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5 shrink-0">✓</span>
                  <div>
                    <p className="font-medium text-[#1D1A1C] dark:text-white text-sm">{v.title}</p>
                    <p className="text-sm text-[#5C5759] dark:text-gray-400">{v.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-[#E5E5E5] dark:bg-[#3D2B4C]/30 mb-16" />

        {/* Issues Found & Resolved */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-8">
            Issues Found &amp; Resolved
          </h3>

          <div className="space-y-12">
            {issues.map((issue) => (
              <div key={issue.title}>
                <div className="mb-5">
                  <span className="text-xs font-bold px-3 py-1.5 bg-[#F5F5F5] dark:bg-[#2a1e36] text-[#1D1A1C] dark:text-gray-300 tracking-wider uppercase">
                    {issue.priority}
                  </span>
                  <h4 className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white mt-4">
                    {issue.title}
                  </h4>
                </div>

                <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-4 max-w-2xl">
                  {issue.description}
                </p>

                <div className="bg-[#FAFAFA] dark:bg-[#2a1e36] border border-[#E5E5E5] dark:border-[#3D2B4C]/30 p-5 max-w-2xl">
                  <p className="text-xs font-bold text-[#A3A3A3] dark:text-gray-600 uppercase tracking-wider mb-2">
                    Fix Implemented
                  </p>
                  <p className="text-[#1D1A1C] dark:text-gray-200 leading-relaxed text-sm">
                    {issue.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-[#E5E5E5] dark:bg-[#3D2B4C]/30 mb-16" />

        {/* Participant Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-6">
            What Participants Said
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((q) => (
              <div
                key={q.attr}
                className="bg-white dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 border-l-4 border-l-[#3D2B4C] p-6"
              >
                <p className="text-[#1D1A1C] dark:text-white italic leading-relaxed mb-4">
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="text-sm text-[#7D767A] dark:text-gray-500">{q.attr}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
