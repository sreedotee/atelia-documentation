"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

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
    <section id="problem-evolution" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="12" title="Problem Evolution" subtitle="Finding the Right Problem" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] leading-relaxed mb-20 max-w-2xl"
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
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-4">
            The Input Problem
          </h3>
          <p className="text-[#5C5759] leading-relaxed mb-8 max-w-2xl">
            How do users seamlessly get items from any website into the AI generator? Initial
            assumption was manual upload, which proved too slow and created friction at the core
            interaction.
          </p>

          <div className="max-w-3xl mb-4">
            <img
              src="/images/input-problem-fixed.svg"
              alt="The Input Problem diagram — flow showing input bottleneck through to generator output"
              className="w-full rounded-xl"
            />
          </div>
          <p className="text-sm text-[#7D767A] italic mb-10">
            Early problem definition: identifying the input bottleneck
          </p>

          <div className="bg-[#3D2B4C]/5 rounded-xl p-5 border-l-4 border-[#3D2B4C] max-w-2xl">
            <p className="text-xs font-medium text-[#3D2B4C] uppercase tracking-wider mb-2">
              Breakthrough
            </p>
            <p className="text-[#5C5759] leading-relaxed text-sm">
              Instead of manual upload, automatic link parsing became the solution. This reduced
              save time from ~60 seconds to ~5 seconds and aligned with existing user behavior
              (sharing links with friends).
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] mb-20" />

        {/* ── RESEARCH QUESTIONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-4">
            Questions That Needed Answers
          </h3>
          <p className="text-[#5C5759] leading-relaxed mb-8 max-w-2xl">
            Before designing, I needed to validate assumptions about user behavior, organization
            patterns, and where try-on adds value in the shopping journey.
          </p>

          <div className="max-w-2xl">
            {researchQuestions.map((q, i) => (
              <div
                key={i}
                className={`py-5 ${
                  i < researchQuestions.length - 1
                    ? "border-b border-[#E8E5E6]"
                    : ""
                }`}
              >
                <p className="text-[#1D1A1C] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#7D767A] italic mt-8 max-w-2xl leading-relaxed">
            These questions shaped the interview script, card sorting tasks, and ultimately
            validated the occasion-based organization model.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
