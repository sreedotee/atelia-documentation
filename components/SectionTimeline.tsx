"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
  id: string;
  label: string;
  nested?: boolean;
}

const SECTIONS: Section[] = [
  { id: "overview", label: "Overview" },
  { id: "brief", label: "Brief & Challenge" },
  { id: "research", label: "Research & Approach" },
  { id: "competitive-landscape", label: "Competitive Landscape" },
  { id: "opportunity", label: "Strategic Opportunity" },
  { id: "user-research", label: "User Research" },
  { id: "card-sorting", label: "Card Sorting" },
  { id: "jobs", label: "Jobs-to-be-Done" },
  { id: "framework", label: "Three Modes" },
  { id: "language", label: "Design Language" },
  { id: "mode1-designs", label: "Mode 1: BEFORE", nested: true },
  { id: "decisions-mode1", label: "Decisions · Mode 1", nested: true },
  { id: "mode2-designs", label: "Mode 2: DURING", nested: true },
  { id: "decisions-mode2", label: "Decisions · Mode 2", nested: true },
  { id: "mode3-designs", label: "Mode 3: AFTER", nested: true },
  { id: "decisions-mode3", label: "Decisions · Mode 3", nested: true },
  { id: "decisions-system", label: "System Decisions" },
  { id: "information-architecture", label: "Info Architecture" },
  { id: "design-system", label: "Design System" },
  { id: "validation", label: "Validation & Testing" },
  { id: "constraints", label: "Constraints" },
  { id: "reflection", label: "Reflection" },
  { id: "video", label: "Video Walkthrough" },
  { id: "prototype", label: "Prototype" },
];

export default function SectionTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // Track dark mode — watch for class changes on <html>
  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Track active section via scroll
  useEffect(() => {
    const update = () => {
      const threshold = window.innerHeight * 0.4;
      let current = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = i;
        }
      }
      setActiveIndex(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Theme-aware colors
  const accentColor = isDark ? "#a78bfa" : "#3D2B4C";
  const trackColor = isDark ? "#3D2B4C" : "#E0DCE0";
  const connectorDone = accentColor;
  const connectorPending = trackColor;

  return (
    <nav
      aria-label="Page sections"
      className="fixed z-40 hidden min-[1360px]:flex flex-col items-center"
      style={{ left: 24, top: "50%", transform: "translateY(-50%)" }}
    >
      {SECTIONS.map((section, i) => {
        const isCompleted = i < activeIndex;
        const isCurrent = i === activeIndex;
        const isNested = !!section.nested;

        // Dot and connector sizing
        const dotSize = isNested ? 7 : 10;
        const connectorH = isNested ? 7 : 10;

        // SVG arc math for the current-section indicator
        const r = dotSize / 2;
        const svgSize = dotSize + 4;
        const cx = svgSize / 2;
        const cy = svgSize / 2;
        const circumference = 2 * Math.PI * r;
        const arcLength = circumference * 0.72;

        return (
          <div
            key={section.id}
            className="flex flex-col items-center"
            style={{ marginLeft: isNested ? 4 : 0 }}
          >
            {/* Dot button */}
            <button
              onClick={() => scrollTo(section.id)}
              className="relative group flex items-center justify-center"
              style={{ width: dotSize + 8, height: dotSize + 8 }}
              aria-label={section.label}
            >
              <AnimatePresence mode="wait">
                {/* Completed: filled circle with animated checkmark */}
                {isCompleted && (
                  <motion.div
                    key="done"
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="rounded-full flex items-center justify-center"
                    style={{ width: dotSize, height: dotSize, backgroundColor: accentColor }}
                  >
                    <svg
                      width={Math.round(dotSize * 0.6)}
                      height={Math.round(dotSize * 0.6)}
                      viewBox="0 0 8 7"
                      fill="none"
                    >
                      <motion.path
                        d="M1 3.5L3 5.5L7 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.25 }}
                      />
                    </svg>
                  </motion.div>
                )}

                {/* Current: partially filled arc */}
                {isCurrent && (
                  <motion.svg
                    key="active"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                    width={svgSize}
                    height={svgSize}
                    viewBox={`0 0 ${svgSize} ${svgSize}`}
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    {/* Track */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill="none"
                      stroke={trackColor}
                      strokeWidth="1.5"
                    />
                    {/* Progress arc */}
                    <motion.circle
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill="none"
                      stroke={accentColor}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: circumference - arcLength }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </motion.svg>
                )}

                {/* Upcoming: empty circle */}
                {!isCompleted && !isCurrent && (
                  <motion.div
                    key="upcoming"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="rounded-full"
                    style={{
                      width: dotSize,
                      height: dotSize,
                      border: `1.5px solid ${trackColor}`,
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Hover tooltip */}
              <span className="absolute left-full ml-3 px-2 py-1 rounded-md bg-[#1D1A1C] dark:bg-[#2a1e36] text-white text-[11px] leading-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none shadow-lg">
                {section.label}
              </span>
            </button>

            {/* Connector line */}
            {i < SECTIONS.length - 1 && (
              <motion.div
                style={{ width: 2, height: connectorH }}
                animate={{
                  backgroundColor: isCompleted ? connectorDone : connectorPending,
                }}
                transition={{ duration: 0.35 }}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
