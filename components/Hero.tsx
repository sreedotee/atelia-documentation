"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#FAFAFA",
        padding: "0 80px",
      }}
    >
      <div style={{ maxWidth: 800 }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontSize: 11,
            letterSpacing: "1.5px",
            color: "#737373",
            fontWeight: 500,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Product Design · 2025
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-clash"
          style={{
            fontSize: "clamp(72px, 10vw, 96px)",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "#000",
            marginBottom: 24,
          }}
        >
          Atelia
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontSize: 20,
            color: "#525252",
            lineHeight: 1.4,
            marginBottom: 24,
            maxWidth: 600,
          }}
        >
          AI virtual try-on for confident shopping across any retailer
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#737373",
            marginBottom: 60,
            maxWidth: 600,
          }}
        >
          A strategic exploration of where AI try-on technology creates value—combining
          universal item saving with realistic visualization to reduce purchase uncertainty.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: "flex", gap: 48, fontSize: 13 }}
        >
          {[
            { label: "Duration", value: "6 weeks" },
            { label: "Screens", value: "72" },
            { label: "Decisions", value: "27 documented" },
          ].map((stat) => (
            <div key={stat.label}>
              <p style={{ color: "#A3A3A3", marginBottom: 4 }}>{stat.label}</p>
              <p style={{ color: "#000", fontWeight: 500 }}>{stat.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: 80, display: "flex", alignItems: "center", gap: 12 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A3A3A3" strokeWidth="1.5">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </motion.div>
          <span style={{ fontSize: 11, letterSpacing: "1.5px", color: "#A3A3A3", textTransform: "uppercase" }}>
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
