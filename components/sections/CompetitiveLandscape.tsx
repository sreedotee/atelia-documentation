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
  { app: "ASOS See My Fit", tryon: "✓", save: "✓", organize: "—", multiStore: "—", downloads: "10M+", rating: "3.2★" },
  { app: "Stylebook",        tryon: "—", save: "✓", organize: "✓", multiStore: "—", downloads: "500K+", rating: "4.6★" },
  { app: "Combyne",          tryon: "2D only", save: "✓", organize: "Basic", multiStore: "✓", downloads: "5M+", rating: "4.1★" },
  { app: "Drest",            tryon: "✓", save: "✓", organize: "✓", multiStore: "Designer only", downloads: "1M+", rating: "4.3★" },
  { app: "Pinterest",        tryon: "—", save: "✓", organize: "✓", multiStore: "✓", downloads: "500M+", rating: "4.5★" },
];


export default function CompetitiveLandscape() {
  return (
    <section id="competitive-landscape" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="" title="Competitive Landscape" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-12 max-w-2xl">
          I analyzed 5 existing virtual try-on and fashion organization apps to identify market
          gaps and opportunities.
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
              className="bg-[#FAF9FA] border border-[#E8E5E6] rounded-2xl p-7 hover:shadow-lg transition-shadow"
            >
              <p className="font-clash text-6xl font-bold text-[#3D2B4C]/10 mb-2">
                {a.number}
              </p>
              <h3 className="font-clash text-base md:text-lg lg:text-xl font-medium text-[#1D1A1C] mb-5">
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
                    <p className="text-xs text-[#7D767A] uppercase tracking-wide mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-sm text-[#1D1A1C]">{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {a.apps.map((app) => (
                  <span
                    key={app}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#3D2B4C]/10 text-[#3D2B4C]"
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
          className="bg-[#F5EDD8] border border-[#D4B880] rounded-2xl p-6 mb-16 flex items-start gap-4"
        >
          <span className="text-3xl">💡</span>
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

        {/* Enhanced Comparison Table */}
        <SectionHeader number="" title="Feature Comparison" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto mb-4"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#1D1A1C]">
                <th className="text-left py-4 pr-3 text-xs font-medium tracking-wider text-[#737373] uppercase">
                  App
                </th>
                <th className="py-4 px-3 text-xs font-medium tracking-wider text-[#737373] uppercase text-center">
                  Try-On
                </th>
                <th className="py-4 px-3 text-xs font-medium tracking-wider text-[#737373] uppercase text-center">
                  Save
                </th>
                <th className="py-4 px-3 text-xs font-medium tracking-wider text-[#737373] uppercase text-center">
                  Organize
                </th>
                <th className="py-4 px-3 text-xs font-medium tracking-wider text-[#737373] uppercase text-center">
                  Multi-Store
                </th>
                <th className="py-4 px-3 text-xs font-medium tracking-wider text-[#737373] uppercase text-center">
                  Downloads
                </th>
                <th className="py-4 px-3 text-xs font-medium tracking-wider text-[#737373] uppercase text-center">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.app} className="border-b border-[#E5E5E5]">
                  <td className="py-5 pr-3 text-[15px] text-[#1D1A1C]">{row.app}</td>
                  <td className={`py-5 px-3 text-center text-sm ${row.tryon === "—" ? "text-[#D4D4D4]" : "text-[#1D1A1C]"}`}>{row.tryon}</td>
                  <td className={`py-5 px-3 text-center text-sm ${row.save === "—" ? "text-[#D4D4D4]" : "text-[#1D1A1C]"}`}>{row.save}</td>
                  <td className={`py-5 px-3 text-center text-sm ${row.organize === "—" ? "text-[#D4D4D4]" : "text-[#1D1A1C]"}`}>{row.organize}</td>
                  <td className={`py-5 px-3 text-center text-sm ${row.multiStore === "—" ? "text-[#D4D4D4]" : "text-[#737373]"}`}>{row.multiStore}</td>
                  <td className="py-5 px-3 text-center text-sm text-[#737373]">{row.downloads}</td>
                  <td className="py-5 px-3 text-center text-sm text-[#737373]">{row.rating}</td>
                </tr>
              ))}
              {/* Atelia highlighted row */}
              <tr className="border-t border-b border-[#1D1A1C] bg-[#FAFAFA]">
                <td className="py-5 pr-3 font-medium text-[#1D1A1C]">Atelia</td>
                <td className="py-5 px-3 text-center font-medium text-[#1D1A1C]">✓</td>
                <td className="py-5 px-3 text-center font-medium text-[#1D1A1C]">✓</td>
                <td className="py-5 px-3 text-center font-medium text-[#1D1A1C]">✓</td>
                <td className="py-5 px-3 text-center font-medium text-[#1D1A1C]">✓</td>
                <td className="py-5 px-3 text-center text-sm text-[#737373]">—</td>
                <td className="py-5 px-3 text-center text-sm text-[#737373]">—</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-sm text-[#A3A3A3] mt-4 italic">
            Atelia is the only solution combining all four core capabilities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
