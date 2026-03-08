"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const modes = [
  {
    title: "BEFORE",
    subtitle: "Collecting and Organising",
    details: [
      { label: "Behavior", value: "Browsing, saving, curating" },
      { label: "Mental Model", value: '"Gathering inspiration"' },
      { label: "Reference", value: "Pinterest, Instagram Saved" },
    ],
    implication: "Low-friction saving, visual browsing, flexible organization",
    // Drop illustration at /public/images/three-modes/before.png
    illustrationSrc: "/images/three-modes/before.svg",
    imageBg: "#F5EDE3",
  },
  {
    title: "DURING",
    subtitle: "Creating and Experimenting",
    details: [
      { label: "Behavior", value: "Mixing items, trying combinations" },
      { label: "Mental Model", value: '"Playing with looks"' },
      { label: "Reference", value: "Dress-up games" },
    ],
    implication: "Interactive canvas, immediate feedback, easy regeneration",
    illustrationSrc: "/images/three-modes/during.svg",
    imageBg: "#EAF0EB",
  },
  {
    title: "AFTER",
    subtitle: "Reviewing and Deciding",
    details: [
      { label: "Behavior", value: "Viewing results, saving favorites" },
      { label: "Mental Model", value: "Recipe apps (outfit = dish, items = ingredients)" },
      { label: "Reference", value: "Recipe apps, cookbooks" },
    ],
    implication: 'Show "items used," clear save/share actions, purchase paths',
    illustrationSrc: "/images/three-modes/after.svg",
    imageBg: "#E8EBF5",
  },
];

export default function ThreeModes() {
  return (
    <section id="framework" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="04" title="Three Behavioral Modes" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-16 max-w-2xl">
          Users don't do one thing in this app—they shift between three distinct mindsets during the
          shopping journey. Each mode needed its own UI patterns and interactions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden bg-white border border-[#E8E5E6] hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Image area */}
              <div
                className="relative h-44 w-full overflow-hidden"
                style={{ backgroundColor: mode.imageBg }}
              >
                <img
                  src={mode.illustrationSrc}
                  alt={mode.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="absolute top-4 left-4 font-clash text-4xl font-black text-[#1D1A1C] leading-none select-none">
                  {mode.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] mb-5 leading-tight">
                  {mode.subtitle.includes(" and ") ? (
                    <>
                      {mode.subtitle.split(" and ")[0]} and<br />
                      {mode.subtitle.split(" and ")[1]}
                    </>
                  ) : (
                    mode.subtitle
                  )}
                </h3>

                <div className="space-y-3.5 mb-6 flex-1">
                  {mode.details.map((d) => (
                    <div key={d.label}>
                      <p className="text-[10px] uppercase tracking-widest font-medium text-[#9C9599] mb-0.5">
                        {d.label}
                      </p>
                      <p className="text-sm text-[#1D1A1C]">{d.value}</p>
                    </div>
                  ))}
                </div>

                {/* Design implication */}
                <div className="rounded-xl bg-[#F2F1F2] p-4">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#3D2B4C] mb-1.5">
                    Design Implication
                  </p>
                  <p className="text-sm text-[#5C5759] leading-snug">{mode.implication}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
