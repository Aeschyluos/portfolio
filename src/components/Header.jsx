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

  function scrollToId(id) {
    setMobileOpen(false);
    if (!id) {
      history.replaceState(null, "", location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    history.replaceState(null, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function activateLink(e, id) {
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToId(id);
    }
  }

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
      className={`fixed inset-x-0 top-0 left-0 w-full h-[85px] z-50 transition-all duration-500 flex items-center`}
      style={{ boxShadow: isScrolled ? "0 2px 2px rgba(0,0,0,0.5)" : "none" }}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-2 md:px-12">
        <span
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToId(null);
          }}
          className="inline-block font-geist hover:text-accent hover:drop-shadow-[0_0_8px_#8b2f6b] cursor-pointer duration-300"
          style={{
            marginLeft: "5rem",
            fontSize: "1.3rem",
          }}
        >
          Kharon
        </span>

        {/* <-- fixed: use `flex` on parent and `space-x-8` on nav to keep everything in one row */}
        <div className="flex items-center mr-[4rem]">
          <nav className="flex items-center justify-between w-[28rem]">
            {/* HARD-CODED LINKS — no `block`, spacing handled by `space-x-8` */}
            <span
              href="#projects"
              onClick={(e) => {
                if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
                  activateLink(e, "projects");
                }
              }}
              onKeyDown={(e) => activateLink(e, "projects")}
              role="button"
              tabIndex={0}
              aria-current={active === "projects" ? "true" : undefined}
              className="inline-flex items-center font-geist hover:text-accent hover:drop-shadow-[0_0_8px_#8b2f6b] cursor-pointer duration-300"
              style={{ flex: 1, justifyContent: "center" }}
            >
              Projects
            </span>

            <span
              href="#resume"
              onClick={(e) => {
                if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
                  activateLink(e, "resume");
                }
              }}
              onKeyDown={(e) => activateLink(e, "resume")}
              role="button"
              tabIndex={0}
              aria-current={active === "resume" ? "true" : undefined}
              className="inline-flex items-center font-geist hover:text-accent hover:drop-shadow-[0_0_8px_#8b2f6b] cursor-pointer duration-300"
              style={{ flex: 1, justifyContent: "center" }}
            >
              Resume
            </span>

            <span
              href="#skills"
              onClick={(e) => {
                if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
                  activateLink(e, "skills");
                }
              }}
              onKeyDown={(e) => activateLink(e, "skills")}
              role="button"
              tabIndex={0}
              aria-current={active === "skills" ? "true" : undefined}
              className="inline-flex items-center font-geist hover:text-accent hover:drop-shadow-[0_0_8px_#8b2f6b] cursor-pointer duration-300"
              style={{ flex: 1, justifyContent: "center" }}
            >
              Skills
            </span>

            <span
              href="#about"
              onClick={(e) => {
                if (e.button === 0 && !e.metaKey && !e.ctrlKey) {
                  activateLink(e, "about");
                }
              }}
              onKeyDown={(e) => activateLink(e, "about")}
              role="button"
              tabIndex={0}
              aria-current={active === "about" ? "true" : undefined}
              className="inline-flex items-center font-geist hover:text-accent hover:drop-shadow-[0_0_8px_#8b2f6b] cursor-pointer duration-300"
              style={{ flex: 1, justifyContent: "center" }}
            >
              About
            </span>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
