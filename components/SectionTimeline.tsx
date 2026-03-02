"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
  id: string;
  label: string;
  number: string;
  nested?: boolean;
}

const SECTIONS: Section[] = [
  { id: "overview",                label: "Overview",               number: "01" },
  { id: "research",                label: "Research & Approach",     number: "02" },
  { id: "competitive-landscape",   label: "Competitive Landscape",   number: "03" },
  { id: "opportunity",             label: "Strategic Opportunity",   number: "04" },
  { id: "user-research",           label: "User Research",           number: "05" },
  { id: "card-sorting",            label: "Card Sorting",            number: "06" },
  { id: "jobs",                    label: "Jobs-to-be-Done",         number: "07" },
  { id: "framework",               label: "Three Modes",             number: "08" },
  { id: "language",                label: "Design Language",         number: "09" },
  { id: "problem-evolution",       label: "Problem Evolution",       number: "10" },
  { id: "iterations",              label: "Iterations",              number: "11" },
  { id: "mode1-designs",           label: "Mode 1: BEFORE",         number: "12", nested: true },
  { id: "decisions-mode1",         label: "Decisions · Mode 1",     number: "13", nested: true },
  { id: "mode2-designs",           label: "Mode 2: DURING",         number: "14", nested: true },
  { id: "decisions-mode2",         label: "Decisions · Mode 2",     number: "15", nested: true },
  { id: "mode3-designs",           label: "Mode 3: AFTER",          number: "16", nested: true },
  { id: "decisions-mode3",         label: "Decisions · Mode 3",     number: "17", nested: true },
  { id: "decisions-system",        label: "System Decisions",        number: "18" },
  { id: "information-architecture",label: "Info Architecture",       number: "19" },
  { id: "design-system",           label: "Design System",           number: "20" },
  { id: "validation",              label: "Validation & Testing",    number: "21" },
  { id: "monetization",            label: "Business Model",          number: "22" },
  { id: "constraints",             label: "Constraints",             number: "23" },
  { id: "reflection",              label: "Reflection",              number: "24" },
  { id: "video",                   label: "Video Walkthrough",       number: "25" },
  { id: "prototype",               label: "Prototype",               number: "26" },
];

// Dot sizes: main 13px, nested 9px
// Dot wrapper: w-4 (16px) so center is 8px from wrapper edge
// Button: pr-4 (16px) → dot center = 16+8 = 24px from sidebar right edge
// Line positioned at right: 23px (centers 2px line at 24px from right)
const LINE_RIGHT = 23;

const accent = "#3D2B4C";
const track  = "#DDD9DE";

function SectionDot({
  isCompleted,
  isCurrent,
  dotSize,
}: {
  isCompleted: boolean;
  isCurrent: boolean;
  dotSize: number;
}) {
  const r = dotSize / 2;
  const svgSize = dotSize + 4;
  const cx = svgSize / 2;
  const cy = svgSize / 2;
  const circ = 2 * Math.PI * r;
  const arc = circ * 0.72;

  return (
    <AnimatePresence mode="wait">
      {isCompleted && (
        <motion.div
          key="done"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.3, opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="rounded-full flex items-center justify-center"
          style={{ width: dotSize, height: dotSize, backgroundColor: accent }}
        >
          <svg
            width={Math.round(dotSize * 0.58)}
            height={Math.round(dotSize * 0.58)}
            viewBox="0 0 8 7"
            fill="none"
          >
            <motion.path
              d="M1 3.5L3 5.5L7 1"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.28 }}
            />
          </svg>
        </motion.div>
      )}

      {isCurrent && (
        <motion.svg
          key="active"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={track} strokeWidth="1.5" />
          <motion.circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={{ strokeDashoffset: circ - arc }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.svg>
      )}

      {!isCompleted && !isCurrent && (
        <motion.div
          key="upcoming"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="rounded-full"
          style={{ width: dotSize, height: dotSize, border: `1.5px solid ${track}` }}
        />
      )}
    </AnimatePresence>
  );
}

export default function SectionTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-based active section tracking
  useEffect(() => {
    const update = () => {
      const threshold = window.innerHeight * 0.4;
      let current = 0;
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.getBoundingClientRect().top <= threshold) current = i;
      }
      setActiveIndex(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <aside className="fixed left-0 top-0 h-screen z-50 w-[220px] hidden lg:flex flex-col bg-white border-r border-[#ECEAED] shadow-[2px_0_20px_rgba(0,0,0,0.07)]">

      {/* Brand header */}
      <div className="px-5 pt-6 pb-5 flex-shrink-0">
        <p className="font-clash text-[18px] font-semibold text-[#3D2B4C] leading-none">
          Atelia
        </p>
        <p className="text-[10.5px] text-[#A498AB] mt-[5px] tracking-[0.06em] uppercase">
          Product Design Case Study
        </p>
      </div>

      <div className="mx-5 h-px bg-[#ECEAED] flex-shrink-0" />

      {/* Sections — scrollable */}
      <nav
        className="flex-1 overflow-y-auto py-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
      >
        {SECTIONS.map((section, i) => {
          const isCompleted = i < activeIndex;
          const isCurrent  = i === activeIndex;
          const isNested   = !!section.nested;
          const dotSize    = isNested ? 9 : 13;

          // Vertical line coloring
          const topColor    = i <= activeIndex ? accent : track;
          const bottomColor = i  < activeIndex ? accent : track;

          // Text colors
          const numColor = isCurrent
            ? accent
            : isCompleted
            ? "#B0A5B8"
            : "#D0CAD4";

          const nameColor = isCurrent
            ? "#1D1A1C"
            : isCompleted
            ? "#8A7E92"
            : "#C8C2CC";

          return (
            <div key={section.id} className="relative">
              {/* Line: top half (connects from previous dot to center of this dot) */}
              {i > 0 && (
                <div
                  className="absolute w-[2px] top-0"
                  style={{
                    right: LINE_RIGHT,
                    height: "50%",
                    backgroundColor: topColor,
                    transition: "background-color 0.3s",
                  }}
                />
              )}
              {/* Line: bottom half (connects from center of this dot to next dot) */}
              {i < SECTIONS.length - 1 && (
                <div
                  className="absolute w-[2px]"
                  style={{
                    right: LINE_RIGHT,
                    top: "50%",
                    height: "50%",
                    backgroundColor: bottomColor,
                    transition: "background-color 0.3s",
                  }}
                />
              )}

              {/* Row */}
              <button
                onClick={() => scrollTo(section.id)}
                className={`relative w-full flex items-center gap-0 text-left transition-colors duration-150
                  hover:bg-[#F7F5F8]
                  ${isCurrent ? "bg-[#F4F1F6]" : ""}
                  ${isNested ? "pl-7 pr-4 py-[9px]" : "pl-5 pr-4 py-[11px]"}`}
              >
                {/* Text */}
                <div className="flex-1 min-w-0 mr-3">
                  <p
                    className="text-[9.5px] font-mono tracking-[0.12em] mb-[3px]"
                    style={{ color: numColor, transition: "color 0.2s" }}
                  >
                    {section.number}
                  </p>
                  <p
                    className={`leading-[1.25] ${
                      isNested ? "text-[11px]" : "text-[12.5px]"
                    } ${isCurrent && !isNested ? "font-semibold" : "font-medium"}`}
                    style={{ color: nameColor, transition: "color 0.2s" }}
                  >
                    {section.label}
                  </p>
                </div>

                {/* Dot (sits on top of the line via z-index from stacking context) */}
                <div className="relative z-10 flex-shrink-0 w-4 flex items-center justify-center">
                  <SectionDot
                    isCompleted={isCompleted}
                    isCurrent={isCurrent}
                    dotSize={dotSize}
                  />
                </div>
              </button>
            </div>
          );
        })}
      </nav>

      <div className="mx-5 h-px bg-[#ECEAED] flex-shrink-0" />
    </aside>
  );
}
