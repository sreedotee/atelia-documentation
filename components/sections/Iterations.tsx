"use client";

import { motion } from "framer-motion";

const iterations = [
  {
    version: "VERSION 01",
    title: "Calendar-First Approach",
    date: "December 2024",
    description:
      "Initial version focused on outfit scheduling—users would plan what to wear each day, like the Stylebook app.",
    wrong: [
      "Too niche—only power users with large wardrobes would use this",
      "Didn't solve the core shopping problem (purchase uncertainty)",
      "Calendar metaphor added complexity without clear value",
      "Research showed users don't plan outfits days in advance",
    ],
    type: "wrong" as const,
  },
  {
    version: "VERSION 02",
    title: "Social-First Approach",
    date: "December 2024",
    description:
      "Second version emphasized social sharing—users would send outfits to friends for feedback before buying.",
    wrong: [
      "Social features became the focus instead of the core value (try-on)",
      "Building a social network is different product DNA entirely",
      "Virtual try-on itself should reduce need for external validation",
      "Added friction—users want instant answers, not async feedback",
    ],
    type: "wrong" as const,
  },
  {
    version: "VERSION 03",
    title: "Final Direction: Shopping Context",
    date: "January 2025",
    description:
      "Final version focused purely on shopping behavior—save items from any store, try on, make confident purchase decisions.",
    right: [
      "Solves a universal problem (purchase uncertainty affects all shoppers)",
      "Clear value prop for both consumers and retailers",
      "Market gap—no universal cross-store solution exists",
      "Focus on utility, not entertainment or social status",
    ],
    type: "right" as const,
  },
];

export default function Iterations() {
  return (
    <section id="iterations" style={{ padding: "160px 80px", background: "#FAFAFA" }}>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontSize: 11,
          letterSpacing: "1.5px",
          color: "#A3A3A3",
          fontWeight: 500,
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        05 — Iterations
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="font-clash"
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 500,
          lineHeight: 1.2,
          color: "#000",
          marginBottom: 60,
        }}
      >
        What Didn&#39;t Work
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {iterations.map((iter, i) => (
          <div key={iter.version}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              style={{ maxWidth: 800, paddingBottom: 80 }}
            >
              {/* Version header */}
              <div style={{ marginBottom: 32 }}>
                <p
                  style={{
                    fontSize: 11,
                    color: "#A3A3A3",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {iter.version}
                </p>
                <h3
                  className="font-clash"
                  style={{
                    fontSize: 28,
                    fontWeight: 500,
                    color: "#000",
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}
                >
                  {iter.title}
                </h3>
                <p style={{ fontSize: 13, color: "#737373" }}>{iter.date}</p>
              </div>

              {/* Screen placeholder */}
              <div
                style={{
                  width: "100%",
                  maxWidth: 600,
                  height: 200,
                  background: "#F5F5F5",
                  border: "1px solid #E5E5E5",
                  marginBottom: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: 12, color: "#A3A3A3", letterSpacing: "1px", textTransform: "uppercase" }}>
                  {iter.version} Screens
                </p>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#525252",
                  marginBottom: 24,
                  maxWidth: 680,
                }}
              >
                {iter.description}
              </p>

              {/* What went wrong / right */}
              <div>
                <p
                  style={{
                    fontSize: 11,
                    color: iter.type === "right" ? "#000" : "#A3A3A3",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
                  {iter.type === "right" ? "WHY THIS WORKED" : "WHAT WENT WRONG"}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {(iter.wrong || iter.right || []).map((point) => (
                    <li
                      key={point}
                      style={{
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "#525252",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                      }}
                    >
                      <span style={{ color: iter.type === "right" ? "#000" : "#A3A3A3", flexShrink: 0 }}>
                        {iter.type === "right" ? "✓" : "×"}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Divider between iterations */}
            {i < iterations.length - 1 && (
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "#E5E5E5",
                  marginBottom: 80,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
