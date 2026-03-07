"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import EmojiImage from "../EmojiImage";
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
    if (s >= 86) return { label: "Excellent", color: "text-[#2E6A54]" };
    if (s >= 71) return { label: "Good", color: "text-[#3D8A72]" };
    if (s >= 51) return { label: "OK", color: "text-[#8A6030]" };
    return { label: "Poor", color: "text-[#9E3D58]" };
  };
  const grade = getGrade(score);

  return (
    <div className="rounded-xl bg-[#FAF9FA] border border-[#E8E5E6] p-8 max-w-lg">
      <div className="flex items-end gap-6 mb-6">
        <div>
          <p className="font-clash text-7xl font-bold text-[#1D1A1C] leading-none">
            {score}
          </p>
          <p className="text-sm text-[#7D767A] mt-1">out of 100</p>
        </div>
        <div className="pb-2">
          <span className={`font-clash text-lg md:text-xl lg:text-2xl font-medium ${grade.color}`}>
            Grade A
          </span>
          <p className={`text-sm mt-0.5 ${grade.color}`}>{grade.label} usability</p>
        </div>
      </div>

      {/* Scale bar */}
      <div className="relative h-4 bg-[#E8E5E6] rounded-full overflow-hidden mb-3">
        <div className="absolute inset-0 flex">
          <div className="w-[50%] bg-[#D9A0B8]" />
          <div className="w-[20%] bg-[#D4B880]" />
          <div className="w-[15%] bg-[#8CC4B0]" />
          <div className="w-[15%] bg-[#3D8A72]" />
        </div>
        <div
          className="absolute top-0 h-full w-1 bg-[#1D1A1C]"
          style={{ left: `${pct}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-[#7D767A]">
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
    <section id="validation" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="14" title="Validation & Testing" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-16 max-w-2xl">
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
            { icon: "person", label: "Participants", value: "5", detail: "Ages 22–34, online shoppers" },
            { icon: "mobile-phone", label: "Per session", value: "30 min", detail: "Remote moderated (Zoom)" },
            { icon: null, symbol: "✓", label: "Task completion", value: "95%", detail: "Average across 3 tasks" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white border border-[#E8E5E6] p-8 text-center"
            >
              <span className="flex justify-center mb-4">
                {stat.icon ? <EmojiImage name={stat.icon} size={32} /> : <span className="text-3xl">{stat.symbol}</span>}
              </span>
              <p className="font-clash text-4xl font-bold text-[#1D1A1C] leading-none mb-3">
                {stat.value}
              </p>
              <p className="text-sm text-[#7D767A]">{stat.label}</p>
              <p className="text-xs text-[#7D767A] mt-2">{stat.detail}</p>
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
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-8">
            Task Completion Rates
          </h3>

          {/* Funnel chart (inline) */}
          <div className="rounded-xl bg-[#FAF9FA] border border-[#E8E5E6] p-8 mb-8">
            <div className="space-y-6">
              {tasks.map((task) => (
                <div key={task.name}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="text-sm font-medium text-[#1D1A1C]">{task.name}</span>
                    <span className={`text-sm font-medium ${task.warning ? "text-[#8A6030]" : "text-[#1D1A1C]"}`}>
                      {task.success}
                    </span>
                  </div>
                  <div className="h-8 bg-[#E8E5E6] rounded-sm overflow-hidden">
                    <div
                      className={`h-full rounded-sm flex items-center px-3 ${task.warning ? "bg-[#C8984A]" : "bg-[#3D2B4C]"}`}
                      style={{ width: `${task.pct}%` }}
                    >
                      <span className="text-xs font-medium text-white">{task.pct}%</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#7D767A] mt-1.5">
                    Avg time: {task.time} · Difficulty: {task.difficulty}
                    {task.note && ` · ⚠ ${task.note}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] mb-16" />

        {/* SUS Score */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-4">
            System Usability Scale
          </h3>
          <p className="text-[#5C5759] leading-relaxed mb-8 max-w-xl">
            Participants completed the standard 10-question SUS assessment after testing all tasks.
          </p>
          <SUSGauge score={82} />
        </motion.div>

        <div className="h-px bg-[#E8E5E6] mb-16" />

        {/* Validated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-6">
            What Was Validated
          </h3>
          <div className="rounded-xl bg-[#FAF9FA] border border-[#E8E5E6] p-6">
            <div className="space-y-4">
              {validated.map((v) => (
                <div key={v.title} className="flex items-start gap-3">
                  <span className="text-[#3D2B4C] mt-0.5 shrink-0">✓</span>
                  <div>
                    <p className="font-medium text-[#1D1A1C] text-sm">{v.title}</p>
                    <p className="text-sm text-[#5C5759]">{v.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] mb-16" />

        {/* Issues Found & Resolved */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-8">
            Issues Found &amp; Resolved
          </h3>

          <div className="space-y-12">
            {issues.map((issue) => (
              <div key={issue.title}>
                <div className="mb-5">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#3D2B4C]/10 text-[#3D2B4C] tracking-wider uppercase">
                    {issue.priority}
                  </span>
                  <h4 className="font-clash text-base md:text-lg lg:text-xl font-medium text-[#1D1A1C] mt-4">
                    {issue.title}
                  </h4>
                </div>

                <p className="text-[#5C5759] leading-relaxed mb-4 max-w-2xl">
                  {issue.description}
                </p>

                <div className="rounded-xl bg-[#FAF9FA] border border-[#E8E5E6] p-5 max-w-2xl">
                  <p className="text-xs font-medium text-[#3D2B4C] uppercase tracking-wider mb-2">
                    Fix Implemented
                  </p>
                  <p className="text-[#1D1A1C] leading-relaxed text-sm">
                    {issue.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] mb-16" />

        {/* Participant Quotes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-6">
            What Participants Said
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((q) => (
              <div
                key={q.attr}
                className="bg-white border border-[#E8E5E6] border-l-4 border-l-[#3D2B4C] p-6"
              >
                <p className="text-[#1D1A1C] italic leading-relaxed mb-4">
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className="text-sm text-[#7D767A]">{q.attr}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
