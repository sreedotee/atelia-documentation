"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";
import EmojiImage from "../EmojiImage";

const approaches = [
  {
    number: "01",
    title: "Designer Fashion Access",
    useCase: "Aspirational/social",
    example: "Try on luxury brands virtually",
    userNeed: "Access to inaccessible fashion",
    gap: "Not solving purchase problems",
    apps: ["Drest", "DressX"],
  },
  {
    number: "02",
    title: "Outfit Planning",
    useCase: "Organization/productivity",
    example: "Schedule outfits on calendar",
    userNeed: "Plan outfits in advance",
    gap: "Niche audience, power users only",
    apps: ["Stylebook", "Smart Closet"],
  },
  {
    number: "03",
    title: "Shopping (Limited)",
    useCase: "Pre-purchase visualization",
    example: "Retailer-specific try-on",
    userNeed: "Reduce purchase uncertainty",
    gap: "Single-store only, not universal",
    apps: ["ASOS See My Fit", "Zara AR"],
  },
];


export default function CompetitiveLandscape() {
  return (
    <section id="competitive-landscape" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="" title="Competitive Landscape" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-12 max-w-2xl">
          I analyzed 5 existing virtual try-on and fashion organization apps to identify market
          gaps and opportunities.
        </motion.p>

        {/* Approaches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {approaches.map((a, i) => (
            <motion.div
              key={a.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#FAF9FA] border border-[#E8E5E6] rounded-2xl p-7 hover:shadow-lg transition-shadow"
            >
              <p className="font-clash text-6xl font-bold text-[#3D2B4C]/10 mb-2">
                {a.number}
              </p>
              <h3 className="font-clash text-base md:text-lg lg:text-xl font-medium text-[#1D1A1C] mb-5">
                {a.title}
              </h3>

              <div className="space-y-3 mb-5">
                {[
                  { label: "Use case", value: a.useCase },
                  { label: "Example", value: a.example },
                  { label: "User need", value: a.userNeed },
                  { label: "Gap", value: a.gap },
                ].map((row) => (
                  <div key={row.label}>
                    <p className="text-xs text-[#7D767A] uppercase tracking-wide mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-sm text-[#1D1A1C]">{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {a.apps.map((app) => (
                  <span
                    key={app}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#3D2B4C]/10 text-[#3D2B4C]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gap insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#F5EDD8] border border-[#D4B880] rounded-2xl p-6 mb-16 flex items-center gap-4"
        >
          <EmojiImage name="lightbulb" size={30} alt="lightbulb" />
          <div>
            <h4 className="font-clash text-base md:text-lg lg:text-xl font-medium text-[#1D1A1C] mb-2">
              The Gap
            </h4>
            <p className="text-[#5C5759]">
              No app combines universal item saving (any store) + AI virtual try-on + flexible
              organization (by occasion).
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
