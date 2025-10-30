import React from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import AnimatedBG from "./components/AnimatedBG";

export default function App() {
  return (
    <>
      <AnimatedBG />
      <div className="min-h-screen font-geist">
        <div className="max-w-6xl mx-auto flex items-start justify-center gap-16 px-12">
          {/* LEFT: keep it natural height (no nested h-screen) */}
          <aside className="w-[520px] flex-shrink-0">
            <div
              className=" flex flex-col justify-start"
              style={{ paddingTop: "var(--top-gap)" }}
            >
              <LeftPanel />
            </div>
          </aside>

          {/* RIGHT: scrollable column sized by max-height in CSS (scroll-panel) */}
          <main
            className="w-[450px] flex-shrink-0 h-[calc(100vh-3rem)] overflow-y-auto no-scrollbar pb-24"
            style={{ paddingTop: "var(--top-gap)" }}
          >
            <RightPanel />
          </main>
        </div>
      </div>
    </>
  );
}
