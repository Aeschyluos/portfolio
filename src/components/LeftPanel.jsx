import React from "react";
import Name from "./Name";
import GithubIcon from "../assets/GithubIcon.png";
import EmailIcon from "../assets/EmailIcon.png";
import CVIcon from "../assets/CVIcon.png";
import IconButton from "./IconButton";

export default function LeftPanel() {
  const githubLink = "https://github.com/aeschyluos";
  const email = "kharonpratama@gmail.com";
  const resume = "";

  return (
    <div className="relative px-6 py-8 w-full rounded-sm">
      <div className="max-w-[320px]">
        <h1 className="text-4xl md:text-4xl">
          <Name inputText="KHARON" />
          <Name inputText="PUTRA" />
          <Name inputText="PRATAMA" />
        </h1>

        <p className="text-xs font-semibold">Computer Science Student</p>
        <p className="text-xs max-w-xs">
          With a deep passion for programming and a diverse portfolio of
          innovative and self-driven projects.
        </p>

        <nav className="mt-8">
          <ul className="space-y-2 text-xs">
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
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-0"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "1rem",
                maxWidth: "none",
                display: "block",
                filter: "invert(100%) brightness(200%)",
              }}
              className="object-contain hover:cursor-pointer hover:scale-105 text-zinc-400"
            />
          </a>

          <a
            href={`mailto:${email}`}
            aria-label="Send email"
            className="inline-block p-0"
          >
            <img
              src={EmailIcon}
              alt="Email"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "1rem",
                maxWidth: "none",
                display: "block",
                filter: "invert(100%) brightness(200%)",
              }}
              className="object-contain hover:cursor-pointer hover:scale-105 "
            />
          </a>

          <a
            href={resume || "#"}
            target={resume ? "_blank" : undefined}
            rel={resume ? "noopener noreferrer" : undefined}
            aria-label="Open resume"
            className="inline-block p-0"
          >
            <img
              src={CVIcon}
              alt="Resume"
              width={24}
              height={24}
              style={{
                width: "32px",
                height: "32px",
                marginRight: "1rem",
                maxWidth: "none",
                display: "block",
                filter: "invert(100%) brightness(200%)",
              }}
              className="object-contain hover:cursor-pointer hover:scale-105 "
            />
          </a>
        </div>
      </div>
    </div>
  );
}
