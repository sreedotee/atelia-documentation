"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

export default function BriefChallenge() {
  return (
    <section id="brief" className="bg-[#FAFAFA]" style={{ padding: "160px 80px" }}>
      <div style={{ maxWidth: 800 }}>
        <SectionHeader number="02" title="The Brief & Challenge" />

        <motion.div {...fadeInUp} className="mb-12 max-w-3xl">
          <p className="text-xl text-[#525252] leading-relaxed">
            The starting point was simple:{" "}
            <em>"Create a mobile app that uses AI to generate outfit visualizations from clothing items."</em>
          </p>
          <p className="text-xl text-[#525252] leading-relaxed mt-4">
            But the real challenge was strategic:{" "}
            <strong className="text-[#171717]">
              Where does this technology create the most value?
            </strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "The Question",
              content:
                "Virtual try-on technology exists—but for what purpose? Where does it solve real problems?",
              highlight: false,
            },
            {
              title: "My Approach",
              content:
                "Research existing solutions → Identify use case gaps → Define strategic opportunity → Design for that context",
              highlight: true,
            },
            {
              title: "The Outcome",
              content:
                "A shopping companion that helps users make confident purchase decisions across any retailer.",
              highlight: false,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${
                card.highlight
                  ? "bg-[#000000] text-white"
                  : "bg-white border border-[#E5E5E5]"
              } hover:shadow-lg transition-shadow`}
            >
              <h3
                className={`font-clash text-xl font-semibold mb-4 ${
                  card.highlight ? "text-white" : "text-[#171717]"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  card.highlight ? "text-gray-300" : "text-[#525252]"
                }`}
              >
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
