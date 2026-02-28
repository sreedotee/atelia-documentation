"use client";

import { motion } from "framer-motion";

const inputProblemInsight =
  "Breakthrough: Instead of manual upload, automatic link parsing became the solution. This reduced save time from ~60 seconds to ~5 seconds and aligned with existing user behavior (sharing links with friends).";

const shoppingPlatformAppealing = [
  "Complete control over experience",
  "Direct revenue (not just affiliate)",
  "Can optimize entire funnel for try-on",
  "Reference: Myntra, Amazon Fashion",
];

const shoppingPlatformFailed = [
  "Can't compete on inventory/selection",
  "Can't compete on price or shipping",
  "Massive operational complexity (payments, fulfillment)",
  "Limits users to our catalog only",
  "Wrong problem—users already know WHERE to shop",
];

const researchQuestions = [
  "Do people shop by occasion or item type?",
  "At what part of the shopping process does try-on add value?",
  "What are reactions after seeing a generated outfit? (yay, meh, nay)",
  "Do people want items they didn't like in their wardrobe?",
  "What do people want to do with outfits after generation? (buy immediately, save for later, delete)",
  'Should "meh" outfits go to history or be deleted?',
];

function ImagePlaceholder({
  width,
  height,
  label,
  sublabel,
  filename,
}: {
  width: number | string;
  height: number;
  label: string;
  sublabel: string;
  filename: string;
}) {
  return (
    <div
      style={{
        width,
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

export default function ProblemEvolution() {
  return (
    <section
      id="problem-evolution"
      style={{ padding: "160px 80px", background: "#FFFFFF" }}
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
        04 — Problem Evolution
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
        Finding the Right Problem
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        style={{
          fontSize: 16,
          lineHeight: 1.8,
          color: "#525252",
          maxWidth: 680,
          marginBottom: 80,
        }}
      >
        The brief was simple: &ldquo;AI virtual try-on.&rdquo; But the real
        challenge was identifying where this technology creates meaningful value.
        This required exploring the input problem, user behavior, and market
        positioning.
      </motion.p>

      {/* ─── THE INPUT PROBLEM ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: 120 }}
      >
        <h3
          className="font-clash"
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#000",
            marginBottom: 32,
          }}
        >
          The Input Problem
        </h3>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#525252",
            maxWidth: 680,
            marginBottom: 40,
          }}
        >
          How do users seamlessly get items from any website into the AI
          generator? Initial assumption was manual upload, which proved too slow
          and created friction at the core interaction.
        </p>

        <ImagePlaceholder
          width={800}
          height={450}
          label="Image Placeholder"
          sublabel={
            '"The Input Problem" diagram — Flow: Input → Bottleneck → Generator → Output. Yellow sticky note: "bottleneck". Green circle: "experimented with broken link inputs".'
          }
          filename="/images/problem-input-bottleneck.png"
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
          Early problem definition: identifying the input bottleneck
        </p>

        {/* Insight box */}
        <div
          style={{
            padding: 24,
            background: "#FAFAFA",
            maxWidth: 680,
            borderLeft: "3px solid #E5E5E5",
          }}
        >
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#525252" }}>
            <strong>Breakthrough:</strong> {inputProblemInsight.replace("Breakthrough: ", "")}
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <div
        style={{
          width: 60,
          height: 1,
          background: "#E5E5E5",
          margin: "0 0 120px 0",
        }}
      />

      {/* ─── SHOPPING PLATFORM VS UNIVERSAL TOOL ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: 120 }}
      >
        <h3
          className="font-clash"
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#000",
            marginBottom: 32,
          }}
        >
          Shopping Platform vs Universal Tool
        </h3>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#525252",
            maxWidth: 680,
            marginBottom: 40,
          }}
        >
          Early explorations wrestled with a fundamental question: Should this
          be a shopping platform with try-on built in (like Amazon with AR), or
          a universal tool that works with any retailer?
        </p>

        <ImagePlaceholder
          width={900}
          height={600}
          label="Image Placeholder"
          sublabel="Shopping platform flow diagram — Shows: Input problem → weak link → Shopify site. Decision tree: buy outfit vs no. Cart icon with issues listed. Hand-drawn diagram style."
          filename="/images/shopping-platform-approach.png"
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
          Version 1: In-app shopping platform approach (rejected)
        </p>

        {/* Two-column comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            maxWidth: 900,
            marginBottom: 60,
          }}
        >
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
              What Seemed Appealing
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {shoppingPlatformAppealing.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#525252",
                    paddingLeft: 20,
                    position: "relative",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#A3A3A3",
                      fontWeight: 500,
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
              Why It Failed
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {shoppingPlatformFailed.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#525252",
                    paddingLeft: 20,
                    position: "relative",
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#A3A3A3",
                    }}
                  >
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pivot box */}
        <div
          style={{
            padding: 32,
            border: "2px solid #000",
            maxWidth: 680,
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 12,
              fontWeight: 500,
              color: "#A3A3A3",
            }}
          >
            The Pivot
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              fontWeight: 500,
              color: "#000",
              marginBottom: 16,
            }}
          >
            Instead of being a retailer WITH try-on, be a try-on tool that
            works with ANY retailer.
          </p>
          <p style={{ fontSize: 14, color: "#737373", lineHeight: 1.6 }}>
            This single decision unlocked the paste-link approach and became the
            foundation of the entire product.
          </p>
        </div>
      </motion.div>

      {/* Divider */}
      <div
        style={{
          width: 60,
          height: 1,
          background: "#E5E5E5",
          margin: "0 0 120px 0",
        }}
      />

      {/* ─── RESEARCH QUESTIONS ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3
          className="font-clash"
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#000",
            marginBottom: 32,
          }}
        >
          Questions That Needed Answers
        </h3>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.8,
            color: "#525252",
            maxWidth: 680,
            marginBottom: 40,
          }}
        >
          Before designing, I needed to validate assumptions about user
          behavior, organization patterns, and where try-on adds value in the
          shopping journey.
        </p>

        <div style={{ maxWidth: 680 }}>
          {researchQuestions.map((q, i) => (
            <div
              key={i}
              style={{
                padding: "24px 0",
                borderBottom:
                  i < researchQuestions.length - 1
                    ? "1px solid #E5E5E5"
                    : "none",
              }}
            >
              <p
                style={{ fontSize: 15, lineHeight: 1.7, color: "#1D1A1C" }}
              >
                {q}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 40,
            fontSize: 14,
            color: "#737373",
            fontStyle: "italic",
            maxWidth: 680,
            lineHeight: 1.6,
          }}
        >
          These questions shaped the interview script, card sorting tasks, and
          ultimately validated the occasion-based organization model.
        </p>
      </motion.div>
    </section>
  );
}
