import React, { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    // focus close for keyboard users
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 max-w-2xl w-full rounded-lg p-5 bg-white/5 dark:bg-white/4 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              {project.title}
            </h2>
            {project.year && (
              <div className="text-sm text-white/70 mt-1">{project.year}</div>
            )}
            {project.short && (
              <p className="text-sm text-white/80 mt-3">{project.short}</p>
            )}
          </div>

          <button
            ref={closeRef}
            onClick={onClose}
            className="px-3 py-2 rounded bg-white/6 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close details"
          >
            Close
          </button>
        </div>

        {project.img && (
          <div className="mt-4 rounded-md overflow-hidden h-48">
            <img
              src={project.img}
              alt={`${project.title} screenshot`}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="mt-4 text-white/90">
          {project.description && <p className="mb-4">{project.description}</p>}
          {project.tech && (
            <>
              <div className="text-sm font-medium mb-2">Tech</div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/6"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}

          <div className="flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-accent text-black"
              >
                View Live
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded bg-white/6"
              >
                View Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
