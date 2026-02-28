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
      className="w-full rounded-xl border border-[#E8E5E6] dark:border-[#3D2B4C]/30 bg-[#F7F5F8] dark:bg-[#1e1628] flex flex-col items-center justify-center p-8 gap-2"
      style={{ height }}
    >
      <p className="text-[10px] font-medium tracking-widest text-[#B0A5B8] dark:text-gray-600 uppercase">
        Image Placeholder
      </p>
      <p className="text-sm text-[#C8C2CC] dark:text-gray-700 text-center max-w-md leading-relaxed">
        {description}
      </p>
      <p className="text-[10px] font-mono text-[#D8D3DB] dark:text-gray-800 mt-1">{filename}</p>
    </div>
  );
}

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold text-[#3D2B4C] dark:text-purple-400 uppercase tracking-wider mb-3">
      {children}
    </p>
  );
}

function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#3D2B4C]/5 dark:bg-[#3D2B4C]/20 rounded-xl p-5 border-l-4 border-[#3D2B4C] dark:border-purple-500 max-w-2xl">
      <p className="text-xs font-bold text-[#3D2B4C] dark:text-purple-400 uppercase tracking-wider mb-2">
        Key Insight
      </p>
      <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed text-sm">{children}</p>
    </div>
  );
}

function WrongList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 max-w-2xl">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed"
        >
          <span className="text-[#7D767A] dark:text-gray-600 mt-0.5 shrink-0">×</span>
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
          className="flex items-start gap-3 text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed"
        >
          <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5 shrink-0">—</span>
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
          className="flex items-start gap-3 text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed"
        >
          <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5 shrink-0">✓</span>
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
      <p className="text-xs font-medium tracking-widest text-[#3D2B4C] dark:text-purple-400 uppercase mb-2">
        {version}
      </p>
      <h3 className="font-clash text-3xl font-semibold text-[#1D1A1C] dark:text-white leading-tight mb-1">
        {title}
      </h3>
      <p className="text-sm text-[#7D767A] dark:text-gray-500">{date}</p>
    </div>
  );
}

export default function Iterations() {
  return (
    <section id="iterations" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="12" title="Iterations" subtitle="What Didn't Work" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-20 max-w-2xl"
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
            <ImagePlaceholder
              height={420}
              description="Shopping platform flow diagram — Shows: Input problem → weak link → Shopify site. Decision tree: buy outfit vs no. Cart icon with issues listed."
              filename="/images/iteration-1-shopping-platform.png"
            />
          </div>

          <div className="space-y-6 max-w-2xl">
            <div>
              <BlockLabel>The Approach</BlockLabel>
              <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed text-sm">
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

        <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mb-20" />

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
              <ImagePlaceholder
                height={480}
                description={'"Wardrobe" mockup with AI Try-On button — item preview modal, "AI Try-On" button visible, "takes to or adds items to AI try on canvas" annotation'}
                filename="/images/iteration-2a-wardrobe-tryon.png"
              />
              <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mt-3 text-center">
                Wardrobe → AI Try-On button
              </p>
            </div>
            <div>
              <ImagePlaceholder
                height={480}
                description='Recently Added → Try-On navigation — arrow showing navigation to Try-On tab, "what actions could be here from here" annotation'
                filename="/images/iteration-2b-recently-added.png"
              />
              <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mt-3 text-center">
                Recently Added → navigation trigger
              </p>
            </div>
          </div>

          <div className="space-y-6 max-w-2xl">
            <div>
              <BlockLabel>The Approach</BlockLabel>
              <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed text-sm mb-4">
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

        <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mb-20" />

        {/* ── VERSION 03: Canvas Layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <VersionHeader
            version="Version 03"
            title="Try-On Canvas Layout"
            date="Late December 2024"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-8">
            <div>
              <ImagePlaceholder
                height={520}
                description={'Canvas with chips clutter (rejected) — selected items shown as chips on top, canvas area, "not sure on this" annotation, red X marks'}
                filename="/images/iteration-3a-canvas-clutter.png"
              />
              <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mt-3 text-center">
                Version A: Selected items as chips (rejected)
              </p>
            </div>
            <div>
              <ImagePlaceholder
                height={520}
                description={'Final 25/75 split canvas — canvas minimized at top (25%), category tabs: Tops, Bottoms, Outerwear, Footwear, item grid below (75%), "this is actually better" annotation'}
                filename="/images/iteration-3b-canvas-final.png"
              />
              <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mt-3 text-center">
                Final: 25/75 split (canvas + items visible)
              </p>
            </div>
          </div>

          <div className="space-y-6 max-w-2xl">
            <div>
              <BlockLabel>Problem With Chips</BlockLabel>
              <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed text-sm mb-4">
                Early version showed selected items as chips at the top of canvas while user was
                selecting more items.
              </p>
              <WrongList
                items={[
                  "Canvas space already limited on mobile",
                  "Chips consumed valuable vertical space",
                  "Redundant—items already visible in grid below with selected state",
                  "Visual noise distracted from the generated outfit preview",
                ]}
              />
            </div>
            <div>
              <BlockLabel>Breakthrough Realization</BlockLabel>
              <p className="text-sm text-[#5C5759] dark:text-gray-300 italic leading-relaxed mb-4">
                &ldquo;When tab clicked, canvas minimized. Once generate clicked, stuff
                collapses.&rdquo; —from notes
              </p>
              <RightList
                items={[
                  "Canvas doesn't need to be full-screen during selection",
                  "Keep canvas visible (25%) so user sees their avatar context",
                  "Item grid takes 75%—plenty of space to browse",
                  "When 'Generate' clicked, canvas expands to show result",
                  "User sees both what they selected AND the preview simultaneously",
                ]}
              />
            </div>
            <InsightBox>
              The 25/75 split became the core Try-On interaction model. Canvas shows ONLY the
              generated outfit, nothing else. All selection happens in the grid below. This keeps
              the canvas clean for the &ldquo;magic moment&rdquo; when the outfit appears.
            </InsightBox>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mb-20" />

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
            <ImagePlaceholder
              height={300}
              description='Hand-drawn wireframes (3 screens side by side) — paste link flow, recently added placement, collections structure, "History should be here" annotation visible'
              filename="/images/iteration-early-wireframes.png"
            />
          </div>
          <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mb-10">
            Early wireframe exploration—testing paste link input, collections structure, and
            history placement
          </p>

          <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed text-sm mb-4 max-w-2xl">
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
          <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mt-6 max-w-2xl leading-relaxed">
            Note the &ldquo;History should be here&rdquo; annotation—this early decision led to
            the final tab structure where Try-On contains both Canvas and History together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
