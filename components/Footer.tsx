"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/styles/animations";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#1D1A1C] text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Main */}
          <motion.div {...fadeInUp}>
            <h2 className="font-clash text-4xl font-semibold mb-2">Atelia</h2>
            <p className="text-gray-400 mb-4">AI Virtual Try-On for Confident Shopping</p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
              <span>6 weeks</span>
              <span>•</span>
              <span>Solo project</span>
              <span>•</span>
              <span>72 screens</span>
              <span>•</span>
              <span>27 design decisions</span>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div {...fadeInUp}>
            <h3 className="font-clash text-xl font-semibold mb-4">Let's Connect</h3>
            <div className="space-y-3">
              {[
                { icon: "📧", label: "Email", href: "mailto:your@email.com" },
                { icon: "💼", label: "LinkedIn", href: "#" },
                { icon: "🐦", label: "Twitter", href: "#" },
                { icon: "🏀", label: "Dribbble", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#3D2B4C] bg-[#3D2B4C]/20 px-3 py-2 rounded-lg">
              Open to full-time product design opportunities
            </p>
          </motion.div>

          {/* Nav */}
          <motion.div {...fadeInUp}>
            <h3 className="font-clash text-xl font-semibold mb-4">More Work</h3>
            <div className="space-y-3">
              {[
                { label: "Next Project →", href: "#" },
                { label: "All Projects", href: "#" },
                { label: "About Me", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Your Name. Built with Next.js & Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
