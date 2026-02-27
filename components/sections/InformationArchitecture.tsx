"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

interface TreeNodeProps {
  label: string;
  level?: number;
  primary?: boolean;
  children?: TreeNodeProps[];
}

function TreeNode({ label, primary }: TreeNodeProps) {
  return (
    <div
      className={`px-4 py-2 rounded-lg text-sm font-medium text-center ${
        primary
          ? "bg-[#3D2B4C] text-white font-clash"
          : "bg-white dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 text-[#1D1A1C] dark:text-white"
      }`}
    >
      {label}
    </div>
  );
}

export default function InformationArchitecture() {
  const principles = [
    "Saved = superset (all items/outfits)",
    "Collections = subsets (organized by occasion)",
    "Both items AND outfits can exist in collections",
    "Each tab maps to a behavioral mode",
  ];

  return (
    <section id="information-architecture" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="16" title="Information Architecture" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          The app structure directly reflects the three behavioral modes, with each tab serving a
          distinct phase of the shopping journey.
        </motion.p>

        {/* IA Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#2a1e36] rounded-2xl p-8 border border-[#E8E5E6] dark:border-[#3D2B4C]/30 mb-8 overflow-x-auto"
        >
          <h4 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-8 text-center">
            App Structure
          </h4>

          {/* Root */}
          <div className="flex justify-center mb-4">
            <div className="px-8 py-3 bg-[#1D1A1C] dark:bg-[#3D2B4C] text-white rounded-xl font-clash font-bold text-lg">
              ATELIA
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-px h-8 bg-[#E8E5E6] dark:bg-[#3D2B4C]/50" />
          </div>

          {/* Tab row */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-4">
            {["HOME\n(Mode 1: BEFORE)", "TRY ON\n(Mode 2: DURING)", "PROFILE\n(Mode 3: AFTER)"].map((tab) => (
              <div
                key={tab}
                className="px-4 py-3 bg-[#3D2B4C] text-white rounded-xl font-clash font-semibold text-sm text-center whitespace-pre-line"
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Dividers */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-4">
            {[3, 2, 3].map((_, i) => (
              <div key={i} className="flex justify-center">
                <div className="w-px h-6 bg-[#E8E5E6] dark:bg-[#3D2B4C]/50" />
              </div>
            ))}
          </div>

          {/* Second level */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {/* Home children */}
            <div className="space-y-2">
              {["Recently Added", "Saved (Items + Outfits)", "Collections"].map((item) => (
                <div
                  key={item}
                  className="px-3 py-2 bg-[#FAF9FA] dark:bg-[#1e1530] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 rounded-lg text-xs text-[#5C5759] dark:text-gray-400 text-center"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Try-On children */}
            <div className="space-y-2">
              {["Canvas (Item Selection)", "History (Timeline)"].map((item) => (
                <div
                  key={item}
                  className="px-3 py-2 bg-[#FAF9FA] dark:bg-[#1e1530] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 rounded-lg text-xs text-[#5C5759] dark:text-gray-400 text-center"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Profile children */}
            <div className="space-y-2">
              {["Measurements", "Settings", "Support"].map((item) => (
                <div
                  key={item}
                  className="px-3 py-2 bg-[#FAF9FA] dark:bg-[#1e1530] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 rounded-lg text-xs text-[#5C5759] dark:text-gray-400 text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-[#2a1e36] rounded-2xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30"
        >
          <h4 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-4">
            Key Principles
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {principles.map((p) => (
              <div key={p} className="flex items-start gap-2">
                <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5">•</span>
                <p className="text-[#5C5759] dark:text-gray-300 text-sm">{p}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
