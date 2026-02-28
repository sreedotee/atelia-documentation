"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { decisions, decisionsByMode } from "@/data/decisions";
import DecisionModal from "./DecisionModal";

interface DesignWhiteboardProps {
  mode: "mode1" | "mode2" | "mode3" | "system";
  sectionNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

const modeDecisionIds: Record<string, string[]> = {
  mode1: decisionsByMode.mode1,
  mode2: decisionsByMode.mode2,
  mode3: decisionsByMode.mode3,
  system: decisionsByMode.system,
};

const modeLabels: Record<string, string> = {
  mode1: "MODE 1: BEFORE (Collecting)",
  mode2: "MODE 2: DURING (Creating)",
  mode3: "MODE 3: AFTER (Reviewing)",
  system: "SYSTEM-LEVEL",
};

export default function DesignWhiteboard({
  mode,
  sectionNumber,
  subtitle,
  description,
}: DesignWhiteboardProps) {
  const [openDecisionId, setOpenDecisionId] = useState<string | null>(null);

  const decisionIds = modeDecisionIds[mode] || [];
  const currentIndex = openDecisionId ? decisionIds.indexOf(openDecisionId) : -1;

  const openModal = (id: string) => setOpenDecisionId(id);
  const closeModal = () => setOpenDecisionId(null);

  const prevDecision = () => {
    if (currentIndex > 0) setOpenDecisionId(decisionIds[currentIndex - 1]);
    else setOpenDecisionId(decisionIds[decisionIds.length - 1]);
  };

  const nextDecision = () => {
    if (currentIndex < decisionIds.length - 1) setOpenDecisionId(decisionIds[currentIndex + 1]);
    else setOpenDecisionId(decisionIds[0]);
  };

  return (
    <section
      style={{ padding: "80px 80px", background: "#FFFFFF" }}
      id={`decisions-${mode}`}
    >
      {/* Group label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        style={{
          fontSize: 11,
          color: "#A3A3A3",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: 12,
        }}
      >
        {sectionNumber} — {modeLabels[mode]}
      </motion.p>

      {subtitle && (
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="font-clash"
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#000",
            marginBottom: 12,
          }}
        >
          {subtitle}
        </motion.h3>
      )}

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          fontSize: 15,
          color: "#737373",
          lineHeight: 1.7,
          maxWidth: 600,
          marginBottom: 40,
        }}
      >
        {description}
      </motion.p>

      {/* Decision cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mode === "system" ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
          gap: 16,
          maxWidth: 900,
        }}
      >
        {decisionIds.map((id, i) => {
          const decision = decisions[id];
          if (!decision) return null;

          return (
            <motion.button
              key={id}
              onClick={() => openModal(id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              viewport={{ once: true }}
              style={{
                textAlign: "left",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E5E5",
                  padding: "24px 20px",
                  minHeight: 130,
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#000";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#E5E5E5";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <p style={{ fontSize: 11, color: "#A3A3A3", marginBottom: 14 }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#000", lineHeight: 1.3, flex: 1 }}>
                  {decision.title}
                </p>
                <p style={{ fontSize: 11, color: "#A3A3A3", marginTop: 10 }}>
                  {decision.category}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Decision Modal */}
      <DecisionModal
        decision={openDecisionId ? decisions[openDecisionId] : null}
        isOpen={!!openDecisionId}
        onClose={closeModal}
        onPrev={prevDecision}
        onNext={nextDecision}
        currentIndex={currentIndex}
        total={decisionIds.length}
      />
    </section>
  );
}
