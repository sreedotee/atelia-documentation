"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const categories = [
  {
    label: "Technical",
    items: [
      {
        title: "AI output quality depends on input photos.",
        body: "If users upload blurry or poorly lit photos, generated outfits will degrade significantly. Better models cannot compensate for poor inputs.",
        implication:
          "Model setup includes clear photo guidance with examples of good vs bad lighting, angles, and poses.",
      },
      {
        title: "Generation latency (4–7 seconds).",
        body: "AI processing takes time, and instant results would require significantly more expensive infrastructure.",
        implication:
          "Loading states communicate progress and anticipation with descriptive messaging (\u201cGenerating your look\u2026\u201d) rather than appearing broken.",
      },
      {
        title: "Retailer data is unreliable.",
        body: "Some retailers block scraping or expose inconsistent metadata, which can cause link parsing to fail.",
        implication:
          "Provide a manual upload fallback and clear error messaging when parsing fails.",
      },
      {
        title: "Retail inventory constantly changes.",
        body: "Items saved today may go out of stock or links may break later.",
        implication:
          "Cache item images and details locally and mark older items as \u201cmay no longer be available\u201d.",
      },
    ],
  },
  {
    label: "User Experience",
    items: [
      {
        title: "Privacy concerns around body photos.",
        body: "Creating a personal AI model requires multiple photos, which many users may hesitate to upload.",
        implication:
          "Model creation happens on-demand when users first attempt Try-On, with clear messaging explaining how photos are processed and stored.",
      },
      {
        title: "Outfit visualization results can feel uncertain.",
        body: "Users may doubt whether generated outfits accurately represent how clothes will look in real life.",
        implication:
          "Set clear expectations: try-on previews show styling possibilities rather than guaranteed fit.",
      },
    ],
  },
  {
    label: "Business",
    items: [
      {
        title: "AI generation has real infrastructure costs.",
        body: "Unlimited generations would make the product financially unsustainable.",
        implication:
          "Introduce a credit-based system that balances user exploration with infrastructure cost.",
      },
      {
        title: "Atelia is a decision tool, not a retailer.",
        body: "Handling payments, fulfillment, and customer support would introduce major operational complexity.",
        implication:
          "Deep-link users to retailer websites for purchase instead of building in-app checkout.",
      },
    ],
  },
];

export default function Constraints() {
  return (
    <section id="constraints" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="16" title="Constraints" subtitle="Design Within Reality" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] leading-relaxed mb-20 max-w-2xl"
        >
          Every design decision was shaped by real technical, user, and business constraints.
          These weren&apos;t limitations—they were guardrails that led to more resilient solutions.
        </motion.p>

        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={ci < categories.length - 1 ? "mb-16" : "mb-0"}
          >
            {/* Category label */}
            <p className="text-xs font-medium text-[#3D2B4C] uppercase tracking-widest mb-8">
              {cat.label}
            </p>

            {/* Constraint items */}
            <div className="max-w-2xl">
              {cat.items.map((item, ii) => (
                <div
                  key={item.title}
                  className={`py-6 ${
                    ii < cat.items.length - 1
                      ? "border-b border-[#E8E5E6]"
                      : ""
                  }`}
                >
                  <p className="text-[#1D1A1C] leading-relaxed mb-1">
                    <span className="font-medium">{item.title}</span>{" "}
                    {item.body}
                  </p>
                  <p className="text-sm text-[#7D767A] leading-relaxed mt-2">
                    <span className="font-medium">→</span> {item.implication}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider between categories */}
            {ci < categories.length - 1 && (
              <div className="h-px bg-[#E8E5E6] mt-16" />
            )}
          </motion.div>
        ))}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 border border-[#E8E5E6] max-w-2xl"
        >
          <p className="font-clash text-sm md:text-base lg:text-lg font-medium text-[#1D1A1C] mb-3">
            Why Constraints Matter
          </p>
          <p className="text-sm text-[#5C5759] leading-relaxed">
            These constraints weren&apos;t obstacles to work around—they shaped better decisions.
            Privacy concerns led to on-demand model setup. AI latency informed loading states.
            Infrastructure costs informed the credit system. Designing within real constraints
            produces more resilient products than ignoring them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
