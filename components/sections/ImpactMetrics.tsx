"use client";

import { motion } from "framer-motion";

const metricColumns = [
  {
    label: "USER METRICS",
    metrics: [
      { name: "Save rate", target: "60%+ save ≥1 item/week" },
      { name: "Try-on usage", target: "40%+ before purchase" },
      { name: "Return reduction", target: "15% vs control" },
    ],
  },
  {
    label: "BUSINESS METRICS",
    metrics: [
      { name: "Conversion lift", target: "8–12% increase" },
      { name: "Average order value", target: "20%+ higher (outfits)" },
      { name: "Retention", target: "45% MAU" },
    ],
  },
  {
    label: "TECHNICAL METRICS",
    metrics: [
      { name: "Generation time", target: "<5s latency" },
      { name: "AI accuracy", target: "90%+ realistic" },
      { name: "Link parsing", target: "95%+ success" },
    ],
  },
];

export default function ImpactMetrics() {
  return (
    <section id="impact" style={{ padding: "160px 80px", background: "#FAFAFA" }}>
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
        09 — Impact
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
          marginBottom: 24,
        }}
      >
        Success Metrics
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          fontSize: 17,
          lineHeight: 1.8,
          color: "#525252",
          maxWidth: 680,
          marginBottom: 80,
        }}
      >
        If this were real, success would be measured across user adoption, business
        outcomes, and technical performance.
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 60,
          maxWidth: 800,
        }}
      >
        {metricColumns.map((col, i) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                fontSize: 11,
                color: "#A3A3A3",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: 32,
              }}
            >
              {col.label}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {col.metrics.map((metric) => (
                <div key={metric.name}>
                  <p style={{ fontSize: 15, fontWeight: 500, color: "#000", marginBottom: 6 }}>
                    {metric.name}
                  </p>
                  <p style={{ fontSize: 14, color: "#737373" }}>{metric.target}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
