"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

function ImagePlaceholder({
  height,
  description,
  filename,
}: {
  height: number;
  description: string;
  filename: string;
}) {
  return (
    <div
      className="w-full rounded-xl border border-[#E8E5E6] bg-[#F7F5F8] flex flex-col items-center justify-center p-8 gap-2"
      style={{ height }}
    >
      <p className="text-[10px] font-medium tracking-widest text-[#B0A5B8] uppercase">
        Image Placeholder
      </p>
      <p className="text-sm text-[#C8C2CC] text-center max-w-md leading-relaxed">
        {description}
      </p>
      <p className="text-[10px] font-mono text-[#D8D3DB] mt-1">{filename}</p>
    </div>
  );
}

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium text-[#3D2B4C] uppercase tracking-wider mb-3">
      {children}
    </p>
  );
}

function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#3D2B4C]/5 rounded-xl p-5 border-l-4 border-[#3D2B4C] max-w-2xl">
      <p className="text-xs font-medium text-[#3D2B4C] uppercase tracking-wider mb-2">
        Key Insight
      </p>
      <p className="text-[#5C5759] leading-relaxed text-sm">{children}</p>
    </div>
  );
}

function WrongList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 max-w-2xl">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-[#5C5759] leading-relaxed"
        >
          <span className="text-[#7D767A] mt-0.5 shrink-0">×</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function NeutralList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 max-w-2xl">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-[#5C5759] leading-relaxed"
        >
          <span className="text-[#3D2B4C] mt-0.5 shrink-0">—</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function RightList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 max-w-2xl">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-[#5C5759] leading-relaxed"
        >
          <span className="text-[#3D2B4C] mt-0.5 shrink-0">✓</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function VersionHeader({
  version,
  title,
  date,
}: {
  version: string;
  title: string;
  date: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-xs font-medium tracking-widest text-[#3D2B4C] uppercase mb-2">
        {version}
      </p>
      <h3 className="font-clash text-3xl font-medium text-[#1D1A1C] leading-tight mb-1">
        {title}
      </h3>
      <p className="text-sm text-[#7D767A]">{date}</p>
    </div>
  );
}

export default function Iterations() {
  return (
    <section id="iterations" className="py-28 bg-[#FAF9FA]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="13" title="Iterations" subtitle="What Didn't Work" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] leading-relaxed mb-20 max-w-2xl"
        >
          Three major iterations preceded the final design. Each taught critical lessons about
          user behavior, interaction patterns, and product positioning.
        </motion.p>

        {/* ── VERSION 01: Shopping Platform ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <VersionHeader
            version="Version 01"
            title="In-App Shopping Platform"
            date="Early December 2024"
          />

          <div className="max-w-4xl mb-8">
            <img
              src="/images/prev iteration.svg"
              alt="Shopping platform flow diagram — input problem, weak link, Shopify site, decision tree"
              className="w-full rounded-xl"
            />
          </div>

          <div className="space-y-6 max-w-2xl">
            <div>
              <BlockLabel>The Approach</BlockLabel>
              <p className="text-[#5C5759] leading-relaxed text-sm">
                Build a complete shopping platform with AI try-on integrated. Users would browse
                products, try them on, then purchase in-app. Like Amazon Fashion or Myntra, but
                with better visualization.
              </p>
            </div>
            <div>
              <BlockLabel>What Went Wrong</BlockLabel>
              <WrongList
                items={[
                  "Can't compete with established retailers on inventory/selection",
                  "Can't compete on price, shipping, or fulfillment infrastructure",
                  "Massive operational complexity (payments, logistics, customer service)",
                  "Limits users to our catalog only—fails to solve cross-store shopping",
                  "Wrong problem: users know WHERE to shop; they need help with HOW to decide",
                ]}
              />
            </div>
            <InsightBox>
              Trying to be a retailer WITH try-on was the wrong positioning. The opportunity was
              to be a try-on tool that works with ANY retailer.
            </InsightBox>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] mb-20" />

        {/* ── VERSION 02: Cross-Tab Navigation ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <VersionHeader
            version="Version 02"
            title="Cross-Tab Navigation Pattern"
            date="Mid December 2024"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-8">
            <div>
              <img
                src="/images/wardrobenav.svg"
                alt='Wardrobe mockup with AI Try-On button — item preview modal with "AI Try-On" button visible'
                className="w-full rounded-xl"
              />
              <p className="text-sm text-[#7D767A] italic mt-3 text-center">
                Wardrobe → AI Try-On button
              </p>
            </div>
            <div>
              <img
                src="/images/crosstabnav.svg"
                alt="Recently Added → Try-On navigation — arrow showing navigation to Try-On tab"
                className="w-full rounded-xl"
              />
              <p className="text-sm text-[#7D767A] italic mt-3 text-center">
                Recently Added → navigation trigger
              </p>
            </div>
          </div>

          <div className="space-y-6 max-w-2xl">
            <div>
              <BlockLabel>The Approach</BlockLabel>
              <p className="text-[#5C5759] leading-relaxed text-sm mb-4">
                After pivoting to universal tool, explored having &ldquo;AI Try-On&rdquo; buttons
                throughout the app that would navigate users to the Try-On tab automatically.
                Found this pattern in multiple places:
              </p>
              <NeutralList
                items={[
                  "\u201CAI Try-On\u201D button in item preview modal → jumps to middle tab",
                  "Recently Added screen → only action was navigate to Try-On",
                  "Saved Items → \u201CUse for try-on\u201D → switches tabs",
                ]}
              />
            </div>
            <div>
              <BlockLabel>What Went Wrong</BlockLabel>
              <WrongList
                items={[
                  "Users lost context—clicking something on Home tab shouldn't transport you elsewhere",
                  'Disorienting navigation: "Where am I? How did I get here?"',
                  "Broke mental model of tabs as distinct destinations",
                  "Same problem appeared in multiple iterations—pattern recognition failure",
                ]}
              />
            </div>
            <InsightBox>
              Each tab should be an intentional destination, not a side-effect of clicking
              something elsewhere. If the user wants Try-On, they navigate there deliberately.
              Actions within a tab stay within that context.
            </InsightBox>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] mb-20" />

        {/* ── EARLY EXPLORATIONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <VersionHeader
            version="Early Explorations"
            title="Hand-Drawn Wireframes"
            date="December 2024"
          />

          <div className="max-w-4xl mb-4">
            <img
              src="/images/handdrawn.svg"
              alt='Hand-drawn wireframes — paste link flow, recently added placement, collections structure, with "History should be here" annotation'
              className="w-full rounded-xl"
            />
          </div>
          <p className="text-sm text-[#7D767A] italic mb-10">
            Early wireframe exploration—testing paste link input, collections structure, and
            history placement
          </p>

          <p className="text-[#5C5759] leading-relaxed text-sm mb-4 max-w-2xl">
            These hand-drawn sketches explored the fundamental structure before committing to
            high-fidelity designs. Key explorations:
          </p>
          <NeutralList
            items={[
              "Paste link as primary input method (vs manual upload)",
              "Recently Added placement and relationship to Collections",
              "Where History lives in the navigation hierarchy",
              "Collections grid layout and visual density",
            ]}
          />
          <p className="text-sm text-[#7D767A] italic mt-6 max-w-2xl leading-relaxed">
            Note the &ldquo;History should be here&rdquo; annotation—this early decision led to
            the final tab structure where Try-On contains both Canvas and History together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
