import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import bitesLogo from "../assets/biteslogo.png";

const PROJECTS = [
  {
    id: "bites",
    title: "BiTEs",
    short: "Online food delivery application centralized in Binus",
    description: "Longer description here...",
    tech: "na",
    img: bitesLogo,
    year: 2024,
    live: "#",
    repo: "#",
  },
  {
    id: "gothliat",
    title: "GOTHLIAT",
    short: "Digital store of reworked clothing",
    description: "Longer description here...",
    tech: ["React", "Node"],
    img: "/screenshots/rolo.jpg",
    year: 2024,
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
            <h2 className="text-lg font-semibold text-white">About</h2>
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

          <section id="projects" className="mb-10">
            <h2 className="text-lg font-semibold text-white">Projects</h2>
            <p className="mt-3 text-xs text-muted flex items-center gap-2">
              Below are a few projects — scroll to see more.
            </p>

            <div className="mt-6 flex flex-wrap justify-start ">
              {/* <FiChevronLeft size="2rem" /> */}
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} onClick={setOpen} />
              ))}
              {/* <FiChevronRight size="2rem" /> */}
            </div>
          </section>

          <ProjectModal project={open} onClose={() => setOpen(null)} />

          <section className="mb-40">
            <h4 className="text-sm font-semibold text-white">Experience</h4>
            <div className="mt-4 space-y-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <article key={idx} className="p-4 bg-gray-900/30 rounded">
                  <h5 className="font-semibold text-sm text-white">
                    Role {idx + 1}
                  </h5>
                  <p className="mt-1 text-xs text-muted">
                    Description for this role to demonstrate scrolling.
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
