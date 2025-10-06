import React, { useRef, useState, useEffect } from "react";
import Name from "./components/Name";
import Header from "./components/Header";
import Projects from "./pages/Projects";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      setIsScrolled(scrollTop > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = scrollContainerRef.current?.scrollTop || 0;
  //     setIsScrolled(scrollTop > 50);
  //   };

  //   const scrollEl = scrollContainerRef.current;
  //   scrollEl?.addEventListener("scroll", handleScroll);
  //   return () => scrollEl?.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-cream dark:bg-darkbg text-ink dark:text-cream">
      <Header isScrolled={isScrolled} />
      {/* Add top padding to prevent content from being hidden under the fixed header */}
      <div className="pt-[100px]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <main className="mt-8">
            <Name name="YOUR NAME" />
            <section id="projects" className="scroll-mt-[100px]">
              <Projects />
            </section>
            <section id="resume" className="scroll-mt-[100px]">
              {" "}
              ...{" "}
            </section>
            <section id="skills" className="scroll-mt-[100px]">
              {" "}
              ...{" "}
            </section>
            <section id="about" className="scroll-mt-[100px]">
              {" "}
              ...{" "}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
