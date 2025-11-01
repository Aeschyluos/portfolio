import React, { useState } from "react";

export default function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: "1px solid rgba(209, 209, 209, 0.4)",
        borderRadius: "6px",
        padding: "0.75rem 0.5rem",
        backgroundColor: "transparent",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered ? "0 4px 12px rgba(0, 0, 0, 0.15)" : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "70px",
        cursor: "pointer",
        margin: "0.5rem",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          marginBottom: "0.5rem",
          transition: "transform 0.3s ease",
          transform: isHovered ? "scale(1.15)" : "scale(1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {skill.logo ? (
          <img
            src={skill.logo}
            alt={skill.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: skill.invert ? "invert(1) grayscale(1)" : "grayscale(1)",
            }}
          />
        ) : (
          <span style={{ fontSize: "28px" }}>{skill.icon}</span>
        )}
      </div>
      <p
        className="font-geist"
        style={{
          margin: 0,
          color: "var(--fg)",
          fontWeight: "600",
        }}
      >
        {skill.name}
      </p>
    </div>
  );
}
