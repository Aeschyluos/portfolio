import React, { useState, useEffect } from "react";
import Name from "./Name";
import GithubIcon from "../assets/GithubIcon.png";
import EmailIcon from "../assets/EmailIcon.png";
import LinkedinLogo from "../assets/LinkedinLogo.jpg";

export default function LeftPanel() {
  const [activeSection, setActiveSection] = useState("about");
  const [cvHovered, setCvHovered] = useState(false);
  const githubLink = "https://github.com/aeschyluos";
  const email = "kharonpratama@gmail.com";
  const resume =
    "https://drive.google.com/file/d/1xlMQuT_6p52FlcMpr_yfB-Qj5kpMnVdc/view?usp=sharing";

  const linkedinLink =
    "https://www.linkedin.com/in/kharon-putra-pratama-0667ab36a";

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -66% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative px-6 py-8 w-full rounded-sm">
      <div className="max-w-[320px]">
        <h1 className="text-4xl md:text-4xl">
          <Name inputText="KHARON" />
          <Name inputText="PUTRA" />
          <Name inputText="PRATAMA" />
        </h1>

        <p
          className="text-xs text-muted"
          style={{
            marginBottom: "2rem",
          }}
        >
          Looking for internships.
        </p>

        <nav
          style={{
            marginBottom: "5rem",
          }}
        >
          <ul>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => scrollToSection(item.id)}
                  style={{ marginBottom: ".8rem" }}
                >
                  <span
                    style={{
                      width: isActive ? "14px" : "10px",
                      height: isActive ? "14px" : "10px",
                      backgroundColor: isActive
                        ? "white"
                        : "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                      marginRight: "1rem",
                    }}
                    className="group-hover:opacity-60"
                  />
                  <span
                    className="font-geist transition-all duration-300"
                    style={{
                      color: isActive ? "white" : "rgba(156, 163, 175, 1)",
                      fontWeight: isActive ? "600" : "400",
                    }}
                  >
                    {item.label}
                  </span>
                </li>
              );
            })}
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
                marginRight: "2rem",
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
                marginRight: "2rem",
                maxWidth: "none",
                display: "block",
                filter: "invert(100%) brightness(200%)",
              }}
              className="object-contain hover:cursor-pointer hover:scale-105 "
            />
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-0"
          >
            <img
              src={LinkedinLogo}
              alt="Linkedin"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "2rem",
                maxWidth: "none",
                display: "block",
                filter: "invert(100%) brightness(200%)",
              }}
              className="object-contain hover:cursor-pointer hover:scale-105 "
            />
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CV"
            onMouseEnter={() => setCvHovered(true)}
            onMouseLeave={() => setCvHovered(false)}
            style={{
              border: "1px solid rgba(156, 163, 175, 0.5)",
              padding: "10px 16px",
              borderRadius: "4px",
              fontSize: "12px",
              color: cvHovered ? "var(--fg)" : "black",
              backgroundColor: cvHovered ? "transparent" : "white",
              textDecoration: "none",
              transition: "all 0.5s ease",
              fontWeight: "600",
            }}
          >
            VIEW CV
          </a>
        </div>
      </div>
    </div>
  );
}
