"use client";

import { useEffect, useMemo, useState } from "react";

type SectionLink = {
  id: string;
  label: string;
};

type Decision = {
  id: string;
  title: string;
  hint: string;
  category: string;
  context: string;
  options: string[];
  rationale: string;
  impact: string;
};

const navLinks: SectionLink[] = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "framework", label: "Framework" },
  { id: "iterations", label: "Iterations" },
  { id: "decisions", label: "Decisions" },
  { id: "final-design", label: "Final Design" },
  { id: "validation", label: "Validation" },
  { id: "constraints", label: "Constraints" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

const decisions: Decision[] = Array.from({ length: 27 }, (_, index) => {
  const number = index + 1;
  return {
    id: `decision-${number}`,
    title: [
      "Collections Structure",
      "Paste Link Flow",
      "Cross-Store Parsing",
      "Try-On Canvas Split",
      "Generation Feedback",
      "Outfit Save Hierarchy",
      "Model Setup Timing",
      "Collection Taxonomy",
      "Navigation Priority",
    ][index % 9],
    hint: [
      "Items + Outfits together",
      "URL scraping vs manual",
      "Confidence thresholds",
      "25/75 visual balance",
      "Latency transparency",
      "Single source of truth",
      "On-demand vs upfront",
      "Occasion-led organization",
      "Utility over discovery",
    ][index % 9],
    category: ["Mode 1", "Mode 2", "Mode 3", "System"][index % 4],
    context: "How should this capability work to reduce uncertainty without adding friction?",
    options: [
      "A — Lean toward explicit structure",
      "B — Keep flexible and lightweight",
      "C — Hybrid model tuned to user intent ✓",
    ],
    rationale:
      "Research favored fast decisions in shopping context. The hybrid option balanced clarity, speed, and scalability across all three behavioral modes.",
    impact:
      "This decision tightened information architecture and made downstream flows more predictable for both first-time and returning users.",
  };
});

const sectionStyle = "px-20 py-40";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedDecision, setSelectedDecision] = useState<number | null>(null);

  const selected = selectedDecision !== null ? decisions[selectedDecision] : null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.5, 0.8],
      },
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const groupedDecisions = useMemo(() => {
    return {
      "MODE 1: BEFORE (Collecting)": decisions.slice(0, 9),
      "MODE 2: DURING (Trying On)": decisions.slice(9, 18),
      "MODE 3: AFTER (Deciding)": decisions.slice(18, 27),
    };
  }, []);

  return (
    <div className="bg-[#fff] text-[#171717]">
      <aside className="fixed left-0 top-0 h-screen w-[240px] border-r border-[#E5E5E5] bg-[#FAFAFA] px-10 py-[60px]">
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-[0.5px]">ATELIA</p>
          <p className="mt-1 text-[11px] tracking-[0.3px] text-[#737373]">Case Study</p>
        </div>

        <nav className="space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-item ${activeSection === link.id ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="progress-indicator absolute left-0 top-0 h-screen w-[2px]">
          <div className="progress-fill w-[2px]" style={{ height: `${scrollProgress}%` }} />
        </div>
      </aside>

      <main className="ml-[240px]">
        <section className="flex min-h-screen items-center bg-[#FAFAFA] px-20" id="hero">
          <div className="max-w-[800px]">
            <p className="text-[11px] font-medium uppercase tracking-[1.5px] text-[#737373]">Product Design · 2025</p>
            <h1 className="mt-6 font-clash text-[96px] font-medium leading-none tracking-[-0.02em]">Atelia</h1>
            <p className="mt-6 max-w-[600px] text-[20px] leading-[1.4] text-[#525252]">
              AI virtual try-on for confident shopping across any retailer.
            </p>
            <p className="mt-10 max-w-[600px] text-[16px] leading-[1.8] text-[#737373]">
              A strategic exploration of where AI try-on technology creates value—combining universal item
              saving with realistic visualization to reduce purchase uncertainty.
            </p>
            <div className="mt-16 flex gap-10 text-[13px]">
              {[
                ["Duration", "6 weeks"],
                ["Screens", "72"],
                ["Decisions", "27 documented"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-[#A3A3A3]">{label}</p>
                  <p className="mt-1 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className={`${sectionStyle} bg-white`}>
          <p className="section-label">01 — Overview</p>
          <div className="max-w-[680px]">
            <h2 className="section-title">The Brief & Challenge</h2>
            <p className="body-text">"Create a mobile app that uses AI to generate outfit visualizations from clothing items."</p>
            <p className="body-text mt-8">
              The real challenge was strategic: where does this technology create the most value? I needed to
              define the right problem before designing the product.
            </p>
            <div className="my-20 h-px w-[60px] bg-[#E5E5E5]" />
            <p className="body-text">
              The opportunity became clear by reframing from feature novelty to decision confidence in everyday
              shopping behavior.
            </p>
          </div>
        </section>

        <section id="research" className={`${sectionStyle} bg-white`}>
          <p className="section-label">02 — Research</p>
          <h2 className="section-title">Competitive Landscape</h2>
          <p className="body-text mb-14 max-w-[680px]">
            I analyzed existing virtual try-on products and found most tools solved one part of the journey, not
            the full flow across stores.
          </p>
          <div className="max-w-[900px] overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b border-black text-[12px] tracking-[0.5px] text-[#737373]">
                  <th className="py-4">APP</th>
                  <th className="py-4 text-center">TRY-ON</th>
                  <th className="py-4 text-center">SAVE</th>
                  <th className="py-4 text-center">ORGANIZE</th>
                  <th className="py-4 text-center">MULTI-STORE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ASOS See My Fit", "✓", "✓", "—", "—"],
                  ["Whering", "—", "✓", "✓", "—"],
                  ["Style DNA", "✓", "—", "—", "—"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-[#E5E5E5]">
                    <td className="py-5 text-[15px]">{row[0]}</td>
                    {row.slice(1).map((cell, idx) => (
                      <td key={idx} className={`text-center ${cell === "—" ? "text-[#D4D4D4]" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-y border-black bg-[#FAFAFA]">
                  <td className="py-5 text-[15px] font-medium">Atelia</td>
                  <td className="text-center font-medium">✓</td>
                  <td className="text-center font-medium">✓</td>
                  <td className="text-center font-medium">✓</td>
                  <td className="text-center font-medium">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] italic text-[#A3A3A3]">
            Atelia is the only concept combining all four capabilities.
          </p>
        </section>

        <section id="framework" className={`${sectionStyle} bg-[#FAFAFA]`}>
          <p className="section-label">03 — Framework</p>
          <h2 className="section-title">Three Behavioral Modes</h2>
          <div className="mt-10 grid max-w-[900px] gap-10 md:grid-cols-3">
            {[
              ["01", "Before", "Collecting and organizing potential purchases"],
              ["02", "During", "Creating try-ons to evaluate style and fit"],
              ["03", "After", "Reviewing outcomes and deciding with confidence"],
            ].map(([number, title, text]) => (
              <div key={title} className="border border-[#E5E5E5] bg-white p-8">
                <p className="font-clash text-5xl text-[#E5E5E5]">{number}</p>
                <h3 className="mt-4 font-clash text-3xl">{title}</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#525252]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="iterations" className={`${sectionStyle} bg-[#FAFAFA]`}>
          <p className="section-label">04 — Iterations</p>
          <h2 className="section-title mb-16">What Didn&apos;t Work</h2>
          {[
            [
              "VERSION 01",
              "Calendar-First Approach",
              "December 2024",
              "Focused on outfit scheduling similar to wardrobe-planning apps.",
              [
                "Too niche for mainstream shoppers",
                "Didn&apos;t solve purchase uncertainty",
                "Added planning complexity without value",
                "User research showed low scheduling behavior",
              ],
            ],
            [
              "VERSION 02",
              "Social-First Approach",
              "December 2024",
              "Centered the product around sharing outfits for peer feedback.",
              [
                "Social loop overtook core try-on value",
                "Async feedback created decision delays",
                "Different product DNA than shopping utility",
                "Users wanted immediate clarity, not discussion",
              ],
            ],
            [
              "VERSION 03",
              "Final Direction: Shopping Context",
              "January 2025",
              "Shifted to saving from any store and generating realistic try-ons.",
              [
                "Universal problem fit across shopper types",
                "Clear value for users and retailers",
                "Cross-store gap not served by competitors",
                "Utility-first approach reduced noise and friction",
              ],
            ],
          ].map((item, idx) => (
            <article key={idx} className="mb-24 border-b border-[#E5E5E5] pb-24 last:mb-0 last:border-none last:pb-0">
              <p className="text-[11px] uppercase tracking-[1px] text-[#A3A3A3]">{item[0]}</p>
              <h3 className="mt-2 font-clash text-[32px] leading-[1.2]">{item[1]}</h3>
              <p className="mt-2 text-[13px] text-[#737373]">{item[2]}</p>
              <div className="mt-8 h-[280px] w-full max-w-[900px] border border-[#E5E5E5] bg-white p-6 text-sm text-[#737373]">
                Iteration artifact placeholder
              </div>
              <p className="mt-8 max-w-[680px] text-[16px] leading-[1.8] text-[#525252]">{item[3]}</p>
              <p className={`mt-6 text-[12px] tracking-[1px] ${idx === 2 ? "text-black" : "text-[#A3A3A3]"}`}>
                {idx === 2 ? "WHY THIS WORKED" : "WHAT WENT WRONG"}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-[1.7] text-[#525252]">
                {(item[4] as string[]).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="decisions" className={`${sectionStyle} bg-white`}>
          <p className="section-label">05 — Design Decisions</p>
          <h2 className="section-title">27 Documented Choices</h2>
          <p className="body-text mb-16 max-w-[680px]">
            Each decision was deliberate, with alternatives considered and tradeoffs documented.
          </p>
          {Object.entries(groupedDecisions).map(([group, groupItems], groupIdx) => (
            <div key={group} className={groupIdx > 0 ? "mt-20" : ""}>
              <p className="mb-8 text-[13px] text-[#A3A3A3]">{group}</p>
              <div className="grid gap-6 md:grid-cols-3">
                {groupItems.map((decision, idx) => {
                  const actualIndex = groupIdx * 9 + idx;
                  return (
                    <button
                      key={decision.id}
                      onClick={() => setSelectedDecision(actualIndex)}
                      className="group min-h-[160px] border border-[#E5E5E5] bg-white p-8 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                    >
                      <p className="text-[11px] text-[#A3A3A3]">{String(actualIndex + 1).padStart(2, "0")}</p>
                      <h3 className="mt-4 text-[16px] font-medium leading-[1.3]">{decision.title}</h3>
                      <p className="mt-3 text-[13px] text-[#A3A3A3]">{decision.hint}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <section id="final-design" className={`${sectionStyle} bg-[#FAFAFA]`}>
          <p className="section-label">06 — Final Design</p>
          <h2 className="section-title">Three Behavioral Modes</h2>
          {["Before: Collecting", "During: Trying On", "After: Deciding"].map((mode, index) => (
            <div key={mode} className="mt-16">
              <p className="font-clash text-5xl text-[#E5E5E5]">{`0${index + 1}`}</p>
              <h3 className="mt-4 font-clash text-[32px]">{mode}</h3>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((screen) => (
                  <div key={screen} className="h-[280px] border border-[#E5E5E5] bg-white p-6 text-sm text-[#737373]">
                    Screen placeholder {screen}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="validation" className={`${sectionStyle} bg-white`}>
          <p className="section-label">07 — Validation</p>
          <h2 className="section-title">Evidence of Directional Fit</h2>
          <div className="grid max-w-[900px] gap-8 md:grid-cols-2">
            <div className="border border-[#E5E5E5] p-8">
              <p className="text-[11px] tracking-[1px] text-[#A3A3A3]">BEFORE / AFTER</p>
              <p className="mt-4 text-[16px] leading-[1.8] text-[#525252]">
                Participants moved from uncertainty about fit and styling to higher confidence after generated
                visualizations and organized collections.
              </p>
            </div>
            <div className="border border-[#E5E5E5] p-8">
              <p className="text-[11px] tracking-[1px] text-[#A3A3A3]">PARTICIPANT QUOTE</p>
              <p className="mt-4 text-[16px] italic leading-[1.8] text-[#525252]">
                “This is the first time I could compare pieces from different stores and feel sure before
                purchasing.”
              </p>
            </div>
          </div>
        </section>

        <section id="constraints" className={`${sectionStyle} bg-white`}>
          <p className="section-label">08 — Constraints</p>
          <h2 className="section-title">Design Within Reality</h2>
          <div className="max-w-[800px]">
            {[
              ["TECHNICAL", "Cross-store reliability and AI output quality depend on input fidelity."],
              ["USER EXPERIENCE", "Privacy, spam prevention, and graceful fallback states are non-negotiable."],
              ["BUSINESS", "Monetization model and retailer partnerships must be validated early."],
            ].map(([label, text], idx) => (
              <div key={label} className={`py-8 ${idx < 2 ? "border-b border-[#E5E5E5]" : ""}`}>
                <p className="text-[11px] tracking-[1px] text-[#A3A3A3]">{label}</p>
                <p className="mt-4 max-w-[680px] text-[16px] leading-[1.8] text-[#525252]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="impact" className={`${sectionStyle} bg-[#FAFAFA]`}>
          <p className="section-label">09 — Impact</p>
          <h2 className="section-title">Success Metrics</h2>
          <p className="body-text mb-16 max-w-[680px]">
            Success is measured across user behavior, business outcomes, and technical performance.
          </p>
          <div className="grid max-w-[980px] gap-10 md:grid-cols-3">
            {[
              ["USER METRICS", ["60%+ save ≥1 item/week", "40%+ try-on before purchase", "15% return reduction"]],
              ["BUSINESS METRICS", ["8–12% conversion lift", "20%+ higher AOV", "45% monthly retention"]],
              ["TECHNICAL METRICS", ["<5s generation latency", "90%+ realism score", "95%+ link parse success"]],
            ].map(([title, metrics]) => (
              <div key={title as string}>
                <p className="text-[11px] tracking-[1px] text-[#A3A3A3]">{title}</p>
                <ul className="mt-8 space-y-5 text-[15px] leading-[1.7] text-[#525252]">
                  {(metrics as string[]).map((metric) => (
                    <li key={metric} className="border-b border-[#E5E5E5] pb-4 last:border-none">
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="reflection" className="bg-white px-20 pb-60 pt-40">
          <p className="section-label">10 — Reflection</p>
          <h2 className="section-title">What I Learned</h2>
          <div className="grid max-w-[980px] gap-16 md:grid-cols-2">
            <div>
              <p className="mb-8 text-[13px] tracking-[1px] text-[#A3A3A3]">INSIGHTS</p>
              {[
                "Strategic positioning matters more than feature volume.",
                "Mental models create clarity more than isolated features.",
                "Constraint-led design improves decision quality.",
              ].map((item, idx) => (
                <div key={item} className="mb-10">
                  <p className="font-clash text-5xl text-[#E5E5E5]">{`0${idx + 1}`}</p>
                  <p className="mt-3 text-[17px] font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="mb-8 text-[13px] tracking-[1px] text-[#A3A3A3]">WHAT I&apos;D DO DIFFERENTLY</p>
              <ul className="space-y-6 text-[15px] leading-[1.8] text-[#525252]">
                <li>Test core flows earlier with less UI polish.</li>
                <li>Validate retailer-side feasibility in parallel with consumer research.</li>
                <li>Ship a smaller v1 scope before expanding to 72 screens.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6" onClick={() => setSelectedDecision(null)}>
          <div className="relative max-h-[90vh] w-full max-w-[720px] overflow-y-auto bg-white" onClick={(event) => event.stopPropagation()}>
            <div className="border-b border-[#E5E5E5] px-12 pb-8 pt-12">
              <button
                className="absolute right-6 top-6 text-xl text-[#525252]"
                onClick={() => setSelectedDecision(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <p className="text-[11px] tracking-[1px] text-[#A3A3A3]">
                DECISION {(selectedDecision ?? 0) + 1} OF {decisions.length}
              </p>
              <h3 className="mt-4 font-clash text-[32px] leading-[1.2]">{selected.title}</h3>
              <p className="mt-3 text-[12px] text-[#737373]">{selected.category}</p>
            </div>

            <div className="space-y-10 p-12 text-[16px] leading-[1.8]">
              <div>
                <p className="mb-3 text-[11px] tracking-[1px] text-[#A3A3A3]">CONTEXT</p>
                <p className="text-[#525252]">{selected.context}</p>
              </div>
              <div>
                <p className="mb-3 text-[11px] tracking-[1px] text-[#A3A3A3]">OPTIONS CONSIDERED</p>
                <div className="space-y-3">
                  {selected.options.map((option, idx) => (
                    <div
                      key={option}
                      className={`border p-4 ${idx === 2 ? "border-2 border-black bg-[#FAFAFA]" : "border-[#E5E5E5]"}`}
                    >
                      <p className="text-[15px] text-[#525252]">{option}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-[11px] tracking-[1px] text-[#A3A3A3]">RATIONALE</p>
                <p className="text-[#525252]">{selected.rationale}</p>
              </div>
              <div>
                <p className="mb-3 text-[11px] tracking-[1px] text-[#A3A3A3]">IMPACT</p>
                <p className="text-[#525252]">{selected.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
