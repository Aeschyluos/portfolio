import React from "react";
import Intro from "./components/Intro";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-cream dark:bg-darkbg text-ink dark:text-cream">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        <main className="mt-8">
          <Intro name="YOUR NAME" />
          {/* Later: small nav/buttons to Projects / Skills */}
          <div className="mt-12 text-sm text-neutral-600 dark:text-neutral-300">
            <p>
              Minimal portfolio — click or tab to interact. Scroll down for
              projects & skills (coming).
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
