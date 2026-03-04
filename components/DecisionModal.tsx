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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!decision) return null;

  const categoryColors: Record<string, string> = {
    "Navigation & IA": "bg-[#EAF0F7] text-[#3A5A80]",
    "Interaction Patterns": "bg-[#EAF2EC] text-[#3A6349]",
    "Visual Design": "bg-[#EFE9F5] text-[#6B4A8A]",
    "Product Decisions": "bg-[#F5EEE5] text-[#8A5A30]",
    "Product Strategy": "bg-[#F5E9ED] text-[#8A3E55]",
  };

  const catColor = categoryColors[decision.category] || "bg-gray-100 text-gray-700";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            {/* Progress bar */}
            <div className="h-1 bg-[#E8E5E6] rounded-t-2xl">
              <motion.div
                className="h-1 bg-[#3D2B4C] rounded-t-2xl"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Header */}
            <div className="sticky top-0 bg-white px-8 pt-6 pb-4 border-b border-[#E8E5E6] flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={onPrev}
                  className="w-8 h-8 rounded-full border border-[#E8E5E6] flex items-center justify-center text-[#5C5759] hover:bg-[#3D2B4C] hover:text-white hover:border-[#3D2B4C] transition-all"
                  aria-label="Previous decision"
                >
                  ←
                </button>
                <button
                  onClick={onNext}
                  className="w-8 h-8 rounded-full border border-[#E8E5E6] flex items-center justify-center text-[#5C5759] hover:bg-[#3D2B4C] hover:text-white hover:border-[#3D2B4C] transition-all"
                  aria-label="Next decision"
                >
                  →
                </button>
                <span className="text-xs text-[#7D767A] ml-2">
                  {currentIndex + 1} of {total}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#E8E5E6] flex items-center justify-center text-[#5C5759] hover:bg-[#3D2B4C] hover:text-white transition-all text-lg"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-6">
              {/* Title + Category */}
              <div>
                <span className={`inline-block text-xs font-medium px-6 py-2 rounded-full mb-3 ${catColor}`}>
                  {decision.category}
                </span>
                <h3 className="font-clash text-2xl md:text-3xl font-semibold text-[#1D1A1C]">
                  {decision.title}
                </h3>
              </div>

              <div className="h-px bg-[#E8E5E6]" />

              {/* Context */}
              <div>
                <p className="text-xs font-medium tracking-widest text-[#7D767A] uppercase mb-2">
                  Context
                </p>
                <p className="text-[#5C5759] leading-relaxed">
                  {decision.context}
                </p>
              </div>

              {/* Options */}
              <div>
                <p className="text-xs font-medium tracking-widest text-[#7D767A] uppercase mb-3">
                  Options Considered
                </p>
                <div className="space-y-3">
                  {decision.options.map((option) => (
                    <div
                      key={option.id}
                      className={`rounded-xl p-4 flex items-center gap-4 transition-all ${
                        option.chosen
                          ? "bg-[#3D2B4C] text-white"
                          : "bg-[#FAF9FA] border border-[#E8E5E6]"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-clash font-semibold text-sm shrink-0 ${
                          option.chosen
                            ? "bg-white/20 text-white"
                            : "bg-[#E8E5E6] text-[#5C5759]"
                        }`}
                      >
                        {option.letter}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${option.chosen ? "text-white" : "text-[#1D1A1C]"}`}>
                          {option.text}
                        </p>
                        {(option.pros || option.cons) && (
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                            {option.pros && (
                              <span className={`text-xs ${option.chosen ? "text-[#A8C5B5]" : "text-[#4A7060]"}`}>
                                ✓ {option.pros}
                              </span>
                            )}
                            {option.cons && (
                              <span className={`text-xs ${option.chosen ? "text-[#C5A8A8]" : "text-[#8C4A4A]"}`}>
                                ✗ {option.cons}
                              </span>
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
                <p className="text-xs font-medium tracking-widest text-[#7D767A] uppercase mb-2">
                  Rationale
                </p>
                <p className="text-[#5C5759] leading-relaxed">
                  {decision.rationale}
                </p>
              </div>

              {/* Impact */}
              <div className="bg-[#3D2B4C]/5 rounded-xl p-5 border-l-4 border-[#3D2B4C]">
                <p className="text-xs font-medium tracking-widest text-[#3D2B4C] uppercase mb-2">
                  Impact
                </p>
                <p className="text-[#1D1A1C] leading-relaxed font-medium">
                  {decision.impact}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-[#E8E5E6] flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={onPrev}
                  className="text-sm text-[#5C5759] hover:text-[#3D2B4C] transition-colors flex items-center gap-1"
                >
                  ← Previous
                </button>
                <button
                  onClick={onNext}
                  className="text-sm text-[#5C5759] hover:text-[#3D2B4C] transition-colors flex items-center gap-1"
                >
                  Next →
                </button>
              </div>
              <p className="text-xs text-[#7D767A]">
                Use ← → keys to navigate
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
