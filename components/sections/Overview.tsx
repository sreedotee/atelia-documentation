"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp, staggerContainer, staggerItem } from "@/styles/animations";

export default function Overview() {
  return (
    <section id="overview" className="bg-white" style={{ padding: "160px 80px" }}>
      <div style={{ maxWidth: 800 }}>
        <SectionHeader number="01" title="Overview" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div {...fadeInUp} className="space-y-8">
            <div>
              <h3 className="font-clash text-2xl font-semibold text-[#171717] mb-3">
                The Brief
              </h3>
              <p className="text-[#525252] text-lg leading-relaxed italic border-l-4 border-black/30 pl-4">
                "Create a mobile app that uses AI to generate outfit visualizations from clothing items."
              </p>
            </div>

            <div>
              <h3 className="font-clash text-2xl font-semibold text-[#171717] mb-3">
                The Challenge
              </h3>
              <p className="text-[#525252] text-lg leading-relaxed">
                Virtual try-on technology exists—but where does it create the most value? I needed
                to find the right problem to solve.
              </p>
            </div>

            <div>
              <h3 className="font-clash text-2xl font-semibold text-[#171717] mb-3">
                My Approach
              </h3>
              <ul className="space-y-2">
                {[
                  "Research existing solutions",
                  "Identify use case gaps",
                  "Define strategic opportunity",
                  "Design for that context",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#525252]">
                    <span className="w-6 h-6 rounded-full bg-black/10 text-black flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-clash text-2xl font-semibold text-[#171717]">
              The Outcome
            </h3>
            <p className="text-[#525252] text-lg leading-relaxed">
              A shopping companion that helps users make confident purchase decisions across any
              retailer by combining:
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "📱",
                  title: "Universal Saving",
                  desc: "Paste links from any store to build collections",
                },
                {
                  icon: "✨",
                  title: "AI Virtual Try-On",
                  desc: "See how items look on your body before buying",
                },
                {
                  icon: "🗂️",
                  title: "Occasion-Based Organization",
                  desc: "Collections for vacation, work, events—not item types",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5]"
                >
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <p className="font-semibold text-[#171717]">{f.title}</p>
                    <p className="text-[#525252] text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { number: "30%", label: "Online fashion return rate" },
                { number: "5/5", label: "Users validated core concept" },
              ].map((m) => (
                <div
                  key={m.number}
                  className="p-5 rounded-xl bg-[#000000] text-white"
                >
                  <p className="font-clash text-4xl font-bold mb-1">{m.number}</p>
                  <p className="text-gray-300 text-sm">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
