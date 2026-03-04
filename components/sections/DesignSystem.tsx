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
  { name: "Gray 200", hex: "#C9B8D4", usage: "Borders, dividers", text: "black" },
];


export default function DesignSystem() {
  return (
    <section id="design-system" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="11" title="Design System" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-16 max-w-2xl">
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
            <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-6">
              Colors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {colors.map((c) => (
                <div key={c.name} className="rounded-xl overflow-hidden border border-[#C9B8D4]">
                  <div
                    className="h-20 w-full"
                    style={{ background: c.hex }}
                  />
                  <div className="p-3 bg-white">
                    <p className="font-medium text-sm text-[#1D1A1C]">{c.name}</p>
                    <p className="text-xs text-[#7D767A] font-mono">{c.hex}</p>
                    <p className="text-xs text-[#7D767A] mt-0.5">{c.usage}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white rounded-xl p-5 border border-[#C9B8D4]">
              <p className="font-medium text-[#1D1A1C] mb-2">Color Evolution</p>
              <p className="text-[#5C5759] text-sm leading-relaxed">
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
            <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-6">
              Typography
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-6 bg-white rounded-xl border border-[#C9B8D4]">
                <p className="font-clash text-4xl mb-2 text-[#1D1A1C]">Clash Display</p>
                <p className="text-sm text-[#5C5759]">
                  Headings, key moments. Balance between technical precision (sharp edges) and warmth
                  (curved forms).
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-[#C9B8D4]">
                <p className="font-sans text-4xl mb-2 text-[#1D1A1C]">DM Sans</p>
                <p className="text-sm text-[#5C5759]">
                  Body text, UI elements. Clean, highly readable for scanning content.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
