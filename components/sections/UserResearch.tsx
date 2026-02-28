"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const findings = [
  {
    badge: "5/5 PARTICIPANTS (100%)",
    title: "Scattered Saving",
    text: "All participants save items across multiple locations. Average locations used: 4.2 per person. Time spent finding saved items: 3–5 minutes average.",
    quote: "I have screenshots everywhere in my camera roll. When I want to find something, I have no idea where it is.",
    attribution: "— Participant 3",
    insight: "No single place to organize items from different stores.",
    insightLabel: "Pain point",
    chartLabel: "Where Users Save Items",
    chartData: [
      { label: "Screenshots", pct: 100 },
      { label: "Instagram Save", pct: 80 },
      { label: "Pinterest", pct: 60 },
      { label: "Browser tabs", pct: 40 },
      { label: "Notes app", pct: 20 },
    ],
  },
  {
    badge: "3/5 PARTICIPANTS (60%)",
    title: "Seeking Social Validation",
    text: "Before buying, participants send links to friends asking 'does this look good?' Average friends asked: 2–3 people. Response time: 2–6 hours (often too slow).",
    quote: "I always screenshot and send to my group chat like 'thoughts?' I can't tell if it will look good on me.",
    attribution: "— Participant 1",
    insight: "Can't visualize items on themselves, need external validation to feel confident.",
    insightLabel: "Pain point",
    chartLabel: null,
    chartData: null,
  },
  {
    badge: "4/5 PARTICIPANTS (80%)",
    title: "Organize by Occasion",
    text: "When asked to sort 20 clothing items, 4/5 participants (80%) naturally organized by occasion, not item type. Common categories: vacation, work, date night, events.",
    quote: "I have different Pinterest boards for different things I'm shopping for—right now vacation and work stuff.",
    attribution: "— Participant 2",
    insight: "Users naturally think in contexts (vacation, work, date night), not types (tops, bottoms).",
    insightLabel: "Behavior",
    chartLabel: "Card Sorting Results",
    chartData: null,
    cardSort: true,
  },
  {
    badge: "5/5 PARTICIPANTS (100%)",
    title: "Purchase Uncertainty",
    text: "All participants mentioned uncertainty about fit and appearance before buying online. 3/5 (60%) order multiple sizes. Average return rate: 2–3 items per 10 purchases.",
    quote: "I order two sizes and return what doesn't fit. It's annoying but I have no other way to know.",
    attribution: "— Participant 4",
    insight: "Can't see items on their body before purchasing, leads to returns and hesitation.",
    insightLabel: "Pain point",
    chartLabel: null,
    chartData: null,
  },
];

function SavingLocationsChart({ data }: { data: { label: string; pct: number }[] }) {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#2a1e36] border border-[#E5E5E5] dark:border-[#3D2B4C]/30 p-6 h-full">
      <p className="text-xs font-medium tracking-wider text-[#737373] dark:text-gray-500 uppercase mb-5">
        Where Users Save Items
      </p>
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-[#1D1A1C] dark:text-gray-200">{item.label}</span>
              <span className="text-xs text-[#737373] dark:text-gray-500 font-medium">
                {item.pct}%
              </span>
            </div>
            <div className="h-2 bg-[#E5E5E5] dark:bg-[#1a1520] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${item.pct === 100 ? "bg-[#3D2B4C] dark:bg-purple-500" : "bg-[#D4D4D4] dark:bg-gray-600"}`}
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-[#A3A3A3] dark:text-gray-600 mt-4">5 participants, multiple selections allowed</p>
    </div>
  );
}

function CardSortChart() {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#2a1e36] border border-[#E5E5E5] dark:border-[#3D2B4C]/30 p-6 mt-8">
      <p className="text-xs font-medium tracking-wider text-[#737373] dark:text-gray-500 uppercase mb-6">
        Card Sorting Results
      </p>
      <div className="grid grid-cols-2 gap-6">
        {/* Type-based */}
        <div className="border border-[#E5E5E5] dark:border-[#3D2B4C]/30 p-5 opacity-50">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-5 rounded-full bg-[#E5E5E5] dark:bg-gray-700 flex items-center justify-center text-xs text-[#737373]">✗</span>
            <span className="text-sm font-medium text-[#737373] dark:text-gray-400">Type-Based</span>
          </div>
          <div className="space-y-2">
            {["Tops", "Bottoms", "Dresses"].map((cat) => (
              <div key={cat} className="text-xs text-[#A3A3A3] dark:text-gray-600 px-3 py-2 bg-[#F5F5F5] dark:bg-[#1a1520]">
                {cat}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#A3A3A3] dark:text-gray-600 mt-4 font-medium">1/5 participants · 20%</p>
        </div>
        {/* Occasion-based */}
        <div className="border border-[#3D2B4C] dark:border-purple-500 p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-5 rounded-full bg-[#3D2B4C] dark:bg-purple-600 flex items-center justify-center text-xs text-white">✓</span>
            <span className="text-sm font-medium text-[#1D1A1C] dark:text-white">Occasion-Based</span>
          </div>
          <div className="space-y-2">
            {["Vacation", "Work", "Date Night"].map((cat) => (
              <div key={cat} className="text-xs text-[#1D1A1C] dark:text-gray-200 px-3 py-2 bg-[#3D2B4C]/5 dark:bg-purple-900/20">
                {cat}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#3D2B4C] dark:text-purple-400 mt-4 font-medium">4/5 participants · 80%</p>
        </div>
      </div>
    </div>
  );
}

export default function UserResearch() {
  return (
    <section id="user-research" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="06" title="User Research Findings" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-16 max-w-2xl">
          I interviewed 5 online shoppers (ages 22–34, shop 2+ times/month, 80%+ online purchases)
          to understand current behavior and pain points.
        </motion.p>

        <div className="space-y-16">
          {findings.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Badge + Title */}
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <span className="text-xs font-bold px-3 py-1.5 bg-[#F5F5F5] dark:bg-[#2a1e36] text-[#737373] dark:text-gray-400 tracking-wider uppercase">
                  {f.badge}
                </span>
                <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white">
                  {f.title}
                </h3>
              </div>

              <div className={`grid gap-8 ${f.chartData ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
                {/* Left: text + quote */}
                <div>
                  <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-6">{f.text}</p>

                  <div className="bg-[#FAFAFA] dark:bg-[#2a1e36] border-l-4 border-[#1D1A1C] dark:border-white p-6">
                    <span className="text-[#E5E5E5] dark:text-[#3D2B4C]/50 font-clash text-6xl leading-none block mb-1">"</span>
                    <p className="text-[#1D1A1C] dark:text-gray-200 text-lg italic leading-relaxed -mt-4">
                      {f.quote}
                    </p>
                    <p className="text-sm text-[#737373] dark:text-gray-500 mt-4">{f.attribution}</p>
                  </div>

                  {/* Insight box */}
                  <div className="bg-white dark:bg-[#2a1e36] p-5 border border-[#E8E5E6] dark:border-[#3D2B4C]/30 mt-4">
                    <p className="text-xs font-bold text-[#3D2B4C] dark:text-purple-400 uppercase tracking-wider mb-2">
                      {f.insightLabel}
                    </p>
                    <p className="text-[#1D1A1C] dark:text-white leading-relaxed text-sm">{f.insight}</p>
                  </div>
                </div>

                {/* Right: chart */}
                {f.chartData && <SavingLocationsChart data={f.chartData} />}
              </div>

              {/* Card sort chart below (full width) */}
              {f.cardSort && <CardSortChart />}

              {i < findings.length - 1 && (
                <div className="mt-16 h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
