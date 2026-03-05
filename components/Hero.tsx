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
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(160deg, #ffffff 0%, #FAF9FA 50%, #f0ebf5 100%)",
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
              <span style={{
                display: "flex",
                padding: "10px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "999px",
                border: "1px solid var(--BRANDCOLOUR-primary-800, #3D2B4C)",
                background: "var(--gray-100, #F5F3F4)",
              }}>
                iOS App Design
              </span>
              <span style={{
                display: "flex",
                padding: "10px 40px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "999px",
                border: "1px solid var(--BRANDCOLOUR-primary-800, #3D2B4C)",
                background: "var(--gray-100, #F5F3F4)",
              }}>
                2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-clash text-[72px] md:text-[120px] lg:text-[200px] font-medium text-[#1D1A1C] leading-[1.05] mb-4"
            >
              Atelia
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-clash font-light text-lg md:text-xl lg:text-[25px] text-[#3D2B4C] leading-snug mb-6"
            >
              AI Virtual Try-On for Confident Shopping
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-sans text-[17px] lg:text-[20px] text-[#7D767A] leading-relaxed mb-10 max-w-xl line-clamp-3"
            >
              Atelia combines universal item saving with AI virtual try-on, helping online shoppers visualize outfits from any store on their body before buying.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10"
            >
              {[
                { label: "Role", value: "Product Designer" },
                { label: "Duration", value: "6 weeks" },
                { label: "Scope", value: "Solo project" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs font-medium text-[#7D767A] uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="font-clash text-lg font-normal text-[#1D1A1C]">
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
                className="px-6 py-3 bg-[#3D2B4C] text-white font-medium hover:bg-[#2a1e36] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Read Case Study ↓
              </a>
              <a
                href="#video"
                className="px-6 py-3 bg-white text-[#3D2B4C] border border-[#E8E5E6] font-medium hover:border-[#3D2B4C] transition-all hover:-translate-y-0.5"
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
                <img
                  src="/images/atelia-logo.svg"
                  alt="Atelia app screen"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#2a1e36] rounded-b-2xl z-10" />
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -right-8 top-20 w-16 h-16 rounded-2xl bg-[#3D2B4C]/20 backdrop-blur-sm border border-[#3D2B4C]/20 flex items-center justify-center text-2xl"
                style={{ rotate: "12deg" }}
              >
                ✨
              </div>
              <div
                className="absolute -left-6 bottom-20 w-12 h-12 rounded-xl bg-[#3D2B4C]/20 backdrop-blur-sm border border-[#3D2B4C]/20 flex items-center justify-center text-xl"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7D767A]"
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
