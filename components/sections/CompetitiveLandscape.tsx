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
  if (value === true) return <span className="text-green-600 font-medium">✓ Yes</span>;
  if (value === false) return <span className="text-red-500">✗ No</span>;
  return <span className="text-amber-600 font-medium">◑ {value}</span>;
}

export default function CompetitiveLandscape() {
  return (
    <section id="competitive-landscape" className="bg-white" style={{ padding: "160px 80px" }}>
      <div style={{ maxWidth: 800 }}>
        <SectionHeader number="03" title="Research" subtitle="Competitive Landscape" />

        <motion.p {...fadeInUp} className="text-lg text-[#525252] leading-relaxed mb-12 max-w-2xl">
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
              className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl p-7 hover:shadow-lg transition-shadow"
            >
              <p className="font-clash text-6xl font-bold text-black/10 mb-2">
                {a.number}
              </p>
              <h3 className="font-clash text-xl font-semibold text-[#171717] mb-5">
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
                    <p className="text-xs text-[#737373] uppercase tracking-wide mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-sm text-[#171717]">{row.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {a.apps.map((app) => (
                  <span
                    key={app}
                    className="text-xs px-2.5 py-1 rounded-full bg-black/10 text-black"
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
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-16 flex items-start gap-4"
        >
          <span className="text-3xl">💡</span>
          <div>
            <h4 className="font-clash text-xl font-semibold text-[#171717] mb-2">
              The Gap
            </h4>
            <p className="text-[#525252]">
              No app combines universal item saving (any store) + AI virtual try-on + flexible
              organization (by occasion).
            </p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <SectionHeader number="04" title="Research" subtitle="Feature Comparison" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#000000] text-white">
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
                  className={`border-b border-[#E5E5E5] ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}`}
                >
                  <td className="p-4 font-medium text-[#171717]">{row.app}</td>
                  <td className="p-4 text-center"><CellValue value={row.tryon} /></td>
                  <td className="p-4 text-center"><CellValue value={row.save} /></td>
                  <td className="p-4 text-center"><CellValue value={row.organize} /></td>
                  <td className="p-4 text-center"><CellValue value={row.multiStore} /></td>
                </tr>
              ))}
              {/* Atelia highlighted row */}
              <tr className="bg-black/5 border-2 border-black">
                <td className="p-4 font-bold text-black rounded-bl-xl">
                  ⭐ Atelia
                </td>
                <td className="p-4 text-center text-black font-bold">✓ Yes</td>
                <td className="p-4 text-center text-black font-bold">✓ Yes</td>
                <td className="p-4 text-center text-black font-bold">✓ Yes</td>
                <td className="p-4 text-center text-black font-bold rounded-br-xl">✓ Yes</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-sm text-[#737373] mt-3">
            Atelia is the only solution combining all four capabilities
          </p>
        </motion.div>
      </div>
    </section>
  );
}
