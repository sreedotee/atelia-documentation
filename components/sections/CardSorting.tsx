"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

export default function CardSorting() {
  const typeCategories = [
    { name: "Tops", count: 3, color: "#E8E5E6" },
    { name: "Bottoms", count: 2, color: "#E8E5E6" },
    { name: "Shoes", count: 2, color: "#E8E5E6" },
  ];

  const occasionCategories = [
    { name: "Vacation", count: 4, color: "#d4bee3" },
    { name: "Work", count: 3, color: "#d4bee3" },
    { name: "Night Out", count: 2, color: "#d4bee3" },
  ];

  return (
    <section id="card-sorting" className="py-28 bg-white dark:bg-[#1e1530]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="07" title="Card Sorting Results" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          To validate the "organize by occasion" finding, I conducted a photo sorting task with
          participants.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Type-based */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border border-[#E8E5E6] dark:border-[#3D2B4C]/30 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-red-500">✗</span>
              <h3 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white">
                Type-Based Organization
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {typeCategories.map((cat) => (
                <div key={cat.name}>
                  <p className="text-sm font-medium text-[#5C5759] dark:text-gray-400 mb-2">{cat.name}</p>
                  <div className="flex gap-2">
                    {Array.from({ length: cat.count }).map((_, i) => (
                      <div
                        key={i}
                        className="w-14 h-14 rounded-lg bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 flex items-center justify-center text-xs text-[#7D767A]"
                      >
                        👕
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/40 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400">
              0/5 participants organized this way
            </div>
          </motion.div>

          {/* Occasion-based */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-2 border-[#3D2B4C] dark:border-purple-500/50 rounded-2xl p-6 bg-[#3D2B4C]/5 dark:bg-purple-500/10"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-green-500">✓</span>
              <h3 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white">
                Occasion-Based Organization
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {occasionCategories.map((cat) => (
                <div key={cat.name}>
                  <p className="text-sm font-medium text-[#5C5759] dark:text-gray-400 mb-2">{cat.name}</p>
                  <div className="flex gap-2">
                    {Array.from({ length: cat.count }).map((_, i) => (
                      <div
                        key={i}
                        className="w-14 h-14 rounded-lg bg-[#d4bee3] dark:bg-purple-900/40 flex items-center justify-center text-xs"
                      >
                        {["👗", "👠", "👜", "🩱"][i % 4]}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/40 rounded-xl px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400">
              4/5 participants organized this way
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/40 rounded-2xl p-6 flex items-start gap-4"
        >
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">✓</div>
          <div>
            <h4 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-2">Validated</h4>
            <p className="text-[#5C5759] dark:text-gray-300">
              Users organize by meaning/context (vacation, work), not object type (tops, bottoms).
              This justified designing Collections to hold both items and outfits together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
