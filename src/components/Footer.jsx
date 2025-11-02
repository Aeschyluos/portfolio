import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(156, 163, 175, 0.3)",
        padding: "2rem 0",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 2rem" }}>
        <p
          className="text-muted"
          style={{
            margin: "0 0 1rem 0",
            fontSize: "14px",
          }}
        >
          This website was built with React, Vite, and Tailwind CSS.
        </p>
        <p
          className="text-muted"
          style={{
            margin: 0,
            fontSize: "12px",
          }}
        >
          © 2025 Kharon Putra Pratama
        </p>
      </div>
    </footer>
  );
}
