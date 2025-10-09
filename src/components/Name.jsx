import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Name({ inputText }) {
  // text to render - each char will have its own animation
  const chars = inputText.split("");

  // refs for each character element
  const anchorRefs = useRef([]);

  // hovered index state and ref (ref used inside the pointer handler)
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const hoveredIndexRef = useRef(hoveredIndex);
  useEffect(() => {
    hoveredIndexRef.current = hoveredIndex;
  }, [hoveredIndex]);

  // motion values and springs for each character
  // NOTE: calling these hooks in a mapping is fine as long as `chars.length` stays stable
  const xValues = chars.map(() => useMotionValue(0));
  const yValues = chars.map(() => useMotionValue(0));
  const springX = xValues.map((x) =>
    useSpring(x, { stiffness: 120, damping: 12 })
  );
  const springY = yValues.map((y) =>
    useSpring(y, { stiffness: 120, damping: 12 })
  );

  useEffect(() => {
    function onPointerMove(e) {
      const hi = hoveredIndexRef.current;

      // if nothing hovered, reset all
      if (hi === -1 || !anchorRefs.current[hi]) {
        for (let i = 0; i < xValues.length; i++) {
          xValues[i].set(0);
          yValues[i].set(0);
        }
        return;
      }

      const px = (e.touches && e.touches[0]?.clientX) ?? e.clientX;
      const py = (e.touches && e.touches[0]?.clientY) ?? e.clientY;

      const rect = anchorRefs.current[hi].getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = px - cx;
      const dy = py - cy;
      const dist = Math.hypot(dx, dy);

      const threshold = Math.min(window.innerWidth, 380);
      const maxShift = 12;

      if (dist < threshold) {
        const strength = 1 - dist / threshold;
        const nx = dx / (dist || 1);
        const ny = dy / (dist || 1);
        xValues[hi].set(-nx * maxShift * strength);
        yValues[hi].set(-ny * maxShift * strength * 0.3);
      } else {
        xValues[hi].set(0);
        yValues[hi].set(0);
      }
    }

    document.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("touchmove", onPointerMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("touchmove", onPointerMove);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden select-none">
      <h1 className="text-center font-extrabold leading-[0.9] tracking-tight">
        {chars.map((ch, i) => (
          <span
            key={i}
            ref={(el) => (anchorRefs.current[i] = el)}
            className="inline-block relative"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() =>
              setHoveredIndex((cur) => (cur === i ? -1 : cur))
            }
            onTouchStart={() => setHoveredIndex(i)}
            onTouchEnd={() => setHoveredIndex((cur) => (cur === i ? -1 : cur))}
          >
            <motion.span
              style={{
                x: springX[i],
                y: springY[i],
                display: "inline-block",
              }}
            >
              {ch}
            </motion.span>
          </span>
        ))}
      </h1>
    </section>
  );
}
