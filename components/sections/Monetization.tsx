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

const pricingTiers = [
  {
    name: "Free",
    price: "₹0",
    period: "",
    features: [
      "50 credits/day (~12 outfits)",
      "Free AI model (standard quality)",
      "Unlimited saves & collections",
      "Basic try-on features",
    ],
    target: "Casual shoppers, try-before-buy",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    features: [
      "2,500 credits/month (~600 outfits)",
      "Premium AI models (higher quality)",
      "Priority processing (faster)",
      "Multiple body models (3 avatars)",
    ],
    target: "Frequent shoppers, fashion enthusiasts",
    highlight: true,
  },
  {
    name: "Premier",
    price: "₹2,999",
    period: "/month",
    features: [
      "10,000 credits/month (~2,400 outfits)",
      "Best AI models (photorealistic)",
      "Instant processing",
      "Unlimited avatars",
      "API access (for influencers/stylists)",
    ],
    target: "Professional stylists, influencers",
    highlight: false,
  },
];

const revenueStreams = [
  {
    title: "Affiliate Commissions",
    description:
      "When users purchase items through the app, earn 3–8% commission from retailers (Myntra, ASOS, Zara affiliate programs). Non-intrusive—users already intend to buy, we just facilitate the link.",
    metric: "Potential: ₹50–200 per purchase, 15–20% of users buy within 7 days",
  },
  {
    title: "B2B SaaS for Retailers",
    description:
      "License try-on technology to fashion e-commerce sites. Retailers get white-label try-on widget, reducing their return rates (30% → 20% = massive savings). Charge per integration + usage fees.",
    metric: "Potential: ₹50,000–5,00,000/month per enterprise client",
  },
  {
    title: "Premium Features (Future)",
    description:
      "Style recommendations, AI stylist chat, outfit scheduling, trend alerts. These are 'nice-to-haves' that power users pay for. Roll out after core product validated.",
    metric: "Potential: ₹200–500/month add-on revenue per pro user",
  },
];

const assumptions = [
  {
    question: "Will users pay for credits, or expect unlimited free?",
    method:
      "Test: A/B test free tier limits (25 vs 50 vs 100 credits/day). Measure conversion to paid, retention, and complaints.",
  },
  {
    question: "Is ₹999/month acceptable for the Indian market?",
    method:
      "Test: Survey users on willingness to pay. Compare to Spotify (₹119), Netflix (₹199–799). Fashion tools may justify higher price if ROI is clear (saves returns, bad purchases).",
  },
  {
    question: "Do users actually buy items they try on?",
    method:
      "Test: Track affiliate click-through and purchase rates. If <5% convert, affiliate revenue won't work. Need 15–20% to be meaningful.",
  },
  {
    question: "Will retailers integrate or see this as competition?",
    method:
      "Test: Pitch to 3–5 mid-size retailers. Gauge interest in white-label vs API vs partnership. May need to prove consumer traction first.",
  },
];

export default function Monetization() {
  return (
    <section id="monetization" className="py-28 bg-white dark:bg-[#13101a]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="23" title="Business Model" subtitle="How This Makes Money" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-20 max-w-2xl"
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
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-4">
            Credit-Based Freemium Model
          </h3>
          <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-4 max-w-2xl">
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
                    className="flex items-start gap-3 text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed"
                  >
                    <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FAF9FA] dark:bg-[#1e1628] rounded-xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
              <p className="text-xs font-bold text-[#7D767A] dark:text-gray-500 uppercase tracking-wider mb-4">
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
                    className="flex items-start gap-3 text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed"
                  >
                    <span className="text-[#3D2B4C] dark:text-purple-400 mt-0.5 shrink-0">✓</span>
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
          <p className="text-sm text-[#7D767A] dark:text-gray-500 italic">
            Credits remaining visible at top right; generation cost shown on button
          </p>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mb-20" />

        {/* ── PRICING TIERS ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-4">
            Pricing Tiers
          </h3>
          <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-10 max-w-2xl">
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
          <p className="text-sm text-[#7D767A] dark:text-gray-500 italic mb-12">
            Freemium model with three tiers; annual discount saves ~17%
          </p>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 ${
                  tier.highlight
                    ? "bg-[#3D2B4C] text-white"
                    : "bg-[#FAF9FA] dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30"
                }`}
              >
                <p
                  className={`font-clash text-lg font-semibold mb-2 ${
                    tier.highlight ? "text-white" : "text-[#1D1A1C] dark:text-white"
                  }`}
                >
                  {tier.name}
                </p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span
                    className={`font-clash text-3xl font-bold ${
                      tier.highlight ? "text-white" : "text-[#1D1A1C] dark:text-white"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={`text-sm ${
                        tier.highlight ? "text-purple-200" : "text-[#7D767A] dark:text-gray-500"
                      }`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-2 mb-5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm leading-relaxed ${
                        tier.highlight ? "text-white/85" : "text-[#5C5759] dark:text-gray-300"
                      }`}
                    >
                      <span
                        className={`mt-0.5 shrink-0 ${
                          tier.highlight ? "text-purple-300" : "text-[#3D2B4C] dark:text-purple-400"
                        }`}
                      >
                        •
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p
                  className={`text-xs italic ${
                    tier.highlight ? "text-purple-200" : "text-[#7D767A] dark:text-gray-500"
                  }`}
                >
                  {tier.target}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pricing rationale */}
          <div className="bg-[#FAF9FA] dark:bg-[#1e1628] rounded-xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30 max-w-2xl">
            <p className="text-xs font-bold text-[#7D767A] dark:text-gray-500 uppercase tracking-wider mb-3">
              Pricing Rationale
            </p>
            <p className="text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed">
              Based on AI generation costs (~₹2–4 per image) + infrastructure + margin. Free tier
              sustainable because 80% of users generate &lt;5 outfits/day. Power users (20%)
              subsidize free users. Annual discount (17%) improves retention.
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mb-20" />

        {/* ── ADDITIONAL REVENUE STREAMS ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-4">
            Additional Revenue Streams
          </h3>

          <div className="max-w-2xl">
            {revenueStreams.map((stream, i) => (
              <div
                key={stream.title}
                className={`py-6 ${
                  i < revenueStreams.length - 1
                    ? "border-b border-[#E8E5E6] dark:border-[#3D2B4C]/30"
                    : ""
                }`}
              >
                <p className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-2">
                  {stream.title}
                </p>
                <p className="text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed mb-2">
                  {stream.description}
                </p>
                <p className="text-xs text-[#7D767A] dark:text-gray-500 italic">
                  {stream.metric}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mb-20" />

        {/* ── ASSUMPTIONS TO VALIDATE ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-clash text-2xl font-semibold text-[#1D1A1C] dark:text-white mb-4">
            Assumptions to Validate
          </h3>
          <p className="text-[#5C5759] dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
            The business model is directionally right, but these questions need real data before
            committing resources.
          </p>

          <div className="max-w-2xl">
            {assumptions.map((a, i) => (
              <div
                key={i}
                className={`py-6 ${
                  i < assumptions.length - 1
                    ? "border-b border-[#E8E5E6] dark:border-[#3D2B4C]/30"
                    : ""
                }`}
              >
                <p className="text-[#1D1A1C] dark:text-gray-200 font-medium leading-relaxed mb-2">
                  {a.question}
                </p>
                <p className="text-sm text-[#7D767A] dark:text-gray-500 leading-relaxed">
                  {a.method}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
