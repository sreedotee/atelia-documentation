"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const chapters = [
  { time: "0:00", name: "Introduction" },
  { time: "0:30", name: "Mode 1: Collecting (Save item flow)" },
  { time: "1:30", name: "Mode 2: Try-On (Generate outfit)" },
  { time: "2:30", name: "Mode 3: Organizing (History & saved outfits)" },
  { time: "3:00", name: "Design system highlights" },
];

const protoFlows = [
  "Paste a link and save to collection",
  "Generate an outfit using Try-On",
  "Browse saved outfits in History",
];

export default function VideoAndPrototype() {
  return (
    <>
      {/* Video Section */}
      <section id="video" className="py-28 bg-[#FAF9FA] dark:bg-[#1a1520]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader number="26" title="Video Walkthrough" />

          <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-10 max-w-2xl">
            Watch a 3-minute walkthrough of the complete user experience.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Video placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div
                className="w-full aspect-video rounded-2xl bg-[#3D2B4C] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #3D2B4C 0%, #6b3fa0 100%)",
                }}
              >
                <div className="text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                    <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="white">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="font-clash text-xl font-semibold">Video Walkthrough</p>
                  <p className="text-purple-300 text-sm mt-1">
                    Add your Loom/YouTube URL to embed here
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 text-purple-300 text-sm">3:24</div>
              </div>
              <p className="text-sm text-[#7D767A] dark:text-gray-500 mt-3 text-center">
                Full prototype walkthrough: Save item → Generate outfit → Save result (3:24)
              </p>
            </motion.div>

            {/* Chapters */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#2a1e36] rounded-2xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30"
            >
              <h4 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-5">
                Chapters
              </h4>
              <div className="space-y-4">
                {chapters.map((c, i) => (
                  <div key={c.time} className="flex items-start gap-3">
                    <span className="text-xs font-mono text-[#3D2B4C] dark:text-purple-400 bg-[#3D2B4C]/10 dark:bg-purple-500/20 px-2 py-0.5 rounded shrink-0">
                      {c.time}
                    </span>
                    <p className="text-sm text-[#5C5759] dark:text-gray-300">{c.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prototype Section */}
      <section id="prototype" className="py-28 bg-white dark:bg-[#1e1530]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader number="27" title="Interactive Prototype" />

          <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-10 max-w-2xl">
            Try the interactive prototype yourself. Click through the main flows.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Figma embed placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div
                className="w-full aspect-video rounded-2xl bg-[#FAF9FA] dark:bg-[#2a1e36] border-2 border-dashed border-[#E8E5E6] dark:border-[#3D2B4C]/50 flex items-center justify-center"
              >
                <div className="text-center p-8">
                  <span className="text-5xl mb-4 block">🎨</span>
                  <p className="font-clash text-xl font-semibold text-[#1D1A1C] dark:text-white mb-2">
                    Figma Prototype
                  </p>
                  <p className="text-[#5C5759] dark:text-gray-400 text-sm max-w-xs">
                    Replace this placeholder with your Figma embed URL to show the interactive
                    prototype
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-[#FAF9FA] dark:bg-[#2a1e36] rounded-2xl p-6 border border-[#E8E5E6] dark:border-[#3D2B4C]/30">
                <h4 className="font-clash text-lg font-semibold text-[#1D1A1C] dark:text-white mb-4">
                  Try these flows:
                </h4>
                <div className="space-y-4">
                  {protoFlows.map((flow, i) => (
                    <div key={flow} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#3D2B4C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-sm text-[#5C5759] dark:text-gray-300">{flow}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="block w-full py-3 text-center bg-[#3D2B4C] text-white rounded-xl font-medium hover:bg-[#2a1e36] transition-colors"
              >
                Open in Figma →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
