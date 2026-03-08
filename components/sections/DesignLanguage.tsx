"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";
import EmojiImage from "../EmojiImage";

const terms = [
  {
    term: "Item",
    def: "Individual clothing piece from any store",
    details: [
      { label: "Source", value: "Paste link, upload photo, camera" },
      { label: "Lives in", value: "Collections, Saved Items" },
      { label: "Example", value: '"Black boots from store.com"' },
    ],
    // Drop your illustration at /public/images/design-language/item.png
    illustrationSrc: "/images/design-language/item.png",
    emoji: "dress",
  },
  {
    term: "Outfit",
    def: "AI-generated look created from your saved items",
    details: [
      { label: "Source", value: "Try-On canvas generation" },
      { label: "Lives in", value: "Collections, History" },
      { label: "Example", value: "Dress + shoes + accessories" },
    ],
    illustrationSrc: "/images/design-language/outfit.png",
    emoji: "sparkles",
  },
  {
    term: "Collection",
    def: "User-created folder organized by occasion or mood",
    details: [
      { label: "Contains", value: "Both items AND outfits" },
      { label: "Example", value: '"Summer Vacation," "Date Night," "Work"' },
      { label: "Why", value: "Organize by context, not just category" },
    ],
    illustrationSrc: "/images/design-language/collection.png",
    emoji: "card-index-dividers",
  },
  {
    term: "Saved",
    def: "Universal superset of all items and outfits",
    details: [
      { label: "Purpose", value: "Recently Added + unified library" },
      { label: "Structure", value: "All items/outfits exist here first" },
      { label: "Relationship", value: "Collections are subsets of Saved" },
    ],
    illustrationSrc: "/images/design-language/saved.png",
    emoji: "heart",
  },
];

export default function DesignLanguage() {
  return (
    <section id="language" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="05" title="Design Language" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-12 max-w-2xl">
          To support outfit visualization across items from many stores, I defined four core objects that structure how content moves through the app.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {terms.map((t, i) => (
            <motion.div
              key={t.term}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-[#E8E5E6] hover:shadow-md transition-shadow flex overflow-hidden"
            >
              {/* Left: illustration */}
              <div className="w-36 shrink-0 flex items-center justify-center bg-[#FAF9FA] p-4">
                <img
                  src={t.illustrationSrc}
                  alt={t.term}
                  className="w-full h-auto object-contain max-h-32"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <span style={{ display: "none" }} className="items-center justify-center w-full h-full">
                  <EmojiImage name={t.emoji} size={72} alt={t.term} />
                </span>
              </div>

              {/* Right: content */}
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
                <h3 className="font-clash text-xl font-semibold text-[#3D2B4C] mb-1">
                  {t.term}
                </h3>
                <p className="text-[#1D1A1C] font-medium text-sm mb-4 leading-snug">{t.def}</p>

                <div className="space-y-2">
                  {t.details.map((d) => (
                    <div key={d.label} className="flex gap-3">
                      <span className="text-[10px] text-[#9C9599] uppercase tracking-widest font-medium w-20 shrink-0 pt-0.5">
                        {d.label}
                      </span>
                      <span className="text-[13px] text-[#5C5759] leading-snug">{d.value}</span>
                    </div>
                  ))}
                </div>
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
          className="bg-white rounded-2xl p-8 border border-[#E8E5E6]"
        >
          <h4 className="font-clash text-base md:text-lg lg:text-xl font-medium text-[#1D1A1C] mb-6 text-center">
            Information Hierarchy
          </h4>
          <div className="flex flex-col items-center gap-2">
            <div className="px-6 py-2 bg-[#3D2B4C] text-white rounded-lg font-clash font-medium">
              Saved (Superset)
            </div>
            <div className="w-px h-6 bg-[#3D2B4C]/30" />
            <div className="flex gap-4">
              {["Collection A", "Collection B", "Collection C"].map((c) => (
                <div key={c} className="flex flex-col items-center gap-2">
                  <div className="px-4 py-2 bg-[#3D2B4C]/20 text-[#3D2B4C] rounded-lg text-sm font-medium">
                    {c}
                  </div>
                  <div className="w-px h-4 bg-[#3D2B4C]/20" />
                  <div className="flex gap-1.5">
                    <div className="px-2 py-1 bg-[#FAF9FA] border border-[#E8E5E6] rounded text-xs text-[#5C5759]">
                      Items
                    </div>
                    <div className="px-2 py-1 bg-[#FAF9FA] border border-[#E8E5E6] rounded text-xs text-[#5C5759]">
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
