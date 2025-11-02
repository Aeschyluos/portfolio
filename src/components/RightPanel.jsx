import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import SkillCard from "./SkillCard";
import Footer from "./Footer";
import bitesLogo from "../assets/biteslogo.png";

const PROJECTS = [
  {
    id: "gothliat",
    title: "GOTHLIAT",
    short: "Digital store of reworked clothing",
    description:
      "An online store that modify thrift clothing into unique pieces. I built the product catalog and individual product pages with a complete checkout process, and I designed and implemented a backed inventory system.",
    tech: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
    img: "na",
    year: 2024,
    live: "#",
    repo: "https://github.com/Aeschyluos/catalog",
  },
  // {
  //   id: "bites",
  //   title: "BiTEs",
  //   short: "Online food delivery application centralized in Binus",
  //   description:
  //     "An imaginary application for in-campus/near-campus short-distance food delivery app targeting BINUS students.",
  //   tech: ["Figma"],
  //   img: bitesLogo,
  //   year: 2023,
  //   live: "#",
  //   repo: "na",
  // },
  // {
  //   id: "grups",
  //   title: "Grups",
  //   short: "Social platform for college students in Indonesia",
  //   description: "Longer description here...",
  //   tech: ["React", "Node", "Material UI"],
  //   img: "na",
  //   year: 2022,
  //   live: "#",
  //   repo: "na",
  // },
];

const SKILLS = {
  Languages: [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
  ],
  "Web Development": [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      invert: true,
    },
    {
      name: "Vite",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  Data: [
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "R",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    },
  ],
  Tools: [
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      invert: true,
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],
};

export default function RightPanel() {
  const [projects] = useState(PROJECTS);

  return (
    <div className="bg-transparent">
      <div
        className="w-full px-8 py-6 lg:py-8"
        style={{
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
              websites. From then on, I never stopped. What began as small
              passion projects has grown into building end-to-end web
              applications and backend services. Modeling and optimizing data
              with <span className="text-fg">MongoDB</span> and{" "}
              <span className="text-fg">MySQL</span>, packaging and deploying
              via Docker.
            </p>

            <p className="text-muted leading-relaxed">
              I’m comfortable with <span className="text-fg">Python</span>,{" "}
              <span className="text-fg">JavaScript</span>, and{" "}
              <span className="text-fg">C</span>. I enjoy exploring new tools
              whenever a problem demands them. I’m driven by building clean
              solutions to problems and eager to thrust that drive and
              experience into internships and collaborative projects.
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
            />

            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} style={{ marginTop: "2rem" }}>
                <h3
                  className="text-sm font-semibold text-muted"
                  style={{ marginBottom: "1rem" }}
                >
                  {category}
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(100px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
}
