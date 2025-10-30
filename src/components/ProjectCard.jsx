import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className="project-tile w-full sm:w-[80%] md:w-[60%] font-geist"
      style={{
        marginBottom: "1.5rem",
      }}
    >
      <div
        className="cursor-pointer"
        onClick={toggleExpand}
        style={{
          padding: "1.5rem 1rem",
          borderRadius: "12px",
          backgroundColor: isExpanded
            ? "rgba(199,199,199,0.08)"
            : "transparent",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.backgroundColor = "rgba(199,199,199,0.08)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.backgroundColor = "transparent";
          }
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <h4
            className="inline font-semibold align-middle"
            style={{ margin: 0 }}
          >
            {project.title}
          </h4>

          <div
            className="flex-1"
            style={{
              height: "1px",
              background: "rgba(156, 163, 175, 0.3)",
              margin: "0 1rem",
            }}
          />
          <div className="flex-shrink-0 text-xs text-muted ml-4 whitespace-nowrap">
            {project.year}
          </div>
        </div>

        {isExpanded && (
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(156, 163, 175, 0.2)",
            }}
          >
            <p className="text-xs text-muted leading-relaxed mb-4">
              {project.description}
            </p>

            {project.tech && project.tech !== "na" && (
              <div style={{ marginBottom: "1rem" }}>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.tech) ? (
                    project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded"
                        style={{
                          backgroundColor: "rgba(156, 163, 175, 0.1)",
                          color: "rgba(207, 207, 207, 1)",
                          marginRight: "1rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        backgroundColor: "rgba(156, 163, 175, 0.1)",
                        color: "rgba(207, 207, 207, 1)",
                      }}
                    >
                      {project.tech}
                    </span>
                  )}
                </div>
              </div>
            )}

            {project.img && project.img !== "na" && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.img) ? (
                    project.img.map((image, i) => (
                      <img
                        key={i}
                        src={image}
                        alt={`${project.title} screenshot ${i + 1}`}
                        style={{
                          width: "150px",
                          height: "100px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    ))
                  ) : (
                    <img
                      src={project.img}
                      alt={`${project.title} screenshot`}
                      style={{
                        width: "150px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  )}
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-4">
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    border: "1px solid rgba(156, 163, 175, 0.5)",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    color: "rgba(156, 163, 175, 1)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "black";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "rgba(156, 163, 175, 1)";
                  }}
                >
                  View Live
                </a>
              )}

              {project.repo &&
                project.repo !== "#" &&
                project.repo !== "na" && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      border: "1px solid rgba(156, 163, 175, 0.5)",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "11px",
                      color: "rgba(156, 163, 175, 1)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "rgba(156, 163, 175, 1)";
                    }}
                  >
                    View Repo
                  </a>
                )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
