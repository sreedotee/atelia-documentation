"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const findings = [
  {
    title: "Scattered Saving",
    text: "60% save clothing items across multiple platforms (screenshots, wishlists, social saves), making them harder to retrieve later.",
    quote: "I have screenshots everywhere in my camera roll. When I need something, I can't find it.",
    avatarSide: "left" as const,
  },
  {
    title: "Seeking Social Validation",
    text: "75% ask friends or family for opinions before buying clothing online, usually by sending screenshots or links.",
    quote: "I usually screenshot and send it to my group chat like 'thoughts?' I can't tell if it'll look good on me.",
    avatarSide: "right" as const,
  },
  {
    title: "Organize by Occasion",
    text: "30% don't organize saved items at all. Those who do mostly sort by occasion or item type.",
    quote: "I have Pinterest boards for different things I'm shopping for like vacation or work.",
    avatarSide: "left" as const,
  },
  {
    title: "Purchase Uncertainty",
    text: "Top concerns when buying clothes online are appearance, fit, and fabric quality.",
    quote: "I order two sizes and return the one that doesn't fit. It's annoying but I have no other way.",
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
      <div className="max-w-[1440px] mx-auto px-6">
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
            className="row-span-2 min-h-[576px]"
          />

          {/* Right column — row-span-2 so it matches the left card's height */}
          <div className="row-span-2 grid grid-rows-2 gap-2">
            {/* Top-right: wide card */}
            <BentoCard {...social} className="h-full" />

            {/* Bottom-right: two equal cards */}
            <div className="grid grid-cols-2 gap-2">
              <BentoCard {...occasion} className="h-full" />
              <BentoCard {...purchase} className="h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
