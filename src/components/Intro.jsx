import React, { useEffect, useRef, useState } from "react";

export default function Intro({ name = "YOUR NAME" }) {
  const containerRef = useRef(null);
  const nameRef = useRef(null);

  // spring state (keeps numeric values)
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  // pointer presence (skip on coarse)
  const [isPointer, setIsPointer] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(pointer: coarse)");
    setIsPointer(!(mq && mq.matches));
  }, []);

  useEffect(() => {
    function onPointerMove(e) {
      if (!nameRef.current || !isPointer) return;

      const px = (e.touches && e.touches[0]?.clientX) ?? e.clientX;
      const py = (e.touches && e.touches[0]?.clientY) ?? e.clientY;

      // use the center of the name element (bounding rect)
      const rect = nameRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = px - cx;
      const dy = py - cy;
      const dist = Math.hypot(dx, dy);

      const threshold = Math.min(window.innerWidth, 380);
      const maxShift = 26;

      if (dist < threshold) {
        const strength = 1 - dist / threshold;
        const tx = -(dx / (dist || 1)) * maxShift * strength;
        const ty = -(dy / (dist || 1)) * maxShift * strength * 0.6;
        targetRef.current.x = tx;
        targetRef.current.y = ty;
      } else {
        targetRef.current.x = 0;
        targetRef.current.y = 0;
      }
    }

    document.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("touchmove", onPointerMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("touchmove", onPointerMove);
    };
  }, [isPointer]);

  useEffect(() => {
    // spring / RAF loop — updates CSS variables, preserving other transforms
    const stiffness = 0.18;

    function tick() {
      const px = posRef.current.x;
      const py = posRef.current.y;
      const tx = targetRef.current.x;
      const ty = targetRef.current.y;

      posRef.current.x = px + (tx - px) * stiffness;
      posRef.current.y = py + (ty - py) * stiffness;

      // write CSS vars so we don't clobber other transforms (like translate(-50%, -50%))
      if (nameRef.current) {
        nameRef.current.style.setProperty("--rx", `${posRef.current.x}px`);
        nameRef.current.style.setProperty("--ry", `${posRef.current.y}px`);
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // small spotlight jitter (optional)
  useEffect(() => {
    const spot = containerRef.current?.querySelector(".js-spot");
    if (!spot) return;
    let t;
    function jitter() {
      const jitterX = (Math.random() - 0.5) * 40;
      const jitterY = (Math.random() - 0.5) * 20;
      spot.style.left = `calc(50% + ${jitterX}px)`;
      spot.style.top = `calc(35% + ${jitterY}px)`;
      t = setTimeout(jitter, 700 + Math.random() * 800);
    }
    jitter();
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[56vh] sm:h-[48vh] flex items-center justify-center overflow-hidden select-none"
    >
      {/* spotlight */}
      <div
        className="js-spot pointer-events-none absolute w-[52vw] max-w-[980px] aspect-[3/1] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: "50%",
          top: "35%",
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.95), rgba(255,255,255,0.35) 30%, rgba(255,255,255,0.06) 50%, transparent 70%)",
          mixBlendMode: "screen",
          filter: "blur(36px)",
          animation: "flicker 2.2s linear infinite",
        }}
      />

      {/* absolutely-centered name. The base centering uses translate(-50%,-50%);
          the interactive repulsion is applied as additional translate using CSS vars */}
      <h1
        ref={nameRef}
        className=" left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[clamp(3.25rem,12vw,8rem)] text-center font-extrabold leading-[0.9] tracking-tight text-neutral-600 dark:text-neutral-400"
        style={{
          // compose transforms: first translate to center, then the reactive offsets
          // transform: `translate(-50%,-50%) translate3d(var(--rx, 0px), var(--ry, 0px), 0)`,
          transition: "color 200ms",
          WebkitTapHighlightColor: "transparent",
          // text color via CSS classes in your tailwind
        }}
      >
        {name}
      </h1>

      <div className="absolute bottom-8 text-sm text-neutral-600 dark:text-neutral-400 z-10">
        Fullstack & Frontend — builds fast, accessible interfaces
      </div>
    </section>
  );
}
