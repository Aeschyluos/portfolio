import React from "react";

export default function AnimatedBG() {
  const lights = [
    {
      left: "6%",
      top: "10%",
      size: "260px",
      tx: "800px",
      ty: "-400px",
      dur: "9s",
      delay: "-2s",
      color: "255, 255, 255",
    },
    {
      left: "26%",
      top: "66%",
      size: "200px",
      tx: "-600px",
      ty: "500px",
      dur: "8s",
      delay: "-6s",
      color: "255, 255, 255",
    },
    {
      left: "72%",
      top: "60%",
      size: "140px",
      tx: "500px",
      ty: "800px",
      dur: "10s",
      delay: "-4s",
      color: "255, 255, 255",
    },
    {
      left: "80%",
      top: "8%",
      size: "180px",
      tx: "300px",
      ty: "-200px",
      dur: "11s",
      delay: "-3s",
      color: "255, 255, 255",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0% { 
            transform: translate3d(0, 0, 0) scale(1);
          }
          40% { 
            transform: translate3d(calc(var(--tx, 120px) * 0.6), calc(var(--ty, -80px) * 0.6), 0) scale(1.02);
          }
          60% { 
            transform: translate3d(calc(var(--tx, 120px) * 0.95), calc(var(--ty, -80px) * 0.95), 0) scale(1.05);
          }
          100% { 
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 5,
          pointerEvents: "none",
          overflow: "hidden",
          filter: "blur(36px)",
          opacity: 0.2,
        }}
        aria-hidden="true"
      >
        {lights.map((l, i) => {
          const bg = `radial-gradient(circle at 30% 30%, rgba(${l.color}, 0.95) 0%, rgba(${l.color}, 0.22) 25%, rgba(0,0,0,0) 100%)`;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: l.left,
                top: l.top,
                width: l.size,
                height: l.size,
                borderRadius: "50%",
                background: bg,
                animation: `float ${l.dur} ease-in-out ${l.delay} infinite`,
                willChange: "transform",
                mixBlendMode: "screen",
                "--tx": l.tx,
                "--ty": l.ty,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
