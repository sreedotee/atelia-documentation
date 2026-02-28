"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const colors = [
  { name: "Plum", hex: "#3D2B4C", usage: "Brand primary", text: "white" },
  { name: "Surface", hex: "#FAF9FA", usage: "Background", text: "black" },
  { name: "Text Primary", hex: "#1D1A1C", usage: "Headings, body", text: "white" },
  { name: "Text Secondary", hex: "#5C5759", usage: "Supporting text", text: "white" },
  { name: "Text Tertiary", hex: "#7D767A", usage: "Captions, labels", text: "white" },
  { name: "Gray 200", hex: "#E8E5E6", usage: "Borders, dividers", text: "black" },
];

const typeScale = [
  { label: "Display", size: "40px", font: "Clash Display Medium", sample: "Atelia" },
  { label: "Heading/Section", size: "24px", font: "Clash Display Medium", sample: "Collections" },
  { label: "Heading/Card", size: "20px", font: "Clash Display Medium", sample: "Summer Vacation" },
  { label: "Body/Emphasized", size: "17px", font: "DM Sans Medium", sample: "Save to collection" },
  { label: "Body/Default", size: "14px", font: "DM Sans Regular", sample: "Paste link from any store" },
  { label: "Body/Small", size: "12px", font: "DM Sans Regular", sample: "3 items • 2 outfits" },
];

const spacing = [4, 8, 16, 24, 32, 40, 48];
const radii = [8, 12, 16, 24];

export default function DesignSystem() {
  return (
    <section id="design-system" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="21" title="Design System" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-16 max-w-2xl">
          Named "Atelia" from "atelier" (design studio), the visual system balances sophistication
          with approachability.
        </motion.p>

        <div className="space-y-16">
          {/* Colors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-6">
              Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {colors.map((c) => (
                <div key={c.name} className="rounded-xl overflow-hidden border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
                  <div
                    className="h-20 w-full"
                    style={{ background: c.hex }}
                  />
                  <div className="p-3 bg-white dark:bg-[#2a1e36]">
                    <p className="font-semibold text-sm text-[#1D1A1C] dark:text-white">{c.name}</p>
                    <p className="text-xs text-[#7D767A] dark:text-gray-500 font-mono">{c.hex}</p>
                    <p className="text-xs text-[#7D767A] dark:text-gray-500 mt-0.5">{c.usage}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white dark:bg-[#2a1e36] rounded-xl p-5 border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
              <p className="font-semibold text-[#1D1A1C] dark:text-white mb-2">Color Evolution</p>
              <p className="text-[#5C5759] dark:text-gray-300 text-sm leading-relaxed">
                Evolved from purple (commonly associated with AI) to plum for a more approachable,
                consumer-friendly, playful feeling while maintaining sophistication.
              </p>
            </div>
          </motion.div>

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-6">
              Typography
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-6 bg-white dark:bg-[#2a1e36] rounded-xl border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
                <p className="font-clash text-4xl mb-2 text-[#1D1A1C] dark:text-white">Clash Display</p>
                <p className="text-sm text-[#5C5759] dark:text-gray-400">
                  Headings, key moments. Balance between technical precision (sharp edges) and warmth
                  (curved forms).
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-[#2a1e36] rounded-xl border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
                <p className="font-sans text-4xl mb-2 text-[#1D1A1C] dark:text-white">DM Sans</p>
                <p className="text-sm text-[#5C5759] dark:text-gray-400">
                  Body text, UI elements. Clean, highly readable for scanning content.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#2a1e36] rounded-xl border border-[#E8E5E6] dark:border-[#3D2B4C]/30 overflow-hidden">
              {typeScale.map((t, i) => (
                <div
                  key={t.label}
                  className={`flex items-center gap-6 px-6 py-4 ${
                    i < typeScale.length - 1 ? "border-b border-[#E8E5E6] dark:border-[#3D2B4C]/30" : ""
                  }`}
                >
                  <div className="w-36 shrink-0">
                    <p className="text-xs text-[#7D767A] dark:text-gray-500">{t.label}</p>
                    <p className="text-xs font-mono text-[#3D2B4C] dark:text-purple-400">{t.size}</p>
                  </div>
                  <p
                    className="text-[#1D1A1C] dark:text-white"
                    style={{
                      fontSize: t.size,
                      fontFamily: t.font.includes("Clash") ? "var(--font-clash), serif" : "var(--font-dm-sans), sans-serif",
                      fontWeight: t.font.includes("Medium") ? 500 : 400,
                    }}
                  >
                    {t.sample}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-6">
              Layout & Spacing (8pt Grid)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#2a1e36] rounded-xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
                <p className="text-sm font-semibold text-[#1D1A1C] dark:text-white mb-4">Spacing Scale</p>
                <div className="flex items-end gap-3">
                  {spacing.map((s) => (
                    <div key={s} className="flex flex-col items-center gap-2">
                      <div
                        className="bg-[#3D2B4C]/20 dark:bg-purple-500/30 rounded"
                        style={{ width: 16, height: s }}
                      />
                      <span className="text-[10px] text-[#7D767A] dark:text-gray-500">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-[#2a1e36] rounded-xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
                <p className="text-sm font-semibold text-[#1D1A1C] dark:text-white mb-4">Border Radius</p>
                <div className="flex items-center gap-4">
                  {radii.map((r) => (
                    <div key={r} className="flex flex-col items-center gap-2">
                      <div
                        className="w-12 h-12 border-2 border-[#3D2B4C] dark:border-purple-400 bg-[#3D2B4C]/10 dark:bg-purple-500/20"
                        style={{ borderRadius: r }}
                      />
                      <span className="text-[10px] text-[#7D767A] dark:text-gray-500">{r}px</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
