import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import bitesLogo from "../assets/biteslogo.png";

const SAMPLE = [
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

export default function Projects() {
  const [projects] = useState(SAMPLE);
  const [open, setOpen] = useState(null);

  return (
    <section id="projects" className="scroll-mt-[100px] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            My Projects
          </h1>
        </header>

        <div className="flex flex-wrap justify-center gap-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setOpen} />
          ))}
        </div>
      </div>

      {/* centralized modal (kept separate) */}
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
