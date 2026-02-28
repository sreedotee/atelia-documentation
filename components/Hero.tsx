"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #ffffff 0%, #FAF9FA 50%, #f0ebf5 100%)",
      }}
    >
      <div className="dark:hidden absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, #ffffff 0%, #FAF9FA 50%, #f0ebf5 100%)",
        }}
      />
      <div className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, #1a1520 0%, #1e1730 50%, #2a1e36 100%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#3D2B4C]/10 text-[#3D2B4C] dark:bg-purple-500/20 dark:text-purple-300">
                iOS App Design
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#3D2B4C]/10 text-[#3D2B4C] dark:bg-purple-500/20 dark:text-purple-300">
                2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-clash text-7xl md:text-8xl font-semibold text-[#1D1A1C] dark:text-white leading-[1.05] mb-4"
            >
              Atelia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-clash text-2xl md:text-3xl text-[#3D2B4C] dark:text-purple-300 leading-snug mb-6"
            >
              AI Virtual Try-On for Confident Shopping
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Atelia combines universal item saving with AI virtual try-on,
              helping online shoppers visualize outfits from any store on their
              body before buying.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
            >
              {[
                { label: "Role", value: "Product Designer" },
                { label: "Duration", value: "6 weeks" },
                { label: "Scope", value: "Solo project" },
                { label: "Deliverables", value: "72 screens" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs font-medium text-[#7D767A] dark:text-gray-500 uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#overview"
                className="px-6 py-3 bg-[#3D2B4C] text-white rounded-xl font-medium hover:bg-[#2a1e36] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Read Case Study ↓
              </a>
              <a
                href="#video"
                className="px-6 py-3 bg-white dark:bg-white/10 text-[#3D2B4C] dark:text-white border border-[#E8E5E6] dark:border-white/20 rounded-xl font-medium hover:border-[#3D2B4C] dark:hover:border-white/40 transition-all hover:-translate-y-0.5"
              >
                Watch Walkthrough (3 min)
              </a>
            </motion.div>
          </div>

          {/* Right Column - Decorative phone mockup placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              className="relative"
            >
              {/* Phone frame */}
              <div
                className="relative rounded-[40px] overflow-hidden shadow-2xl"
                style={{
                  width: 280,
                  height: 560,
                  background: "linear-gradient(135deg, #3D2B4C 0%, #6b3fa0 100%)",
                  border: "6px solid #2a1e36",
                }}
              >
                {/* Screen content */}
                <div className="absolute inset-0 flex flex-col p-4 pt-12">
                  <div className="bg-white/10 rounded-2xl p-4 mb-3">
                    <div className="w-20 h-3 bg-white/30 rounded mb-2" />
                    <div className="w-32 h-2 bg-white/20 rounded" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-white/10 rounded-xl"
                        style={{ height: 100 }}
                      >
                        <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4">
                    <div className="w-16 h-2 bg-white/30 rounded mb-3" />
                    <div className="flex gap-2 mb-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-lg bg-white/15" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#2a1e36] rounded-b-2xl z-10" />
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -right-8 top-20 w-16 h-16 rounded-2xl bg-[#3D2B4C]/20 dark:bg-purple-500/20 backdrop-blur-sm border border-[#3D2B4C]/20 flex items-center justify-center text-2xl"
                style={{ rotate: "12deg" }}
              >
                ✨
              </div>
              <div
                className="absolute -left-6 bottom-20 w-12 h-12 rounded-xl bg-[#3D2B4C]/20 dark:bg-purple-500/20 backdrop-blur-sm border border-[#3D2B4C]/20 flex items-center justify-center text-xl"
                style={{ rotate: "-8deg" }}
              >
                👗
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7D767A] dark:text-gray-500"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
