"use client";

import { motion } from "framer-motion";

function ImagePlaceholder({
  width,
  height,
  label,
  sublabel,
  filename,
}: {
  width?: number | string;
  height: number;
  label: string;
  sublabel: string;
  filename: string;
}) {
  return (
    <div
      style={{
        width: width ?? "100%",
        maxWidth: "100%",
        height,
        background: "#FAFAFA",
        border: "1px solid #E5E5E5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: 24,
      }}
    >
      <p
        style={{
          fontSize: 11,
          color: "#A3A3A3",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: 12,
          color: "#C3C3C3",
          textAlign: "center",
          maxWidth: 360,
          lineHeight: 1.6,
        }}
      >
        {sublabel}
      </p>
      <p
        style={{
          fontSize: 11,
          color: "#D4D4D4",
          fontFamily: "monospace",
          marginTop: 4,
        }}
      >
        {filename}
      </p>
    </div>
  );
}

function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 24,
        background: "#FFFFFF",
        border: "1px solid #E5E5E5",
        maxWidth: 680,
      }}
    >
      <p
        style={{
          fontSize: 11,
          color: "#000",
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: 12,
          fontWeight: 500,
        }}
      >
        Key Insight
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#525252" }}>
        {children}
      </p>
    </div>
  );
}

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 11,
        color: "#A3A3A3",
        letterSpacing: "1px",
        textTransform: "uppercase",
        marginBottom: 12,
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "#525252",
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            marginBottom: 4,
          }}
        >
          <span style={{ color: "#A3A3A3", flexShrink: 0, marginTop: 1 }}>
            ×
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Iterations() {
  return (
    <section
      id="iterations"
      style={{ padding: "160px 80px", background: "#FAFAFA" }}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{
          fontSize: 11,
          letterSpacing: "1.5px",
          color: "#A3A3A3",
          fontWeight: 500,
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        05 — Iterations
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="font-clash"
        style={{
          fontSize: "clamp(28px, 4vw, 40px)",
          fontWeight: 500,
          lineHeight: 1.2,
          color: "#000",
          marginBottom: 32,
        }}
      >
        What Didn&#39;t Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          fontSize: 16,
          lineHeight: 1.8,
          color: "#737373",
          maxWidth: 680,
          marginBottom: 120,
        }}
      >
        Three major iterations preceded the final design. Each taught critical
        lessons about user behavior, interaction patterns, and product
        positioning.
      </motion.p>

      {/* ─── ITERATION 1: Shopping Platform ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: 160 }}
      >
        <div style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 11,
              color: "#A3A3A3",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Version 01
          </p>
          <h3
            className="font-clash"
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#000",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            In-App Shopping Platform
          </h3>
          <p style={{ fontSize: 13, color: "#737373" }}>
            Early December 2024
          </p>
        </div>

        <ImagePlaceholder
          width={900}
          height={600}
          label="Image Placeholder"
          sublabel="Shopping platform flow diagram — Shows: Input problem → weak link → Shopify site. Decision tree: buy outfit vs no. Cart icon with issues listed."
          filename="/images/iteration-1-shopping-platform.png"
        />

        <div style={{ maxWidth: 680, marginTop: 40 }}>
          <div style={{ marginBottom: 40 }}>
            <BlockLabel>The Approach</BlockLabel>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#525252" }}>
              Build a complete shopping platform with AI try-on integrated.
              Users would browse products, try them on, then purchase in-app.
              Like Amazon Fashion or Myntra, but with better visualization.
            </p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <BlockLabel>What Went Wrong</BlockLabel>
            <BulletList
              items={[
                "Can't compete with established retailers on inventory/selection",
                "Can't compete on price, shipping, or fulfillment infrastructure",
                "Massive operational complexity (payments, logistics, customer service)",
                "Limits users to our catalog only—fails to solve cross-store shopping",
                "Wrong problem: users already know WHERE to shop, they need help with HOW to decide",
              ]}
            />
          </div>

          <InsightBox>
            Trying to be a retailer WITH try-on was the wrong positioning. The
            opportunity was to be a try-on tool that works with ANY retailer.
          </InsightBox>
        </div>
      </motion.div>

      <div
        style={{
          width: "100%",
          height: 1,
          background: "#E5E5E5",
          marginBottom: 80,
        }}
      />

      {/* ─── ITERATION 2: Cross-Tab Navigation ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: 160 }}
      >
        <div style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 11,
              color: "#A3A3A3",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Version 02
          </p>
          <h3
            className="font-clash"
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#000",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            Cross-Tab Navigation Pattern
          </h3>
          <p style={{ fontSize: 13, color: "#737373" }}>Mid December 2024</p>
        </div>

        {/* Two-image grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div>
            <ImagePlaceholder
              height={500}
              label="Image Placeholder"
              sublabel={'"Wardrobe" mockup with AI Try-On button — Item preview modal, "AI Try-On" button visible, "takes to or adds items to AI try on canvas" annotation'}
              filename="/images/iteration-2a-wardrobe-tryon.png"
            />
            <p
              style={{
                fontSize: 13,
                color: "#A3A3A3",
                fontStyle: "italic",
                marginTop: 12,
                textAlign: "center",
              }}
            >
              Wardrobe → AI Try-On button
            </p>
          </div>
          <div>
            <ImagePlaceholder
              height={500}
              label="Image Placeholder"
              sublabel='Recently Added → Try-On navigation — Arrow showing navigation to Try-On tab, "what actions could be here from here" annotation'
              filename="/images/iteration-2b-recently-added.png"
            />
            <p
              style={{
                fontSize: 13,
                color: "#A3A3A3",
                fontStyle: "italic",
                marginTop: 12,
                textAlign: "center",
              }}
            >
              Recently Added → navigation trigger
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 680 }}>
          <div style={{ marginBottom: 40 }}>
            <BlockLabel>The Approach</BlockLabel>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#525252",
                marginBottom: 16,
              }}
            >
              After pivoting to universal tool, explored having &ldquo;AI
              Try-On&rdquo; buttons throughout the app that would navigate users
              to the Try-On tab automatically. Found this pattern in multiple
              places:
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                'Item preview modal → \u201CAI Try-On\u201D button → jumps to middle tab',
                "Recently Added screen → only action was navigate to Try-On",
                'Saved Items → \u201CUse for try-on\u201D → switches tabs',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#525252",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 4,
                  }}
                >
                  <span style={{ color: "#A3A3A3", flexShrink: 0 }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: 40 }}>
            <BlockLabel>What Went Wrong</BlockLabel>
            <BulletList
              items={[
                "Users lost context—clicking something on Home tab shouldn't transport you elsewhere",
                'Disorienting navigation: "Where am I? How did I get here?"',
                "Broke mental model of tabs as distinct destinations",
                "Same problem appeared in multiple iterations—pattern recognition failure",
              ]}
            />
          </div>

          <InsightBox>
            Each tab should be an intentional destination, not a side-effect of
            clicking something elsewhere. If user wants Try-On, they navigate
            there deliberately. Actions within a tab should stay within that
            context.
          </InsightBox>
        </div>
      </motion.div>

      <div
        style={{
          width: "100%",
          height: 1,
          background: "#E5E5E5",
          marginBottom: 80,
        }}
      />

      {/* ─── ITERATION 3: Canvas UI ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: 160 }}
      >
        <div style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 11,
              color: "#A3A3A3",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Version 03
          </p>
          <h3
            className="font-clash"
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#000",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            Try-On Canvas Layout
          </h3>
          <p style={{ fontSize: 13, color: "#737373" }}>Late December 2024</p>
        </div>

        {/* Before/after comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div>
            <ImagePlaceholder
              height={600}
              label="Image Placeholder"
              sublabel={'Canvas with chips clutter (rejected) — Selected items shown as chips on top, canvas area, "not sure on this" annotation, red X marks'}
              filename="/images/iteration-3a-canvas-clutter.png"
            />
            <p
              style={{
                fontSize: 13,
                color: "#A3A3A3",
                fontStyle: "italic",
                marginTop: 12,
                textAlign: "center",
              }}
            >
              Version A: Selected items as chips (rejected)
            </p>
          </div>
          <div>
            <ImagePlaceholder
              height={600}
              label="Image Placeholder"
              sublabel={'Final 25/75 split canvas — Canvas minimized at top (25%), category tabs: Tops, Bottoms, Outerwear, Footwear, item grid below (75%), "this is actually better" annotation'}
              filename="/images/iteration-3b-canvas-final.png"
            />
            <p
              style={{
                fontSize: 13,
                color: "#A3A3A3",
                fontStyle: "italic",
                marginTop: 12,
                textAlign: "center",
              }}
            >
              Final: 25/75 split (canvas + items visible)
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 680 }}>
          <div style={{ marginBottom: 40 }}>
            <BlockLabel>Problem With Chips</BlockLabel>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#525252",
                marginBottom: 16,
              }}
            >
              Early version showed selected items as chips at the top of canvas
              while user was selecting more items.
            </p>
            <BulletList
              items={[
                "Canvas space already limited on mobile",
                "Chips consumed valuable vertical space",
                "Redundant—items already visible in grid below with selected state",
                "Visual noise distracted from the generated outfit preview",
              ]}
            />
          </div>

          <div style={{ marginBottom: 40 }}>
            <BlockLabel>Breakthrough Realization</BlockLabel>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "#525252",
                fontStyle: "italic",
                marginBottom: 16,
              }}
            >
              &ldquo;When tab clicked, canvas minimized. Once generate clicked,
              stuff collapses.&rdquo; —from notes
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Canvas doesn't need to be full-screen during selection",
                "Keep canvas visible (25%) so user sees their avatar context",
                "Item grid takes 75%—plenty of space to browse",
                "When 'Generate' clicked, canvas expands to show result",
                "User sees both what they selected AND the preview simultaneously",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#525252",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginBottom: 4,
                  }}
                >
                  <span style={{ color: "#000", flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <InsightBox>
            The 25/75 split became the core Try-On interaction model. Canvas
            shows ONLY the generated outfit, nothing else. All selection happens
            in the grid below. This keeps the canvas clean for the &ldquo;magic
            moment&rdquo; when the outfit appears.
          </InsightBox>
        </div>
      </motion.div>

      <div
        style={{
          width: "100%",
          height: 1,
          background: "#E5E5E5",
          marginBottom: 80,
        }}
      />

      {/* ─── EARLY EXPLORATIONS: Hand-drawn wireframes ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div style={{ marginBottom: 40 }}>
          <p
            style={{
              fontSize: 11,
              color: "#A3A3A3",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Early Explorations
          </p>
          <h3
            className="font-clash"
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#000",
              lineHeight: 1.2,
              marginBottom: 8,
            }}
          >
            Hand-Drawn Wireframes
          </h3>
          <p style={{ fontSize: 13, color: "#737373" }}>December 2024</p>
        </div>

        <ImagePlaceholder
          width={900}
          height={400}
          label="Image Placeholder"
          sublabel='Hand-drawn wireframes (3 screens side by side) — Paste link flow, recently added placement, collections structure, "History should be here" annotation visible'
          filename="/images/iteration-early-wireframes.png"
        />

        <p
          style={{
            fontSize: 13,
            color: "#A3A3A3",
            fontStyle: "italic",
            marginTop: 16,
            marginBottom: 40,
          }}
        >
          Early wireframe exploration—testing paste link input, collections
          structure, and history placement
        </p>

        <div style={{ maxWidth: 680 }}>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "#525252",
              marginBottom: 16,
            }}
          >
            These hand-drawn sketches explored the fundamental structure before
            committing to high-fidelity designs. Key explorations:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Paste link as primary input method (vs manual upload)",
              "Recently Added placement and relationship to Collections",
              "Where History lives in the navigation hierarchy",
              "Collections grid layout and visual density",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "#525252",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 12,
                  marginBottom: 4,
                }}
              >
                <span style={{ color: "#A3A3A3", flexShrink: 0 }}>—</span>
                {item}
              </li>
            ))}
          </ul>
          <p
            style={{
              marginTop: 24,
              fontSize: 14,
              color: "#737373",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            Note the &ldquo;History should be here&rdquo; annotation—this early
            decision led to the final tab structure where Try-On contains both
            Canvas and History together.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
