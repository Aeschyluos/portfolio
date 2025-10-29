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
    repo: "#",
  },
  {
    id: "bites",
    title: "BiTEs",
    short: "Online food delivery application centralized in Binus",
    description: "Longer description here...",
    tech: "na",
    img: bitesLogo,
    year: 2023,
    live: "#",
    repo: "#",
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
    repo: "#",
  },
];

export default function RightPanel() {
  const [projects] = useState(PROJECTS);
  const [open, setOpen] = useState(null);

  return (
    <div className="bg-transparent">
      <div className="w-full px-8 py-6 lg:py-8">
        <div className="max-w-full">
          <section id="about" className="mb-10">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-3 text-xs text-muted leading-relaxed">
              I’m an aspiring software developer with a passion for exploring
              the vast possibilities of programming...
            </p>

            <p className="mt-4 text-xs text-muted leading-relaxed">
              My experience spans from creating virtual assistants and VR
              applications to developing shaders and procedurally generated
              visuals.
            </p>
          </section>

          <section
            id="projects"
            style={{
              marginTop: "5rem",
            }}
          >
            <h2 className="text-lg font-semibold">Projects</h2>

            <div className="mt-6 flex flex-wrap justify-start ">
              {/* <FiChevronLeft size="2rem" /> */}
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} onClick={setOpen} />
              ))}
              {/* <FiChevronRight size="2rem" /> */}
            </div>
          </section>

          <ProjectModal project={open} onClose={() => setOpen(null)} />

          <section
            style={{
              marginTop: "5rem",
            }}
          >
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="mt-4 space-y-4 ">
              <article className="p-4 bg-gray-900/30 rounded">
                <h5 className="font-semibold font-geist text-sm ">Something</h5>
                <p className="mt-1 text-xs text-muted">
                  Description for this role to demonstrate scrolling.
                </p>
              </article>
              <article className="p-4 bg-gray-900/30 rounded">
                <h5 className="font-semibold text-sm ">Something</h5>
                <p className="mt-1 text-xs text-muted">
                  Description for this role to demonstrate scrolling.
                </p>
              </article>
              <article className="p-4 bg-gray-900/30 rounded">
                <h5 className="font-semibold text-sm ">Something</h5>
                <p className="mt-1 text-xs text-muted">
                  Description for this role to demonstrate scrolling.
                </p>
              </article>
              <article className="p-4 bg-gray-900/30 rounded">
                <h5 className="font-semibold text-sm ">Something</h5>
                <p className="mt-1 text-xs text-muted">
                  Description for this role to demonstrate scrolling.
                </p>
              </article>
              <article className="p-4 bg-gray-900/30 rounded">
                <h5 className="font-semibold text-sm ">Something</h5>
                <p className="mt-1 text-xs text-muted">
                  Description for this role to demonstrate scrolling.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
