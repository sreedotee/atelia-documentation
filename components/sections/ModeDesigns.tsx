"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

interface Screen {
  title: string;
  caption: string;
  bg: string;
  icon: string;
}

interface ModeDesignsProps {
  sectionNumber: string;
  id: string;
  modeTitle: string;
  subtitle: string;
  intro: string;
  screens: Screen[];
  feature?: { icon: string; title: string; text: string };
  flowSteps?: string[];
  bg?: string;
}

// Placeholder phone screen component
function PhoneScreen({ screen }: { screen: Screen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative mb-4 overflow-hidden rounded-2xl bg-[#FAF9FA] border border-[#C9B8D4] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Mock phone screen */}
        <div
          className="w-full aspect-[9/16] flex flex-col items-center justify-center gap-4 p-6"
          style={{ background: screen.bg }}
        >
          <span className="text-6xl">{screen.icon}</span>
          <p className="font-clash text-sm md:text-base lg:text-lg font-medium text-white text-center">{screen.title}</p>
          <div className="space-y-2 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-2 rounded bg-white/20" style={{ width: `${70 + i * 10}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-clash text-base font-medium text-[#1D1A1C] mb-1">
          {screen.title}
        </h4>
        <p className="text-sm text-[#5C5759] leading-relaxed">{screen.caption}</p>
      </div>
    </motion.div>
  );
}

export default function ModeDesigns({
  sectionNumber,
  id,
  modeTitle,
  subtitle,
  intro,
  screens,
  feature,
  flowSteps,
  bg = "bg-white",
}: ModeDesignsProps) {
  return (
    <section id={id} className={`py-28 ${bg}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number={sectionNumber} title={modeTitle} subtitle={subtitle} />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] leading-relaxed mb-12 max-w-2xl">
          {intro}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {screens.map((screen) => (
            <PhoneScreen key={screen.title} screen={screen} />
          ))}
        </div>

        {feature && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#FAF9FA] border border-[#C9B8D4] rounded-2xl p-6 flex items-start gap-4 mb-8"
          >
            <span className="text-2xl">{feature.icon}</span>
            <div>
              <h4 className="font-clash text-sm md:text-base lg:text-lg font-medium text-[#1D1A1C] mb-2">
                {feature.title}
              </h4>
              <p className="text-[#5C5759]">{feature.text}</p>
            </div>
          </motion.div>
        )}

        {flowSteps && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#FAF9FA] rounded-2xl p-6 border border-[#C9B8D4]"
          >
            <h4 className="font-clash text-sm md:text-base lg:text-lg font-medium text-[#1D1A1C] mb-4">
              User Flow
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {flowSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-white border border-[#C9B8D4] rounded-lg text-sm text-[#1D1A1C] font-medium">
                    {step}
                  </span>
                  {i < flowSteps.length - 1 && (
                    <span className="text-[#3D2B4C] font-bold">→</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
