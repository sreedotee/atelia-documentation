"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const columns = [
  {
    icon: "👤",
    title: "Consumer Value",
    points: [
      { title: "Real pain point", data: "30% of online fashion purchases returned" },
      { title: "Behavioral moment", data: "End of purchase funnel (ready to buy, need confidence)" },
      { title: "Current workaround", data: "Send links to friends for validation" },
    ],
  },
  {
    icon: "🏢",
    title: "Retailer Value",
    points: [
      { title: "Returns cost", data: "$550B annually in fashion industry" },
      { title: "Conversion boost", data: "Users who visualize are more likely to buy" },
      { title: "Cross-sell opportunity", data: '"Items that go with this" becomes visual' },
    ],
  },
  {
    icon: "📊",
    title: "Market Gap",
    points: [
      { title: "User behavior", data: "Shop across multiple retailers, not loyal to one" },
      { title: "No universal tool", data: "All existing solutions are single-brand" },
      { title: "Technology ready", data: "AI mature enough for realistic try-on" },
    ],
  },
];

export default function StrategicOpportunity() {
  return (
    <section id="opportunity" className="py-28 bg-white dark:bg-[#1e1530]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="06" title="Strategic Opportunity" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          Of the three approaches, the shopping context offered the strongest opportunity for
          virtual try-on technology.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{col.icon}</span>
                <h3 className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white">
                  {col.title}
                </h3>
              </div>

              <div className="space-y-5">
                {col.points.map((p) => (
                  <div key={p.title} className="border-l-2 border-[#E8E5E6] dark:border-[#3D2B4C]/50 pl-4">
                    <p className="text-xs font-medium text-[#7D767A] dark:text-gray-500 uppercase tracking-wide mb-1">
                      {p.title}
                    </p>
                    <p className="text-[#1D1A1C] dark:text-white font-medium">{p.data}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#3D2B4C] text-white rounded-2xl p-8 text-center"
        >
          <h3 className="font-clash text-2xl font-semibold mb-3">Strategic Decision</h3>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Design for the shopping context. This became my design constraint and opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
