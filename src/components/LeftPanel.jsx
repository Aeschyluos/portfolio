import React from "react";
import Name from "./Name";

export default function LeftPanel() {
  return (
    <div className="relative px-6 py-8 w-full rounded-sm">
      <div className="max-w-[320px]">
        <h1 className="text-4xl md:text-4xl">
          <Name inputText="KHARON" />
          <Name inputText="PUTRA" />
          <Name inputText="PRATAMA" />
        </h1>

        <p className="text-xs font-semibold ">Computer Science Student</p>

        <p className="text-xs max-w-xs">
          With a deep passion for programming and a diverse portfolio of
          innovative and self-driven projects.
        </p>

        <nav className="mt-8">
          <ul className="space-y-2 text-xs ">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#0000]" />
              <span>About</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span>Projects</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <span className="w-3 h-3 rounded-full bg-white/20" />
              <span>Experience</span>
            </li>
          </ul>
        </nav>

        <div className="mt-10 flex items-center gap-3">
          <button
            aria-label="github"
            className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center text-xs"
          >
            GH
          </button>
          <button
            aria-label="email"
            className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center text-xs"
          >
            ✉
          </button>
          <button
            aria-label="resume"
            className="w-9 h-9 rounded-full bg-black/30 flex items-center justify-center text-xs"
          >
            📄
          </button>
        </div>
      </div>
    </div>
  );
}
