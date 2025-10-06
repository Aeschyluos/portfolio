import React, { useEffect, useRef } from "react";

export default function ProjectCard({ project, onOpen }) {
  const el = useRef(null);

  // reveal animation (subtle)
  useEffect(() => {
    const node = el.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.06 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  function handleKey(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project);
    }
  }

  return (
    <article
      ref={el}
      className="project-tile flex flex-col gap-3 cursor-pointer focus:outline-none w-[220px] md:w-[260px]"
      onClick={() => onOpen(project)}
      onKeyDown={handleKey}
      tabIndex={0}
      aria-labelledby={`proj-${project.id}-title`}
      style={{ outline: "none" }}
    >
      {/* square visual */}
      <div
        className="w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.04)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
        }}
      >
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className="max-w-[84%] max-h-[84%] object-contain block"
            style={{ filter: "grayscale(0.06) contrast(.9)", borderRadius: 8 }}
          />
        ) : (
          <div className="text-white/40 text-sm">No image</div>
        )}
      </div>

      {/* title below */}
      <div className="px-0">
        <h3
          id={`proj-${project.id}-title`}
          className="text-sm md:text-base font-semibold text-white truncate"
        >
          {project.title}
        </h3>
        {project.year && (
          <div className="text-xs text-white/60 mt-1">{project.year}</div>
        )}
      </div>

      <style>{`
        .project-tile { opacity: 0; transform: translateY(6px); transition: opacity 420ms ease, transform 420ms ease; }
        .project-tile.is-visible { opacity: 1; transform: translateY(0); }
        .project-tile:focus .aspect-square,
        .project-tile:hover .aspect-square { transform: translateY(-6px); }
      `}</style>
    </article>
  );
}
