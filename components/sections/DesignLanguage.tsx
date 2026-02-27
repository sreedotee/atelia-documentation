"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const terms = [
  {
    term: "Item",
    def: "Individual clothing piece from any store",
    details: [
      { label: "Source", value: "Paste link, upload photo, camera" },
      { label: "Lives in", value: "Collections, Saved Items" },
      { label: "Example", value: '"Black boots from store.com"' },
    ],
  },
  {
    term: "Outfit",
    def: "AI-generated combination of items",
    details: [
      { label: "Source", value: "Try-On canvas generation" },
      { label: "Lives in", value: "Collections, History" },
      { label: "Example", value: "Dress + shoes + accessories" },
    ],
  },
  {
    term: "Collection",
    def: "User-created folder organized by occasion or mood",
    details: [
      { label: "Contains", value: "Both items AND outfits" },
      { label: "Example", value: '"Summer Vacation," "Date Night," "Work"' },
      { label: "Why", value: "Users organize by meaning, not object type" },
    ],
  },
  {
    term: "Saved",
    def: "Universal superset of all items and outfits",
    details: [
      { label: "Purpose", value: "Recently Added + unified library" },
      { label: "Structure", value: "All items/outfits exist here before organizing" },
      { label: "Relationship", value: "Collections are subsets of Saved" },
    ],
  },
];

export default function DesignLanguage() {
  return (
    <section id="language" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="11" title="Design Language" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          To create clarity throughout the app, I defined core concepts that would guide all design
          decisions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {terms.map((t, i) => (
            <motion.div
              key={t.term}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#2a1e36] rounded-2xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30 hover:shadow-md transition-shadow"
            >
              <h3 className="font-clash text-2xl font-semibold text-[#3D2B4C] dark:text-purple-300 mb-2">
                {t.term}
              </h3>
              <p className="text-[#1D1A1C] dark:text-white mb-5 font-medium">{t.def}</p>

              <div className="space-y-2.5">
                {t.details.map((d) => (
                  <div key={d.label} className="flex gap-2">
                    <span className="text-xs text-[#7D767A] dark:text-gray-500 uppercase tracking-wide font-medium w-24 shrink-0 pt-0.5">
                      {d.label}
                    </span>
                    <span className="text-sm text-[#5C5759] dark:text-gray-300">{d.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hierarchy Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#2a1e36] rounded-2xl p-8 border border-[#E8E5E6] dark:border-[#3D2B4C]/30"
        >
          <h4 className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white mb-6 text-center">
            Information Hierarchy
          </h4>
          <div className="flex flex-col items-center gap-2">
            <div className="px-6 py-2 bg-[#3D2B4C] text-white rounded-lg font-clash font-semibold">
              Saved (Superset)
            </div>
            <div className="w-px h-6 bg-[#3D2B4C]/30 dark:bg-purple-500/30" />
            <div className="flex gap-4">
              {["Collection A", "Collection B", "Collection C"].map((c) => (
                <div key={c} className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 bg-[#3D2B4C]/20 dark:bg-purple-500/20 text-[#3D2B4C] dark:text-purple-300 rounded-lg text-sm font-semibold">
                    {c}
                  </div>
                  <div className="w-px h-4 bg-[#3D2B4C]/20 dark:bg-purple-500/20" />
                  <div className="flex gap-1.5">
                    <div className="px-2 py-1 bg-[#FAF9FA] dark:bg-[#1e1530] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 rounded text-xs text-[#5C5759] dark:text-gray-400">
                      Items
                    </div>
                    <div className="px-2 py-1 bg-[#FAF9FA] dark:bg-[#1e1530] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 rounded text-xs text-[#5C5759] dark:text-gray-400">
                      Outfits
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
