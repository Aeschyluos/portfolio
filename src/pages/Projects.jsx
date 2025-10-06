import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import bitesLogo from "../assets/biteslogo.png";

const SAMPLE = [
  {
    id: "oasis",
    title: "BiTEs",
    short: "AR/VR solution to help deal with stress for office workers",
    description: "Longer description here...",
    tech: ["Unity", "XR"],
    img: bitesLogo,
    year: 2025,
    live: "#",
    repo: "#",
  },
  {
    id: "rolo",
    title: "Rolo",
    short: "Connecting users to local libraries and board game clubs",
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
          <div className="inline-block px-3 py-1 rounded-full bg-white/6 text-sm text-white/90 mb-4">
            Portfolio
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            My Projects
          </h1>
          <p className="text-white/80 mt-2 max-w-2xl mx-auto">
            Selected projects — click a card for details.
          </p>
        </header>

        {/* grid: 1 column mobile, 2 columns from md up */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
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
