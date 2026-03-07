"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";
import EmojiImage from "../EmojiImage";

const columns = [
  {
    icon: "person",
    title: "Consumer Value",
    points: [
      { title: "Real pain point", data: "30% of online fashion purchases returned" },
      { title: "Behavioral moment", data: "End of purchase funnel (ready to buy, need confidence)" },
      { title: "Current workaround", data: "Send links to friends for validation" },
    ],
  },
  {
    icon: "office",
    title: "Retailer Value",
    points: [
      { title: "Returns cost", data: "$550B annually in fashion industry" },
      { title: "Conversion boost", data: "Users who visualize are more likely to buy" },
      { title: "Cross-sell opportunity", data: '"Items that go with this" becomes visual' },
    ],
  },
  {
    icon: "bar-chart",
    title: "Market Gap",
    points: [
      { title: "User behavior", data: "Shop across multiple retailers, not loyal to one" },
      { title: "No universal tool", data: "All existing solutions are single-brand" },
      { title: "Technology ready", data: "AI now capable of realistic outfit visualization" },
    ],
  },
];

export default function StrategicOpportunity() {
  return (
    <section id="opportunity" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="" title="Strategic Opportunity" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-12 max-w-2xl">
          Of the three approaches, the shopping decision moment offered the strongest opportunity for
          outfit visualization technology.
        </motion.p>

        {/* Desktop layout: row-aligned grid with continuous vertical lines */}
        <div className="hidden md:block mb-12">
          {/* Column headers */}
          <div className="grid grid-cols-3 gap-x-8 mb-6">
            {columns.map((col, i) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <EmojiImage name={col.icon} size={36} alt={col.title} />
                <h3 className="font-clash text-base md:text-lg lg:text-xl font-medium text-[#1D1A1C]">
                  {col.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/*
            Row-major grid: iterate rows first so each CSS grid row contains
            one item from each column. Grid auto-rows makes every item in the
            same row identical in height → horizontal alignment.
            No row-gap means border-l segments from adjacent rows in the same
            column are flush → single continuous vertical line per column.
          */}
          <div className="grid grid-cols-3 gap-x-8">
            {[0, 1, 2].map((rowIdx) =>
              columns.map((col, colIdx) => (
                <motion.div
                  key={`${col.title}-${rowIdx}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: colIdx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`border-l-2 border-[#E8E5E6] pl-4 pt-5${rowIdx === 2 ? " pb-2" : ""}`}
                >
                  <p className="text-xs font-medium text-[#7D767A] uppercase tracking-wide mb-1">
                    {col.points[rowIdx].title}
                  </p>
                  <p className="text-[#1D1A1C] font-medium">{col.points[rowIdx].data}</p>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Mobile layout: original column-stacked design */}
        <div className="md:hidden grid grid-cols-1 gap-8 mb-12">
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
                <EmojiImage name={col.icon} size={36} alt={col.title} />
                <h3 className="font-clash text-xl font-medium text-[#1D1A1C]">
                  {col.title}
                </h3>
              </div>
              <div className="border-l-2 border-[#E8E5E6] pl-4 space-y-5">
                {col.points.map((p) => (
                  <div key={p.title}>
                    <p className="text-xs font-medium text-[#7D767A] uppercase tracking-wide mb-1">
                      {p.title}
                    </p>
                    <p className="text-[#1D1A1C] font-medium">{p.data}</p>
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
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium mb-3">Strategic Decision</h3>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Design for the shopping context. This became my design constraint and opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
