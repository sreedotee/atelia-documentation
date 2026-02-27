"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const findings = [
  {
    badge: "5/5 Participants",
    title: "Scattered Saving",
    text: "All participants save items across 3+ locations: screenshots, Pinterest, Instagram saved, browser tabs, notes app.",
    quote: "I have screenshots everywhere in my camera roll. When I want to find something, I have no idea where it is.",
    attribution: "— Participant 3",
    insight: "No single place to organize items from different stores.",
    insightLabel: "Pain point",
  },
  {
    badge: "3/5 Participants",
    title: "Seeking Social Validation",
    text: "Before buying, participants send links to friends asking 'does this look good?' or 'should I get this?'",
    quote: "I always screenshot and send to my group chat like 'thoughts?' I can't tell if it will look good on me.",
    attribution: "— Participant 1",
    insight: "Can't visualize items on themselves, need external validation to feel confident.",
    insightLabel: "Pain point",
  },
  {
    badge: "4/5 Participants",
    title: "Organize by Occasion",
    text: "When asked how they organize saved items, participants mentioned events and occasions, not item categories.",
    quote: "I have different Pinterest boards for different things I'm shopping for - right now vacation and work stuff.",
    attribution: "— Participant 2",
    insight: "Users naturally think in contexts (vacation, work, date night), not types (tops, bottoms).",
    insightLabel: "Behavior",
  },
  {
    badge: "5/5 Participants",
    title: "Purchase Uncertainty",
    text: "All participants mentioned uncertainty about fit and appearance before buying online.",
    quote: "I order two sizes and return what doesn't fit. It's annoying but I have no other way to know.",
    attribution: "— Participant 4",
    insight: "Can't see items on their body before purchasing, leads to returns and hesitation.",
    insightLabel: "Pain point",
  },
];

export default function UserResearch() {
  return (
    <section id="user-research" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="07" title="User Research Findings" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-16 max-w-2xl">
          I interviewed 5 online shoppers (ages 22–34, shop 2+ times/month) to understand their
          current behavior and pain points.
        </motion.p>

        <div className="space-y-12">
          {findings.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#3D2B4C] text-white">
                  {f.badge}
                </span>
                <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white">
                  {f.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-4">{f.text}</p>
                  <div className="bg-[#3D2B4C]/5 dark:bg-[#3D2B4C]/20 rounded-xl p-5 border-l-4 border-[#3D2B4C]">
                    <span className="text-[#3D2B4C]/20 dark:text-purple-500/30 font-clash text-6xl leading-none block mb-1">"</span>
                    <p className="text-[#1D1A1C] dark:text-gray-200 text-lg italic leading-relaxed -mt-4">
                      {f.quote}
                    </p>
                    <p className="text-sm text-[#7D767A] dark:text-gray-500 mt-3">{f.attribution}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white dark:bg-[#2a1e36] rounded-xl p-5 border border-[#E8E5E6] dark:border-[#3D2B4C]/30 w-full">
                    <p className="text-xs font-bold text-[#3D2B4C] dark:text-purple-400 uppercase tracking-wider mb-2">
                      {f.insightLabel}
                    </p>
                    <p className="text-[#1D1A1C] dark:text-white leading-relaxed">{f.insight}</p>
                  </div>
                </div>
              </div>

              {i < findings.length - 1 && (
                <div className="mt-12 h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
