import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import bitesLogo from "../assets/biteslogo.png";

const PROJECTS = [
  {
    id: "gothliat",
    title: "GOTHLIAT",
    short: "Digital store of reworked clothing",
    description: "Longer description here...",
    tech: ["React", "Node"],
    img: "na",
    year: 2024,
    live: "#",
    repo: "https://github.com/Aeschyluos/catalog",
  },
  {
    id: "bites",
    title: "BiTEs",
    short: "Online food delivery application centralized in Binus",
    description: "Longer description here...",
    tech: ["Figma", "Canva"],
    img: bitesLogo,
    year: 2023,
    live: "#",
    repo: "na",
  },
  {
    id: "grups",
    title: "Grups",
    short: "Social platform for college students in Indonesia",
    description: "Longer description here...",
    tech: ["React", "Node", "Material UI"],
    img: "na",
    year: 2022,
    live: "#",
    repo: "na",
  },
];

export default function RightPanel() {
  const [projects] = useState(PROJECTS);

  return (
    <div className="bg-transparent">
      <div
        className="w-full px-8 py-6 lg:py-8"
        style={{
          marginBottom: "30rem",
          marginTop: "3rem",
        }}
      >
        <div className="max-w-full">
          <section
            id="about"
            style={{
              marginBottom: "7rem",
              scrollMarginTop: "7rem",
            }}
          >
            <h2 className="text-lg font-semibold" style={{ marginBottom: "0" }}>
              About
            </h2>
            <hr
              style={{
                opacity: "0.4",
              }}
            ></hr>
            <p
              className="text-muted leading-relaxed"
              style={{ marginBottom: "2rem" }}
            >
              I'm a Computer Science student in my 5th semester at BINUS
              University. I started coding when I was 16, making small games and
              websites. From then on, I never stopped. I've grown from small
              passion projects into building full-stack and backend systems.
              Modeling and optimizing data with MongoDB and MySQL, and packaging
              with Docker for deployment.
            </p>

            <p className="text-muted leading-relaxed">
              I’m comfortable with Python, JavaScript, C++, and C#, and I enjoy
              exploring new tools whenever a problem demands them. I’m driven by
              building clean solutions to problems and eager to contribute that
              drive and experience in internships and collaborative projects.
            </p>
          </section>

          <section
            id="projects"
            style={{
              marginBottom: "7rem",
              scrollMarginTop: "7rem",
            }}
          >
            <h2
              className="text-lg font-semibold"
              style={{
                marginBottom: "0",
              }}
            >
              Projects
            </h2>
            <hr
              style={{
                opacity: "0.4",
              }}
            ></hr>
            <div
              className="mt-6 flex flex-wrap justify-start "
              style={{ marginTop: "1rem" }}
            >
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </section>

          <section
            id="skills"
            style={{
              marginBottom: "7rem",
              scrollMarginTop: "7rem",
            }}
          >
            <h2
              className="text-lg font-semibold"
              style={{
                marginBottom: "0",
              }}
            >
              Skills
            </h2>
            <hr
              style={{
                opacity: "0.4",
              }}
            ></hr>
            <div className="mt-4 space-y-4 ">
              <p className="font-semibold font-geist text-sm ">Something</p>
              <p className="mt-1 text-xs text-muted">
                Description for this role to demonstrate scrolling.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
