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
    "Navigation & IA": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    "Interaction Patterns": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    "Visual Design": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    "Product Decisions": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    "Product Strategy": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
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
            className="bg-white dark:bg-[#1e1530] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            {/* Progress bar */}
            <div className="h-1 bg-[#E8E5E6] dark:bg-[#3D2B4C]/50 rounded-t-2xl">
              <motion.div
                className="h-1 bg-[#3D2B4C] rounded-t-2xl"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-[#1e1530] px-8 pt-6 pb-4 border-b border-[#E8E5E6] dark:border-[#3D2B4C]/50 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={onPrev}
                  className="w-8 h-8 rounded-full border border-[#E8E5E6] dark:border-[#3D2B4C] flex items-center justify-center text-[#5C5759] dark:text-gray-400 hover:bg-[#3D2B4C] hover:text-white hover:border-[#3D2B4C] transition-all"
                  aria-label="Previous decision"
                >
                  ←
                </button>
                <button
                  onClick={onNext}
                  className="w-8 h-8 rounded-full border border-[#E8E5E6] dark:border-[#3D2B4C] flex items-center justify-center text-[#5C5759] dark:text-gray-400 hover:bg-[#3D2B4C] hover:text-white hover:border-[#3D2B4C] transition-all"
                  aria-label="Next decision"
                >
                  →
                </button>
                <span className="text-xs text-[#7D767A] dark:text-gray-500 ml-2">
                  {currentIndex + 1} of {total}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#E8E5E6] dark:bg-[#3D2B4C]/50 flex items-center justify-center text-[#5C5759] dark:text-gray-400 hover:bg-[#3D2B4C] hover:text-white transition-all text-lg"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-6 space-y-6">
              {/* Title + Category */}
              <div>
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${catColor}`}>
                  {decision.category}
                </span>
                <h3 className="font-clash text-2xl md:text-3xl font-semibold text-[#1D1A1C] dark:text-white">
                  {decision.title}
                </h3>
              </div>

              <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/50" />

              {/* Context */}
              <div>
                <p className="text-xs font-medium tracking-widest text-[#7D767A] dark:text-gray-500 uppercase mb-2">
                  Context
                </p>
                <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed">
                  {decision.context}
                </p>
              </div>

              {/* Options */}
              <div>
                <p className="text-xs font-medium tracking-widest text-[#7D767A] dark:text-gray-500 uppercase mb-3">
                  Options Considered
                </p>
                <div className="space-y-3">
                  {decision.options.map((option) => (
                    <div
                      key={option.id}
                      className={`rounded-xl p-4 flex items-start gap-4 transition-all ${
                        option.chosen
                          ? "bg-[#3D2B4C] text-white"
                          : "bg-[#FAF9FA] dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/50"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-clash font-semibold text-sm shrink-0 ${
                          option.chosen
                            ? "bg-white/20 text-white"
                            : "bg-[#E8E5E6] dark:bg-[#3D2B4C]/50 text-[#5C5759] dark:text-gray-400"
                        }`}
                      >
                        {option.letter}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${option.chosen ? "text-white" : "text-[#1D1A1C] dark:text-white"}`}>
                          {option.text}
                        </p>
                        {(option.pros || option.cons) && (
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                            {option.pros && (
                              <span className={`text-xs ${option.chosen ? "text-green-200" : "text-green-600 dark:text-green-400"}`}>
                                ✓ {option.pros}
                              </span>
                            )}
                            {option.cons && (
                              <span className={`text-xs ${option.chosen ? "text-red-200" : "text-red-500 dark:text-red-400"}`}>
                                ✗ {option.cons}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      {option.chosen && (
                        <span className="text-green-300 text-lg shrink-0">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Rationale */}
              <div>
                <p className="text-xs font-medium tracking-widest text-[#7D767A] dark:text-gray-500 uppercase mb-2">
                  Rationale
                </p>
                <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed">
                  {decision.rationale}
                </p>
              </div>

              {/* Impact */}
              <div className="bg-[#3D2B4C]/5 dark:bg-[#3D2B4C]/20 rounded-xl p-5 border-l-4 border-[#3D2B4C]">
                <p className="text-xs font-medium tracking-widest text-[#3D2B4C] dark:text-purple-400 uppercase mb-2">
                  Impact
                </p>
                <p className="text-[#1D1A1C] dark:text-gray-200 leading-relaxed font-medium">
                  {decision.impact}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 border-t border-[#E8E5E6] dark:border-[#3D2B4C]/50 flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={onPrev}
                  className="text-sm text-[#5C5759] dark:text-gray-400 hover:text-[#3D2B4C] dark:hover:text-purple-300 transition-colors flex items-center gap-1"
                >
                  ← Previous
                </button>
                <button
                  onClick={onNext}
                  className="text-sm text-[#5C5759] dark:text-gray-400 hover:text-[#3D2B4C] dark:hover:text-purple-300 transition-colors flex items-center gap-1"
                >
                  Next →
                </button>
              </div>
              <p className="text-xs text-[#7D767A] dark:text-gray-500">
                Use ← → keys to navigate
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
