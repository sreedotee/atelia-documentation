"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  fontWeight?: string;
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  centered = false,
  fontWeight = "font-medium",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <span className="text-xs font-medium tracking-widest text-[#3D2B4C] uppercase block mb-3">
        {number}
      </span>
      <h2 className={`font-clash text-4xl md:text-5xl ${fontWeight} text-[#1D1A1C] leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 font-clash text-lg md:text-xl lg:text-2xl text-[#5C5759]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
