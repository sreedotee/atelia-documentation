"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const findings = [
  {
    title: "Scattered Saving",
    text: "60% of respondents save clothing items across multiple platforms such as screenshots, wishlists, and social media saves. This fragmentation makes it difficult to retrieve items later.",
    quote: "I have screenshots everywhere in my camera roll. When I want to find something, I have no idea where it is.",
    avatarSide: "left" as const,
  },
  {
    title: "Seeking Social Validation",
    text: "75% of respondents ask friends or family for opinions before purchasing clothing online, most commonly by sending screenshots or links in chats.",
    quote: "I always screenshot and send to my group chat like 'thoughts?' I can't tell if it will look good on me.",
    avatarSide: "right" as const,
  },
  {
    title: "Organize by Occasion",
    text: "30% of respondents do not organize saved clothing items at all. Among those who do, the most common organization methods are by occasion (vacation, work, events) or by item type.",
    quote: "I have different Pinterest boards for different things I'm shopping for—right now vacation and work stuff.",
    avatarSide: "left" as const,
  },
  {
    title: "Purchase Uncertainty",
    text: "The most common concerns when buying clothing online are how the item will look on the body, fit accuracy, and fabric quality.",
    quote: "I order two sizes and return what doesn't fit. It's annoying but I have no other way to know.",
    avatarSide: "right" as const,
  },
];

function Avatar() {
  return (
    <div className="shrink-0 w-10 h-10 rounded-full bg-[#E8453C] flex items-center justify-center">
      {/* placeholder — swap for person illustration later */}
    </div>
  );
}

function ChatBubble({ quote }: { quote: string }) {
  return (
    <div className="rounded-2xl border border-[#DDD8E0] bg-[#F5F0F8] px-4 py-3">
      <p className="text-xs leading-relaxed text-[#3D2B4C]">{quote}</p>
    </div>
  );
}

function BentoCard({
  title,
  text,
  quote,
  avatarSide,
  className = "",
}: {
  title: string;
  text: string;
  quote: string;
  avatarSide: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 flex flex-col justify-between min-h-[220px] ${className}`}
    >
      {/* Title */}
      <h3 className="font-clash text-2xl font-medium text-[#1D1A1C] leading-snug">
        {title}
      </h3>

      {/* Chat row */}
      <div
        className={`flex items-end gap-3 ${
          avatarSide === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <Avatar />
        <ChatBubble quote={quote} />
      </div>

      {/* Stat text */}
      <p className="text-xs text-[#7D767A] leading-relaxed text-center px-2">
        {text}
      </p>
    </div>
  );
}

export default function UserResearch() {
  const [scattered, social, occasion, purchase] = findings;

  return (
    <section id="user-research" className="py-28 bg-[#F0EEEF]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="" title="User Research Findings" />

        <motion.p
          {...fadeInUp}
          className="text-lg text-[#5C5759] leading-relaxed mb-12 max-w-2xl"
        >
          I interviewed 5 online shoppers (ages 22–34, shop 2+ times/month,
          80%+ online purchases) to understand current behavior and pain points.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {/* Left: tall card, spans both rows */}
          <BentoCard
            {...scattered}
            className="row-span-2 min-h-[480px]"
          />

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Top-right: wide card */}
            <BentoCard {...social} />

            {/* Bottom-right: two equal cards */}
            <div className="grid grid-cols-2 gap-4">
              <BentoCard {...occasion} />
              <BentoCard {...purchase} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
