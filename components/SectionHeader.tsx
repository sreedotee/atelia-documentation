"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {/* Section label */}
      <p
        style={{
          fontSize: 11,
          letterSpacing: "1.5px",
          color: "#A3A3A3",
          fontWeight: 500,
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        {number} — {title}
      </p>
      {subtitle && (
        <h2
          className="font-clash"
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.2,
            color: "#000",
            marginBottom: 24,
          }}
        >
          {subtitle}
        </h2>
      )}
    </motion.div>
  );
}
