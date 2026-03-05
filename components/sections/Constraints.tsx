"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const categories = [
  {
    label: "Technical",
    items: [
      {
        title: "AI quality depends on input photos.",
        body: "If users upload blurry or poorly lit photos, generated outfits will be poor quality. Better models can't fix bad inputs.",
        implication:
          "Provide clear photo guidelines during model setup with examples of good vs bad lighting, angles, and poses.",
      },
      {
        title: "Generation latency (4–7 seconds).",
        body: "AI processing takes time. Instant results aren't possible without expensive infrastructure.",
        implication:
          "Loading states are designed to feel intentional, with progress indicators and anticipatory messaging (\u201cGenerating your look\u2026\u201d).",
      },
      {
        title: "Link parsing isn't always reliable.",
        body: "Some retailers block scraping or expose poor metadata.",
        implication:
          "Provide a manual upload fallback and clear error messaging when parsing fails.",
      },
      {
        title: "Retailer inventory changes constantly.",
        body: "Items saved today may go out of stock later.",
        implication:
          "Cache item images and details locally and show \u201cmay no longer be available\u201d when links break.",
      },
      {
        title: "No direct in-app purchasing.",
        body: "Handling payments, fulfillment, and support would create unnecessary operational complexity.",
        implication:
          "Deep-link to retailer sites for purchase and position Atelia as a decision tool rather than a shopping platform.",
      },
    ],
  },
  {
    label: "User Experience",
    items: [
      {
        title: "Privacy concerns around body photos.",
        body: "Creating a model requires multiple photos, which many users may hesitate to upload.",
        implication:
          "Model creation happens on demand, with clear messaging about how photos are processed and stored.",
      },
      {
        title: "Paste-link saving is unfamiliar behavior.",
        body: "Users must learn a new flow: copy link → open app → paste → save.",
        implication:
          "Onboarding demonstrates the flow with tooltips and a short example video.",
      },
      {
        title: "Skepticism about AI try-on accuracy.",
        body: "Users may doubt whether generated outfits reflect reality.",
        implication:
          "Set expectations clearly: previews show styling possibilities, not guaranteed fit.",
      },
      {
        title: "Abuse and spam risks.",
        body: "Unlimited generation could lead to automated abuse.",
        implication:
          "Credit limits and rate-limiting reduce spam while keeping the free tier usable.",
      },
      {
        title: "AI generation can fail.",
        body: "Model errors or incompatible inputs occasionally occur.",
        implication:
          "Failed generations never charge credits and provide clear retry messaging.",
      },
    ],
  },
  {
    label: "Business",
    items: [
      {
        title: "Retailer relationships matter.",
        body: "Some brands may view third-party tools as competition.",
        implication:
          "Position Atelia as a conversion tool that reduces returns and increases purchase confidence.",
      },
      {
        title: "Success metrics aren't obvious initially.",
        body: "It's unclear whether success means retention, purchases, or try-on usage.",
        implication:
          "Instrument key behaviors early and optimize based on real usage patterns.",
      },
      {
        title: "Monetization must balance growth and cost.",
        body: "AI generation has real infrastructure costs.",
        implication:
          "Start with conservative credit limits and iterate based on conversion and retention data.",
      },
      {
        title: "Customer support must scale efficiently.",
        body: "AI products often generate questions around quality, privacy, and credits.",
        implication:
          "Anticipate common issues through in-product guidance, FAQs, and self-service help.",
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
