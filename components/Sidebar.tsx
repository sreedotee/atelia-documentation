"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#overview", label: "Overview" },
  { href: "#research", label: "Research" },
  { href: "#framework", label: "Framework" },
  { href: "#iterations", label: "Iterations" },
  { href: "#decisions", label: "Decisions" },
  { href: "#final-design", label: "Final Design" },
  { href: "#validation", label: "Validation" },
  { href: "#constraints", label: "Constraints" },
  { href: "#impact", label: "Impact" },
  { href: "#reflection", label: "Reflection" },
];

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export default function Sidebar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));

      // Active section
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 240,
        height: "100vh",
        background: "#FAFAFA",
        borderRight: "1px solid #E5E5E5",
        padding: "60px 40px",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Progress indicator — left edge */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 2,
          height: "100vh",
          background: "#E5E5E5",
        }}
      >
        <div
          style={{
            width: 2,
            background: "#000000",
            height: `${scrollProgress}%`,
            transition: "height 0.05s linear",
          }}
        />
      </div>

      {/* Logo */}
      <div style={{ marginBottom: 64 }}>
        <a href="#" style={{ textDecoration: "none" }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.5px",
              color: "#000",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            ATELIA
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#737373",
              marginTop: 4,
              letterSpacing: "0.3px",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Case Study
          </div>
        </a>
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={item.href}
              href={item.href}
              className="sidebar-nav-item"
              style={{
                color: isActive ? "#000" : "#737373",
                fontWeight: isActive ? 500 : 400,
                borderLeftColor: isActive ? "#000" : "transparent",
              }}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
