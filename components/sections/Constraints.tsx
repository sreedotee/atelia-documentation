"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const categories = [
  {
    label: "Technical",
    items: [
      {
        title: "AI quality depends on input photos.",
        body: "Garbage in, garbage out. If a user uploads blurry or poorly lit photos, generated outfits will be poor quality. Better models can't fix bad inputs.",
        implication:
          "Photo upload instructions must be explicit (lighting, angles, poses). Show examples of good vs bad inputs during onboarding.",
      },
      {
        title: "Generation latency is 4–7 seconds minimum.",
        body: "Can't make it instant—AI processing takes time. Faster processing requires more expensive infrastructure.",
        implication:
          "Loading states must feel intentional, not broken. Progress indicators and anticipatory messaging ('Generating your look...') reduce perceived wait time.",
      },
      {
        title: "Link parsing can fail.",
        body: "Not all websites allow scraping. Some have bot protection; others don't expose metadata cleanly. Can't guarantee 100% success rate.",
        implication:
          "Fallback to manual upload. Clear, non-blaming error messages when a link fails. Always offer an alternative path.",
      },
      {
        title: "Items go out of stock or links break.",
        body: "User saves an item today; two weeks later it's sold out or the URL is dead. Retailer inventory is outside our control.",
        implication:
          "Cache item images and details locally. Show 'may no longer be available' on older items. Never delete from a collection when a link breaks.",
      },
      {
        title: "Can't directly purchase in-app.",
        body: "No payment processing, fulfillment, or customer service infrastructure. Competing with retailers on this is a losing battle.",
        implication:
          "Deep-link to retailer site for purchase. Position Atelia as a decision tool, not a shopping platform.",
      },
      {
        title: "Multi-store support means no single source of truth.",
        body: "Each retailer has different size charts, return policies, and shipping costs. Standardizing across stores isn't possible.",
        implication:
          "Don't promise fit guarantees. Show size and fit info from the retailer but don't interpret it. Let users make informed decisions.",
      },
    ],
  },
  {
    label: "User Experience",
    items: [
      {
        title: "Privacy concerns with body photos.",
        body: "Users must upload 6 face + 2 body photos to create an AI model. This is sensitive personal data—many will hesitate or abandon.",
        implication:
          "On-demand model setup (not forced at signup). Clear privacy messaging: 'Photos processed locally, not shared, deleted on request.' Build trust before asking.",
      },
      {
        title: "Learning curve for a new interaction pattern.",
        body: "Paste-link saving isn't standard behavior. Users need to learn: copy link → open app → paste → save. This adds friction initially.",
        implication:
          "Onboarding must show the paste-link flow clearly with tooltips and an example video. Make it easy to discover and remember.",
      },
      {
        title: "Trust deficit with AI-generated images.",
        body: "'This looks fake' or 'It won't actually look like this on me'—skepticism about AI try-on accuracy is real and reasonable.",
        implication:
          "Set expectations honestly: 'Preview only, fit may vary.' Show quality differences between free and premium models. Don't overpromise realism.",
      },
      {
        title: "Spam prevention is necessary.",
        body: "Free tier allows abuse: bots generating thousands of outfits, fake links, low-quality uploads. Manual moderation at scale isn't viable.",
        implication:
          "Credit limits throttle abuse (50/day is manageable). Rate limiting on paste-link (max 20 items/day for free tier). Require phone verification.",
      },
      {
        title: "AI generation can fail.",
        body: "Model errors, timeouts, incompatible item types. Can't guarantee 100% success for every attempt.",
        implication:
          "Graceful failure states with refunded credits. 'Generation failed, try again'—never charge for a failed attempt. Clear error messages, not generic ones.",
      },
    ],
  },
  {
    label: "Business",
    items: [
      {
        title: "Retailer partnerships are required for long-term success.",
        body: "While the app works without them, affiliate rates improve with direct partnerships. Some retailers may see this as competition.",
        implication:
          "Position as value-add, not a threat. Emphasize return reduction and higher conversion. Offer a B2B white-label version for reluctant retailers.",
      },
      {
        title: "Success metrics are undefined initially.",
        body: "Is success: user retention? outfits generated? purchases made? return rate reduction? Different metrics require different product priorities.",
        implication:
          "Instrument everything. Track: save rate, generation rate, collection usage, affiliate clicks, purchase conversion. Learn what matters, then optimize for it.",
      },
      {
        title: "Monetization must balance revenue with user value.",
        body: "Too aggressive (low free tier) kills growth. Too generous (high limits) is unsustainable. Finding the right balance is iterative.",
        implication:
          "Start conservative (50 credits/day), measure conversion and churn, then adjust. A/B test different free tier limits across user cohorts.",
      },
      {
        title: "Customer support at scale is expensive.",
        body: "Users will have questions about AI quality, credits, refunds, privacy, and technical issues. A large support team isn't affordable initially.",
        implication:
          "Self-service help center, FAQ, in-app tooltips. Anticipate common questions and answer them proactively in the UI to reduce support tickets.",
      },
      {
        title: "The competitive landscape is moving fast.",
        body: "Other AI try-on apps exist (ASOS, Zara AR). Big players like Amazon and Google could enter with far more resources.",
        implication:
          "Differentiate on experience, not just technology. Universal tool (works everywhere) vs single-retailer. Build a moat through superior UX, not just AI quality.",
      },
    ],
  },
];

export default function Constraints() {
  return (
    <section id="constraints" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="24" title="Constraints" subtitle="Design Within Reality" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-20 max-w-2xl"
        >
          Every design decision was made within real technical, business, and user constraints.
          These weren&apos;t limitations—they were guardrails that led to better solutions.
        </motion.p>

        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={ci < categories.length - 1 ? "mb-16" : "mb-0"}
          >
            {/* Category label */}
            <p className="text-xs font-bold text-[#3D2B4C] dark:text-purple-400 uppercase tracking-widest mb-8">
              {cat.label}
            </p>

            {/* Constraint items */}
            <div className="max-w-2xl">
              {cat.items.map((item, ii) => (
                <div
                  key={item.title}
                  className={`py-6 ${
                    ii < cat.items.length - 1
                      ? "border-b border-[#E8E5E6] dark:border-[#3D2B4C]/30"
                      : ""
                  }`}
                >
                  <p className="text-[#1D1A1C] dark:text-gray-200 leading-relaxed mb-1">
                    <span className="font-semibold">{item.title}</span>{" "}
                    {item.body}
                  </p>
                  <p className="text-sm text-[#7D767A] dark:text-gray-500 leading-relaxed mt-2">
                    <span className="font-medium">→</span> {item.implication}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider between categories */}
            {ci < categories.length - 1 && (
              <div className="h-px bg-[#E8E5E6] dark:bg-[#3D2B4C]/30 mt-16" />
            )}
          </motion.div>
        ))}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-[#2a1e36] rounded-2xl p-8 border border-[#E8E5E6] dark:border-[#3D2B4C]/30 max-w-2xl"
        >
          <p className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-3">
            Why Constraints Matter
          </p>
          <p className="text-sm text-[#5C5759] dark:text-gray-300 leading-relaxed">
            These constraints weren&apos;t obstacles to work around—they shaped better decisions.
            Privacy concerns led to on-demand model setup. AI latency led to thoughtful loading
            states. Cost constraints led to the credit system. Designing within reality produces
            more resilient solutions than ignoring it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
