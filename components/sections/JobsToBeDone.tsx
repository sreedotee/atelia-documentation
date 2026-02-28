"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeInUp } from "@/styles/animations";

const jobs = [
  {
    number: "01",
    when: "When I see clothes I like online,",
    want: "I want to save them somewhere organized,",
    so: "so I can find them when I'm ready to buy.",
  },
  {
    number: "02",
    when: "When I'm considering a purchase,",
    want: "I want to see how items look on my body,",
    so: "so I can decide with confidence without asking friends.",
  },
  {
    number: "03",
    when: "When I have items from different stores,",
    want: "I want to visualize them together,",
    so: "so I can see if they work as an outfit.",
  },
];

export default function JobsToBeDone() {
  return (
    <section id="jobs" className="py-28 bg-white dark:bg-[#1e1530]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader number="08" title="Jobs-to-be-Done" />

        <motion.p {...fadeInUp} className="text-lg text-[#5C5759] dark:text-gray-300 leading-relaxed mb-12 max-w-2xl">
          Based on research findings, I identified three core jobs users need to accomplish when
          shopping for clothes online.
        </motion.p>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.number}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-8 p-8 rounded-2xl bg-[#FAF9FA] dark:bg-[#2a1e36] border border-[#E8E5E6] dark:border-[#3D2B4C]/30 hover:shadow-md transition-shadow"
            >
              <span className="font-clash text-7xl font-bold text-[#3D2B4C]/15 dark:text-purple-500/20 leading-none shrink-0">
                {job.number}
              </span>
              <div className="pt-2">
                <p className="text-[#5C5759] dark:text-gray-400 text-lg mb-1">{job.when}</p>
                <p className="text-[#1D1A1C] dark:text-white text-lg font-semibold mb-1">{job.want}</p>
                <p className="text-[#5C5759] dark:text-gray-400 text-lg italic">{job.so}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-[#5C5759] dark:text-gray-400 italic"
        >
          These jobs shaped the app's core features and three behavioral modes.
        </motion.p>
      </div>
    </section>
  );
}
