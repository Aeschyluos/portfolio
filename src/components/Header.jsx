import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
];

export default function Header({ isScrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  // smooth scroll helper — also preserves href behavior for direct linking
  function scrollToId(id) {
    setMobileOpen(false);

    if (!id) {
      // scroll to very top and update URL (removes hash)
      history.replaceState(null, "", location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    // update the URL hash without jumping
    history.replaceState(null, "", `#${id}`);

    // smooth scroll (sections should have scroll-margin-top so header doesn't overlap)
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Keyboard-friendly wrapper for anchor-like behavior:
  function activateLink(e, id) {
    // allow Enter/Space + mouse click
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToId(id);
    }
  }

  // update 'active' link based on scroll position
  useEffect(() => {
    function onScroll() {
      const offsets = NAV.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      const nearest = offsets[0];
      if (nearest && nearest.top !== Infinity) setActive(nearest.id);
      else setActive("");
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[85px] z-50 transition-all duration-500 flex items-center ${
        isScrolled ? "bg-black/70 shadow-lg" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 md:px-8">
        {/* Name: use an anchor so it has href and can be middle-clicked/copied */}
        <span
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToId(null);
          }}
          className="block text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white hover:text-accent hover:drop-shadow-[0_0_8px_#8b2f6b] cursor-pointer transition-all duration-300"
        >
          Kharon Putra Pratama
        </span>

        {/* Desktop nav: anchors appearing as plain text */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <span
                // set real href so direct linking works
                href={`#${id}`}
                key={id}
                onClick={(e) => {
                  if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
                    activateLink(e, id);
                  }
                }}
                onKeyDown={(e) => activateLink(e, id)}
                role="button"
                tabIndex={0}
                aria-current={isActive ? "true" : undefined}
                className={`relative px-1 py-2 text-sm md:text-base text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded ${
                  isActive ? "text-white" : "text-black"
                }`}
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <span className="relative z-10">{label}</span>
                <span
                  className={`absolute left-0 right-0 -bottom-0.5 h-[2px] origin-left transform transition-transform duration-200 rounded ${
                    isActive ? "bg-accent scale-x-100" : "bg-white/60 scale-x-0"
                  }`}
                  style={{ transformOrigin: "left center" }}
                />
              </span>
            );
          })}

          <div className="h-6 w-px bg-white/10 mx-2" />
          <ThemeToggle />
        </nav>

        {/* mobile: icons / menu button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>

      <div
        className={`md:hidden w-full bg-black/75 backdrop-blur-md transition-max-h duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[420px] py-4" : "max-h-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex gap-3">
          {NAV.map(({ id, label }) => (
            <span
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                // left click => intercept for smooth scroll
                if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
                  e.preventDefault();
                  scrollToId(id);
                }
              }}
              className="text-left text-white/90 py-3 px-2 rounded hover:text-white hover:cursor-pointer transition-colors"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
