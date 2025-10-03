import React, { useRef, useState, useEffect } from "react";
import Name from "./components/Name";
import Header from "./components/Header";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainerRef.current?.scrollTop || 0;
      setIsScrolled(scrollTop > 50);
    };

    const scrollEl = scrollContainerRef.current;
    scrollEl?.addEventListener("scroll", handleScroll);
    return () => scrollEl?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-cream dark:bg-darkbg text-ink dark:text-cream">
      <Header isScrolled={isScrolled} />
      {/* Add top padding to prevent content from being hidden under the fixed header */}
      <div className="pt-[100px]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <main className="mt-8">
            <Name name="YOUR NAME" />
          </main>
        </div>
      </div>
    </div>
  );
}
