"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const learnings = [
  {
    number: "1",
    title: "Strategic positioning matters more than features",
    text: "Starting with technology (AI try-on) forced me to think about where it creates value, not just how to implement it. This strategic discovery process was more valuable than any individual design decision.",
  },
  {
    number: "2",
    title: "Mental models > features",
    text: "Early versions had all the features but no clear structure. Adding the three-mode framework (BEFORE/DURING/AFTER) made everything click. Users don't need features—they need coherent mental models.",
  },
  {
    number: "3",
    title: "Research validates (or invalidates) assumptions",
    text: "Originally planned to collect height, weight, and sizes during onboarding. User research showed this was unnecessary friction. Photos alone are sufficient. This saved weeks of work on unused features.",
  },
  {
    number: "4",
    title: "Context-appropriate patterns > consistency for its own sake",
    text: "History list vs. Collections grid felt inconsistent at first, but serves different user needs better than forcing one pattern. Different contexts deserve different treatments.",
  },
];

const improvements = [
  {
    icon: "🔄",
    title: "Test earlier and more often",
    text: "Built too many screens before validating core flows. Should have tested rough prototypes at 30% completion, not 80%. Would have caught usability issues sooner.",
  },
  {
    icon: "📊",
    title: "Include retailer perspective",
    text: "Focused heavily on consumer experience but didn't validate with actual retailers. Their needs (data, integration, ROI) would have shaped some decisions differently.",
  },
  {
    icon: "🔐",
    title: "Deeper privacy exploration",
    text: "Photo upload privacy concerns surfaced in testing. Should have researched this earlier and designed more robust privacy communication from the start.",
  },
  {
    icon: "📐",
    title: "Simplify scope",
    text: "72 screens is comprehensive but overkill for a concept project. Could have launched with 40 screens and iterated. Perfect is the enemy of done.",
  },
];

const nextSteps = [
  {
    phase: "Phase 1: Validation",
    title: "Quantitative Testing",
    tasks: [
      "Track save rates and generation frequency",
      "Measure purchase correlation (did try-on increase conversion?)",
      "A/B test: with try-on vs. without",
      "Measure return reduction for users who tried on",
    ],
  },
  {
    phase: "Phase 2: Expansion",
    title: "Feature Development",
    tasks: [
      "Multiple avatars (family/friends feature)",
      "Social validation (share outfits for feedback)",
      "Style recommendations based on try-on history",
      "Outfit scheduling (power user feature)",
    ],
  },
  {
    phase: "Phase 3: Business",
    title: "Monetization & Partnerships",
    tasks: [
      "Retailer partnerships (affiliate links)",
      "B2B tool for retailers (reduce returns, increase sales)",
      "Premium tier (unlimited collections, advanced try-on)",
      "API for third-party integrations",
    ],
  },
];

export default function Reflection() {
  return (
    <section id="reflection" className="py-28 bg-white dark:bg-[#1e1530]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="24" title="Reflection & Learnings" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Learnings */}
          <div>
            <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-8">
              What I Learned
            </h3>
            <div className="space-y-8">
              {learnings.map((l, i) => (
                <motion.div
                  key={l.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <span className="font-clash text-5xl font-bold text-[#3D2B4C]/15 dark:text-purple-500/20 shrink-0 leading-none">
                    {l.number}
                  </span>
                  <div>
                    <h4 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-2">
                      {l.title}
                    </h4>
                    <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed">{l.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What I'd do differently */}
          <div>
            <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-8">
              What I'd Do Differently
            </h3>
            <div className="space-y-6">
              {improvements.map((imp, i) => (
                <motion.div
                  key={imp.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-xl bg-[#FAF9FA] dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30"
                >
                  <span className="text-2xl shrink-0">{imp.icon}</span>
                  <div>
                    <h4 className="font-semibold text-[#1D1A1C] dark:text-white mb-1">{imp.title}</h4>
                    <p className="text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed">{imp.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-8">
            If This Were Real: Next Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps.map((ns, i) => (
              <motion.div
                key={ns.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#FAF9FA] dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 rounded-xl p-6"
              >
                <p className="text-xs font-bold text-[#3D2B4C] dark:text-purple-400 uppercase tracking-wide mb-2">
                  {ns.phase}
                </p>
                <h4 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-4">
                  {ns.title}
                </h4>
                <ul className="space-y-2">
                  {ns.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-[#5C5759] dark:text-gray-300">
                      <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5">•</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
