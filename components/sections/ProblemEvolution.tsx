"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

function ImagePlaceholder({
  height,
  description,
  filename,
}: {
  height: number;
  description: string;
  filename: string;
}) {
  return (
    <div
      className="w-full rounded-xl border border-[#E8E5E6] dark:border-[#3D2B4C]/30 bg-[#F7F5F8] dark:bg-[#1e1628] flex flex-col items-center justify-center p-8 gap-2"
      style={{ height }}
    >
      <p className="text-[10px] font-medium tracking-widest text-[#B0A5B8] dark:text-gray-600 uppercase">
        Image Placeholder
      </p>
      <p className="text-sm text-[#C8C2CC] dark:text-gray-700 text-center max-w-md leading-relaxed">
        {description}
      </p>
      <p className="text-[10px] font-mono text-[#D8D3DB] dark:text-gray-800 mt-1">
        {filename}
      </p>
    </div>
  );
}

const shoppingAppealing = [
  "Complete control over experience",
  "Direct revenue (not just affiliate)",
  "Can optimize entire funnel for try-on",
  "Reference: Myntra, Amazon Fashion",
];

const shoppingFailed = [
  "Can't compete on inventory/selection",
  "Can't compete on price or shipping",
  "Massive operational complexity (payments, fulfillment)",
  "Limits users to our catalog only",
  "Wrong problem—users already know WHERE to shop",
];

const researchQuestions = [
  "Do people shop by occasion or item type?",
  "At what part of the shopping process does try-on add value?",
  "What are reactions after seeing a generated outfit? (yay, meh, nay)",
  "Do people want items they didn't like in their wardrobe?",
  "What do people want to do with outfits after generation? (buy immediately, save for later, delete)",
  'Should "meh" outfits go to history or be deleted?',
];

export default function ProblemEvolution() {
  return (
    <section id="problem-evolution" className="py-28 bg-white dark:bg-[#13101a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="11" title="Problem Evolution" subtitle="Finding the Right Problem" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-20 max-w-2xl"
        >
          The brief was simple: &ldquo;AI virtual try-on.&rdquo; But the real challenge was
          identifying where this technology creates meaningful value. This required exploring the
          input problem, user behavior, and market positioning.
        </motion.p>

        {/* ── THE INPUT PROBLEM ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-4">
            The Input Problem
          </h3>
          <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
            How do users seamlessly get items from any website into the AI generator? Initial
            assumption was manual upload, which proved too slow and created friction at the core
            interaction.
          </p>

          <div className="max-w-3xl mb-4">
            <ImagePlaceholder
              height={380}
              description='"The Input Problem" diagram — Flow: Input → Bottleneck → Generator → Output. Yellow sticky note: "bottleneck". Green circle: "experimented with broken link inputs". Annotations visible.'
              filename="/images/problem-input-bottleneck.png"
            />
          </div>
          <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mb-10">
            Early problem definition: identifying the input bottleneck
          </p>

          <div className="bg-[#3D2B4C]/5 dark:bg-[#3D2B4C]/20 rounded-xl p-5 border-l-4 border-[#3D2B4C] dark:border-purple-500 max-w-2xl">
            <p className="text-xs font-bold text-[#3D2B4C] dark:text-purple-400 uppercase tracking-wider mb-2">
              Breakthrough
            </p>
            <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed text-sm">
              Instead of manual upload, automatic link parsing became the solution. This reduced
              save time from ~60 seconds to ~5 seconds and aligned with existing user behavior
              (sharing links with friends).
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mb-20" />

        {/* ── SHOPPING PLATFORM VS UNIVERSAL TOOL ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-4">
            Shopping Platform vs Universal Tool
          </h3>
          <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Early explorations wrestled with a fundamental question: Should this be a shopping
            platform with try-on built in (like Amazon with AR), or a universal tool that works
            with any retailer?
          </p>

          <div className="max-w-4xl mb-4">
            <ImagePlaceholder
              height={420}
              description="Shopping platform flow diagram — Shows: Input problem → weak link → Shopify site. Decision tree: buy outfit vs no. Cart icon with issues listed. Hand-drawn diagram style."
              filename="/images/shopping-platform-approach.png"
            />
          </div>
          <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mb-10">
            Version 1: In-app shopping platform approach (rejected)
          </p>

          {/* Two-column comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mb-12">
            <div className="bg-[#FAF9FA] dark:bg-[#1e1628] rounded-xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
              <p className="text-xs font-bold text-[#7D767A] dark:text-gray-500 uppercase tracking-wider mb-4">
                What Seemed Appealing
              </p>
              <ul className="space-y-2">
                {shoppingAppealing.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed"
                  >
                    <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FAF9FA] dark:bg-[#1e1628] rounded-xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
              <p className="text-xs font-bold text-[#7D767A] dark:text-gray-500 uppercase tracking-wider mb-4">
                Why It Failed
              </p>
              <ul className="space-y-2">
                {shoppingFailed.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed"
                  >
                    <span className="text-[#7D767A] dark:text-gray-600 mt-0.5 shrink-0">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pivot box */}
          <div className="border-2 border-[#1D1A1C] dark:border-[#ede8f7]/30 rounded-2xl p-8 max-w-2xl">
            <p className="text-[10px] font-bold text-[#7D767A] dark:text-gray-500 uppercase tracking-[0.1em] mb-3">
              The Pivot
            </p>
            <p className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white leading-snug mb-3">
              Instead of being a retailer WITH try-on, be a try-on tool that works with ANY
              retailer.
            </p>
            <p className="text-sm text-[#5C5759] dark:text-gray-400 leading-relaxed">
              This single decision unlocked the paste-link approach and became the foundation of
              the entire product.
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mb-20" />

        {/* ── RESEARCH QUESTIONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-4">
            Questions That Needed Answers
          </h3>
          <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Before designing, I needed to validate assumptions about user behavior, organization
            patterns, and where try-on adds value in the shopping journey.
          </p>

          <div className="max-w-2xl">
            {researchQuestions.map((q, i) => (
              <div
                key={i}
                className={`py-5 ${
                  i < researchQuestions.length - 1
                    ? "border-b border-[#E8E5E6] dark:border-[#3D2B4C]/30"
                    : ""
                }`}
              >
                <p className="text-[#1D1A1C] dark:text-gray-200 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mt-8 max-w-2xl leading-relaxed">
            These questions shaped the interview script, card sorting tasks, and ultimately
            validated the occasion-based organization model.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
