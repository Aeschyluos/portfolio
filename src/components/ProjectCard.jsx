import React from "react";

export default function ProjectCard({ project, onOpen }) {
  function handleKey(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen(project);
    }
  }

  return (
    <article
      className="project-tile group cursor-pointer focus:outline-none w-full sm:w-[80%] md:w-[60%] font-geist"
      onClick={() => onOpen(project)}
      onKeyDown={handleKey}
      tabIndex={0}
      aria-labelledby={`proj-${project.id}-title`}
      style={{
        marginBottom: ".8rem",
      }}
    >
      <div
        className={
          // note the space before hover: -> prevents concatenation bug
          "flex items-center justify-between gap-4 p-4 rounded-xl " +
          "hover:bg-[rgba(199,199,199,0.08)] group-hover:bg-[rgba(199,199,199,0.08)]"
        }
        role="button"
        aria-pressed="false"
      >
        <div className="flex-1 min-w-0">
          {/* container that does the truncation for the whole inline row */}
          <div
            className="truncate"
            title={`${project.title}${
              project.short ? " — " + project.short : ""
            }`}
            id={`proj-${project.id}-title`}
            style={{ display: "block" }}
          >
            <h4
              className="inline font-semibold align-middle m-0"
              style={{ margin: 0, marginRight: "2rem" }}
            >
              {project.title}
            </h4>

            <span className="inline text-xs text-muted ml-3 align-middle">
              {project.short}
            </span>
          </div>
        </div>

        <div
          className="flex-shrink-0 text-xs text-fg/80 ml-4 self-center whitespace-nowrap"
          aria-hidden="true"
        >
          {project.year}
        </div>
      </div>
    </article>
  );
}
