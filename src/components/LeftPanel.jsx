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
          <IconButton
            onClick={() =>
              window.open(githubLink, "_blank", "noopener,noreferrer")
            }
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-1/4 h-1/4 opacity-70"
            />
          </IconButton>

          <IconButton
            onClick={() => (window.location.href = `mailto:${email}`)}
          >
            <img
              src={EmailIcon}
              alt="Email"
              className="w-1/4 h-1/4 opacity-70"
            />
          </IconButton>

          <IconButton
            onClick={() => window.open(resume, "_blank", "noopener,noreferrer")}
          >
            <img src={CVIcon} alt="Resume" className="w-1/4 h-1/4 opacity-70" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
