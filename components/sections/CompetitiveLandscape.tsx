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
    illustrationSrc: "/images/competitive/designer-fashion.svg",
    emoji: "dress",
  },
  {
    number: "02",
    title: "Outfit Planning",
    useCase: "Organization/productivity",
    example: "Schedule outfits on calendar",
    userNeed: "Plan outfits in advance",
    gap: "Niche audience, power users only",
    apps: ["Stylebook", "Smart Closet"],
    illustrationSrc: "/images/competitive/organising.svg",
    emoji: "high-heel",
  },
  {
    number: "03",
    title: "Shopping (Limited)",
    useCase: "Pre-purchase visualization",
    example: "Retailer-specific try-on",
    userNeed: "Reduce purchase uncertainty",
    gap: "Single-store only, not universal",
    apps: ["ASOS See My Fit", "Zara AR"],
    illustrationSrc: "/images/competitive/shopping.svg",
    emoji: "handbag",
  },
];

const rows = [
  { key: "useCase", label: "Use Case" },
  { key: "example", label: "Example" },
  { key: "userNeed", label: "User Need" },
  { key: "gap", label: "Gap" },
] as const;

export default function CompetitiveLandscape() {
  return (
    <section id="competitive-landscape" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="" title="Competitive Landscape" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-12 max-w-2xl">
          I analyzed 5 existing virtual try-on and fashion organization apps to identify market
          gaps and opportunities.
        </motion.p>
      </div>

      {/* Cards — slightly wider than the 1200px content container */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {approaches.map((a, i) => (
          <motion.div
            key={a.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-[#E8E5E6] rounded-2xl p-7 flex overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Left: content */}
            <div className="flex-1 min-w-0 flex flex-col">
              {/* Number + title */}
              <div className="flex items-start gap-3 mb-6">
                <span className="font-clash text-[64px] font-bold text-[#3D2B4C]/10 leading-none flex-shrink-0">
                  {a.number}
                </span>
                <h3 className="font-clash text-[17px] font-semibold text-[#1D1A1C] leading-tight mt-2.5">
                  {a.title}
                </h3>
              </div>

              {/* Label/value rows */}
              <div className="space-y-3 mb-5 flex-1">
                {rows.map((row) => (
                  <div key={row.key}>
                    <p className="text-[10px] text-[#9C9599] uppercase tracking-widest mb-0.5 font-medium">
                      {row.label}
                    </p>
                    <p className="text-[13px] text-[#1D1A1C] leading-snug">{a[row.key]}</p>
                  </div>
                ))}
              </div>

              {/* App tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {a.apps.map((app) => (
                  <span
                    key={app}
                    className="text-[11px] px-3 py-1 rounded-full bg-[#F0ECF4] text-[#5C4A6E] font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: custom illustration (falls back to emoji until uploaded) */}
            <div className="flex-shrink-0 w-36 flex items-center justify-center pl-2">
              <img
                src={a.illustrationSrc}
                alt={a.title}
                className="w-full h-auto object-contain max-h-52"
                onError={(e) => {
                  // Swap to emoji fallback if illustration isn't uploaded yet
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span style={{ display: "none" }}>
                <EmojiImage name={a.emoji} size={100} alt={a.title} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
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
