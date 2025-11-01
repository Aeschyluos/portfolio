import React, { useMemo } from "react";

export default function AnimatedBG() {
  // Generate random lights on component mount
  const lights = useMemo(() => {
    const generateRandomLight = () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 100 + 80}px`, // 80-180px
      tx: `${(Math.random() - 0.5) * 1200}px`, // -600 to 600px
      ty: `${(Math.random() - 0.5) * 1200}px`, // -600 to 600px
      dur: `${Math.random() * 8 + 7}s`, // 7-15s
      delay: `${Math.random() * -10}s`, // 0 to -10s
      color: "255, 255, 255",
    });

    return Array.from({ length: 8 }, generateRandomLight);
  }, []);

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
