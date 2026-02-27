"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

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

const tableData = [
  { app: "ASOS See My Fit", tryon: true, save: true, organize: false, multiStore: false },
  { app: "Stylebook", tryon: false, save: "manual", organize: true, multiStore: false },
  { app: "Pinterest", tryon: false, save: true, organize: "boards", multiStore: true },
  { app: "Combyne", tryon: "limited", save: true, organize: "basic", multiStore: true },
  { app: "Zara AR", tryon: true, save: false, organize: false, multiStore: false },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-green-600 dark:text-green-400 font-medium">✓ Yes</span>;
  if (value === false) return <span className="text-red-500 dark:text-red-400">✗ No</span>;
  return <span className="text-amber-600 dark:text-amber-400 font-medium">◑ {value}</span>;
}

export default function CompetitiveLandscape() {
  return (
    <section id="competitive-landscape" className="py-28 bg-white dark:bg-[#1e1530]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="04" title="Competitive Landscape" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          I analyzed 5 existing virtual try-on apps and found three distinct approaches, each
          serving different user needs.
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
              className="bg-[#FAF9FA] dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 rounded-2xl p-7 hover:shadow-lg transition-shadow"
            >
              <p className="font-clash text-6xl font-bold text-[#3D2B4C]/10 dark:text-purple-500/20 mb-2">
                {a.number}
              </p>
              <h3 className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white mb-5">
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
                    <p className="text-xs text-[#7D767A] dark:text-gray-500 uppercase tracking-wide mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-sm text-[#1D1A1C] dark:text-gray-200">{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {a.apps.map((app) => (
                  <span
                    key={app}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#3D2B4C]/10 dark:bg-purple-500/20 text-[#3D2B4C] dark:text-purple-300"
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
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-2xl p-6 mb-16 flex items-start gap-4"
        >
          <span className="text-3xl">💡</span>
          <div>
            <h4 className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white mb-2">
              The Gap
            </h4>
            <p className="text-[#5C5759] dark:text-gray-300">
              No app combines universal item saving (any store) + AI virtual try-on + flexible
              organization (by occasion).
            </p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <SectionHeader number="05" title="Feature Comparison" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#3D2B4C] text-white">
                <th className="text-left p-4 rounded-tl-xl font-clash font-semibold">App</th>
                <th className="p-4 font-clash font-semibold">Try-On</th>
                <th className="p-4 font-clash font-semibold">Save Items</th>
                <th className="p-4 font-clash font-semibold">Organize</th>
                <th className="p-4 rounded-tr-xl font-clash font-semibold">Multi-Store</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr
                  key={row.app}
                  className={`border-b border-[#E8E5E6] dark:border-[#3D2B4C]/30 ${i % 2 === 0 ? "bg-white dark:bg-[#1e1530]" : "bg-[#FAF9FA] dark:bg-[#2a1e36]"}`}
                >
                  <td className="p-4 font-medium text-[#1D1A1C] dark:text-white">{row.app}</td>
                  <td className="p-4 text-center"><CellValue value={row.tryon} /></td>
                  <td className="p-4 text-center"><CellValue value={row.save} /></td>
                  <td className="p-4 text-center"><CellValue value={row.organize} /></td>
                  <td className="p-4 text-center"><CellValue value={row.multiStore} /></td>
                </tr>
              ))}
              {/* Atelia highlighted row */}
              <tr className="bg-[#3D2B4C]/5 dark:bg-purple-900/20 border-2 border-[#3D2B4C] dark:border-purple-500/50">
                <td className="p-4 font-bold text-[#3D2B4C] dark:text-purple-300 rounded-bl-xl">
                  ⭐ Atelia
                </td>
                <td className="p-4 text-center text-[#3D2B4C] dark:text-purple-300 font-bold">✓ Yes</td>
                <td className="p-4 text-center text-[#3D2B4C] dark:text-purple-300 font-bold">✓ Yes</td>
                <td className="p-4 text-center text-[#3D2B4C] dark:text-purple-300 font-bold">✓ Yes</td>
                <td className="p-4 text-center text-[#3D2B4C] dark:text-purple-300 font-bold rounded-br-xl">✓ Yes</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-sm text-[#7D767A] dark:text-gray-500 mt-3">
            Atelia is the only solution combining all four capabilities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
