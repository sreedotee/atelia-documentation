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
  { id: "jobs",                    label: "Jobs-to-be-Done",         number: "03" },
  { id: "framework",               label: "Three Modes",             number: "04" },
  { id: "language",                label: "Design Language",         number: "05" },
  { id: "problem-evolution",       label: "Problem Evolution",       number: "06" },
  { id: "iterations",              label: "Iterations",              number: "07" },
  { id: "mode1-designs",           label: "Mode 1: BEFORE",         number: "08", nested: true },
  { id: "decisions-mode1",         label: "Decisions · Mode 1",     number: "09", nested: true },
  { id: "mode2-designs",           label: "Mode 2: DURING",         number: "10", nested: true },
  { id: "decisions-mode2",         label: "Decisions · Mode 2",     number: "11", nested: true },
  { id: "mode3-designs",           label: "Mode 3: AFTER",          number: "12", nested: true },
  { id: "decisions-mode3",         label: "Decisions · Mode 3",     number: "13", nested: true },
  { id: "decisions-system",        label: "System Decisions",        number: "14" },
  { id: "information-architecture",label: "Info Architecture",       number: "15" },
  { id: "design-system",           label: "Design System",           number: "16" },
  { id: "validation",              label: "Validation & Testing",    number: "17" },
  { id: "monetization",            label: "Business Model",          number: "18" },
  { id: "constraints",             label: "Constraints",             number: "19" },
  { id: "reflection",              label: "Reflection",              number: "20" },
  { id: "video",                   label: "Video Walkthrough",       number: "21" },
  { id: "prototype",               label: "Prototype",               number: "22" },
];

// All DOM section IDs in page order, mapped to their visible SECTIONS index.
// Hidden sections (competitive-landscape, opportunity, user-research, card-sorting)
// map back to "research" (index 1) so its dot stays active while scrolling through them.
const SCROLL_MAP: { id: string; visibleIndex: number }[] = [
  { id: "overview",                visibleIndex: 0 },
  { id: "research",                visibleIndex: 1 },
  { id: "competitive-landscape",   visibleIndex: 1 },
  { id: "opportunity",             visibleIndex: 1 },
  { id: "user-research",           visibleIndex: 1 },
  { id: "card-sorting",            visibleIndex: 1 },
  { id: "jobs",                    visibleIndex: 2 },
  { id: "framework",               visibleIndex: 3 },
  { id: "language",                visibleIndex: 4 },
  { id: "problem-evolution",       visibleIndex: 5 },
  { id: "iterations",              visibleIndex: 6 },
  { id: "mode1-designs",           visibleIndex: 7 },
  { id: "decisions-mode1",         visibleIndex: 8 },
  { id: "mode2-designs",           visibleIndex: 9 },
  { id: "decisions-mode2",         visibleIndex: 10 },
  { id: "mode3-designs",           visibleIndex: 11 },
  { id: "decisions-mode3",         visibleIndex: 12 },
  { id: "decisions-system",        visibleIndex: 13 },
  { id: "information-architecture",visibleIndex: 14 },
  { id: "design-system",           visibleIndex: 15 },
  { id: "validation",              visibleIndex: 16 },
  { id: "monetization",            visibleIndex: 17 },
  { id: "constraints",             visibleIndex: 18 },
  { id: "reflection",              visibleIndex: 19 },
  { id: "video",                   visibleIndex: 20 },
  { id: "prototype",               visibleIndex: 21 },
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
      for (const { id, visibleIndex } of SCROLL_MAP) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = visibleIndex;
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
