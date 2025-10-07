import React, { useEffect, useRef } from "react";

export default function ProjectCard({ project, onOpen }) {
  const el = useRef(null);

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
      className="project-tile group flex flex-col gap-6 cursor-pointer focus:outline-none w-[30%] sm:w-[40%] md:w-[30%]"
      onClick={() => onOpen(project)}
      onKeyDown={handleKey}
      tabIndex={0}
      aria-labelledby={`proj-${project.id}-title`}
      style={{ margin: "20px" }}
    >
      {/* rectangle visual */}
      <div
        className="w-full aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.04)",
          boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
          borderRadius: "5%",
        }}
      >
        {project.img ? (
          <img
            src={project.img}
            alt={project.title}
            loading="lazy"
            className={
              "max-w-[84%] max-h-[84%] object-contain block transform transition duration-500 ease-out " +
              // scale up and slightly grayscale on hover of the whole card (group)
              "group-hover:scale-105 group-hover:[filter:grayscale(.35)]"
            }
            style={{
              // keep transform origin in the center so scaling feels natural
              transformOrigin: "center",
            }}
          />
        ) : (
          <div className="text-white/40 text-sm">No image</div>
        )}
      </div>

      {/* title below */}
      <div className="px-0">
        <h3
          id={`proj-${project.id}-title`}
          className={
            "text-sm md:text-base font-semibold text-white transition-all duration-400  " +
            "group-hover:bold"
          }
        >
          {project.short}
        </h3>
        {project.year && (
          <div
            className={
              "text-xs text-white/60 mt-1 transition-all duration-400  " +
              "group-hover:bold"
            }
          >
            {project.year}
          </div>
        )}
      </div>
    </article>
  );
}
