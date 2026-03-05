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



export default function Monetization() {
  return (
    <section id="monetization" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="15" title="Business Model" subtitle="How This Makes Money" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] leading-relaxed mb-20 max-w-2xl"
        >
          A product without a business model is a hobby. I explored three revenue approaches and
          landed on a hybrid model that balances user value with sustainable monetization.
        </motion.p>

        {/* ── CREDIT-BASED FREEMIUM ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-4">
            Credit-Based Freemium Model
          </h3>
          <p className="text-[#5C5759] leading-relaxed mb-4 max-w-2xl">
            Users purchase credits to generate AI try-on images. Each generation costs credits
            based on complexity (number of items selected).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mb-12">
            <div>
              <ul className="space-y-2">
                {[
                  "Free tier: 50 credits/day (up to ~12 outfits)",
                  "Credit cost visible before generation",
                  "Dynamic pricing based on items selected",
                  "No credit cost for saving or organizing",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#5C5759] leading-relaxed"
                  >
                    <span className="text-[#3D2B4C] mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FAF9FA] rounded-xl p-6 border border-[#E8E5E6]">
              <p className="text-xs font-medium text-[#7D767A] uppercase tracking-wider mb-4">
                Why Credits?
              </p>
              <ul className="space-y-2">
                {[
                  "Aligns cost with value (AI generation is expensive)",
                  "Free tier lets users try before buying",
                  "Predictable revenue per user",
                  "Reduces spam/abuse (finite resource)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#5C5759] leading-relaxed"
                  >
                    <span className="text-[#3D2B4C] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Credits canvas image */}
          <div className="max-w-sm mb-4">
            <ImagePlaceholder
              height={480}
              description='Try-On canvas showing credits — top right: "50" credits remaining, item selection grid, "Generate" button showing "6 credits" cost, dynamic cost based on items selected'
              filename="/images/monetization-credits-canvas.png"
            />
          </div>
          <p className="text-sm text-[#7D767A] italic">
            Credits remaining visible at top right; generation cost shown on button
          </p>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] mb-20" />

        {/* ── PRICING TIERS ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-clash text-lg md:text-xl lg:text-2xl font-medium text-[#1D1A1C] mb-4">
            Pricing Tiers
          </h3>
          <p className="text-[#5C5759] leading-relaxed mb-10 max-w-2xl">
            Three tiers balance accessibility (free), power users (pro), and heavy usage
            (premier). Pricing based on AI generation costs + margin.
          </p>

          {/* Pricing plans image */}
          <div className="max-w-3xl mb-4">
            <ImagePlaceholder
              height={360}
              description="Pricing plans screen — Free / Pro (₹999/month) / Premier (₹2999/month) with Monthly/Annual toggle, 'Continue' and 'Compare all plan features' buttons"
              filename="/images/monetization-pricing-plans.png"
            />
          </div>
          <p className="text-sm text-[#7D767A] italic mb-12">
            Freemium model with three tiers; annual discount saves ~17%
          </p>

          {/* Pricing rationale */}
          <div className="bg-[#FAF9FA] rounded-xl p-6 border border-[#E8E5E6] max-w-2xl">
            <p className="text-xs font-medium text-[#7D767A] uppercase tracking-wider mb-3">
              Pricing Rationale
            </p>
            <p className="text-sm text-[#5C5759] leading-relaxed">
              Based on AI generation costs (~₹2–4 per image) + infrastructure + margin. Free tier
              sustainable because 80% of users generate &lt;5 outfits/day. Power users (20%)
              subsidize free users. Annual discount (17%) improves retention.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
