"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";
import EmojiImage from "../EmojiImage";

const learnings = [
  {
    number: "1",
    title: "Strategic positioning matters more than features",
    text: "Starting with the technology (outfit visualization) forced me to ask where it creates value, not just how to implement it. This strategic framing shaped the entire product direction.",
  },
  {
    number: "2",
    title: "Mental models > features",
    text: "Early versions had many features but no clear structure. The three-mode framework (BEFORE / DURING / AFTER) created a clear mental model that made the product easier to understand.",
  },
  {
    number: "3",
    title: "Research validates (or invalidates) assumptions",
    text: "I initially planned to collect height, weight, and sizes during onboarding. User research showed this created unnecessary friction—photos alone were sufficient.",
  },
  {
    number: "4",
    title: "Context-appropriate patterns > forced consistency",
    text: "History uses a list while collections use a grid. Different contexts benefit from different patterns rather than forcing one design everywhere.",
  },
];

const improvements = [
  {
    icon: "refresh",
    title: "Test earlier and more often",
    text: "I built too many screens before validating core flows. Testing rough prototypes earlier would have surfaced usability issues sooner.",
  },
  {
    icon: "bar-chart",
    title: "Include the retailer perspective",
    text: "The project focused heavily on the consumer experience but didn't validate assumptions with retailers. Their needs (data, integration, ROI) would likely influence some decisions.",
  },
  {
    icon: "locked",
    title: "Explore privacy concerns earlier",
    text: "Photo-upload hesitation surfaced during testing. Earlier research into privacy expectations could have informed clearer trust messaging from the start.",
  },
  {
    icon: "triangular-ruler",
    title: "Simplify the scope",
    text: "The prototype includes 72 screens—more than necessary for a concept project. A smaller MVP would allow faster iteration and quicker learning.",
  },
];

const nextSteps = [
  {
    phase: "Phase 1 — Validation",
    title: "Quantitative Testing",
    tasks: [
      "Track try-on usage and item save rates",
      "A/B test shopping flows with vs. without try-on",
      "Measure return rates for purchases made after try-on",
    ],
  },
  {
    phase: "Phase 2 — Expansion",
    title: "Feature Development",
    tasks: [
      "Multiple avatars (family or friends)",
      "Style recommendations based on try-on history",
      "Social sharing for outfit feedback",
    ],
  },
  {
    phase: "Phase 3 — Business",
    title: "Monetization & Partnerships",
    tasks: [
      "Retail affiliate partnerships",
      "White-label try-on tools for fashion retailers",
      "Premium tier with higher-quality AI models",
    ],
  },
];

export default function Reflection() {
  return (
    <section id="reflection" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="17" title="Reflection & Learnings" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Learnings */}
          <div>
            <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-8">
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
                  <span className="font-clash text-5xl font-bold text-[#3D2B4C]/15 shrink-0 leading-none">
                    {l.number}
                  </span>
                  <div>
                    <h4 className="font-clash text-sm md:text-base lg:text-lg font-medium text-[#1D1A1C] mb-2">
                      {l.title}
                    </h4>
                    <p className="text-[#5C5759] leading-relaxed">{l.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What I'd do differently */}
          <div>
            <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-8">
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
                  className="flex gap-4 p-4 rounded-xl bg-[#FAF9FA] border border-[#E8E5E6]"
                >
                  <EmojiImage name={imp.icon} size={24} />
                  <div>
                    <h4 className="font-medium text-[#1D1A1C] mb-1">{imp.title}</h4>
                    <p className="text-sm text-[#5C5759] leading-relaxed">{imp.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-8">
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
                className="bg-[#FAF9FA] border border-[#E8E5E6] rounded-xl p-6"
              >
                <p className="text-xs font-medium text-[#3D2B4C] uppercase tracking-wide mb-2">
                  {ns.phase}
                </p>
                <h4 className="font-clash text-sm md:text-base lg:text-lg font-medium text-[#1D1A1C] mb-4">
                  {ns.title}
                </h4>
                <ul className="space-y-2">
                  {ns.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-[#5C5759]">
                      <span className="text-[#3D2B4C] mt-0.5">•</span>
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
