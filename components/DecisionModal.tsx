"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Decision } from "@/data/decisions";

interface DecisionModalProps {
  decision: Decision | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

export default function DecisionModal({
  decision,
  isOpen,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  total,
}: DecisionModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!decision) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "#FFFFFF",
              width: "100%",
              maxWidth: 720,
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            {/* Progress bar top */}
            <div style={{ height: 2, background: "#E5E5E5" }}>
              <motion.div
                style={{ height: 2, background: "#000" }}
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Header */}
            <div
              style={{
                position: "sticky",
                top: 0,
                background: "#FFFFFF",
                padding: "32px 48px 24px",
                borderBottom: "1px solid #E5E5E5",
                zIndex: 10,
              }}
            >
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  width: 32,
                  height: 32,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 18,
                  color: "#737373",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Close"
              >
                ✕
              </button>

              <p
                style={{
                  fontSize: 11,
                  color: "#A3A3A3",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                DECISION {currentIndex + 1} OF {total}
              </p>

              <h3
                className="font-clash"
                style={{
                  fontSize: 28,
                  fontWeight: 500,
                  lineHeight: 1.2,
                  color: "#000",
                  marginBottom: 8,
                  paddingRight: 40,
                }}
              >
                {decision.title}
              </h3>

              <p style={{ fontSize: 12, color: "#737373" }}>{decision.category}</p>
            </div>

            {/* Body */}
            <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", gap: 36 }}>
              {/* Context */}
              <div>
                <p
                  style={{
                    fontSize: 11,
                    color: "#A3A3A3",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 14,
                    fontWeight: 500,
                  }}
                >
                  CONTEXT
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#525252" }}>
                  {decision.context}
                </p>
              </div>

              <div style={{ height: 1, background: "#E5E5E5" }} />

              {/* Options */}
              <div>
                <p
                  style={{
                    fontSize: 11,
                    color: "#A3A3A3",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
                  OPTIONS CONSIDERED
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {decision.options.map((option) => (
                    <div
                      key={option.id}
                      style={{
                        border: option.chosen ? "2px solid #000" : "1px solid #E5E5E5",
                        background: option.chosen ? "#FAFAFA" : "#FFFFFF",
                        padding: "16px 20px",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          color: option.chosen ? "#000" : "#A3A3A3",
                          fontWeight: 500,
                          flexShrink: 0,
                          marginTop: 2,
                          letterSpacing: "0.5px",
                        }}
                      >
                        {option.letter}
                      </span>
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            fontSize: 15,
                            color: "#000",
                            fontWeight: option.chosen ? 500 : 400,
                          }}
                        >
                          {option.text}
                          {option.chosen && (
                            <span style={{ marginLeft: 8, fontSize: 13, color: "#737373" }}>✓</span>
                          )}
                        </p>
                        {(option.pros || option.cons) && (
                          <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap" }}>
                            {option.pros && (
                              <span style={{ fontSize: 12, color: "#525252" }}>+ {option.pros}</span>
                            )}
                            {option.cons && (
                              <span style={{ fontSize: 12, color: "#A3A3A3" }}>− {option.cons}</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rationale */}
              <div>
                <p
                  style={{
                    fontSize: 11,
                    color: "#A3A3A3",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 14,
                    fontWeight: 500,
                  }}
                >
                  RATIONALE
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#525252" }}>
                  {decision.rationale}
                </p>
              </div>

              {/* Impact */}
              <div style={{ borderLeft: "2px solid #000", paddingLeft: 24 }}>
                <p
                  style={{
                    fontSize: 11,
                    color: "#000",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 14,
                    fontWeight: 500,
                  }}
                >
                  IMPACT
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "#171717", fontWeight: 500 }}>
                  {decision.impact}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "20px 48px",
                borderTop: "1px solid #E5E5E5",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", gap: 24 }}>
                <button
                  onClick={onPrev}
                  style={{ fontSize: 13, color: "#737373", background: "none", border: "none", cursor: "pointer" }}
                >
                  ← Previous
                </button>
                <button
                  onClick={onNext}
                  style={{ fontSize: 13, color: "#737373", background: "none", border: "none", cursor: "pointer" }}
                >
                  Next →
                </button>
              </div>
              <p style={{ fontSize: 11, color: "#A3A3A3" }}>Use ← → keys to navigate</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
