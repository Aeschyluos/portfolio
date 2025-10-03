import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header({ isScrolled }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-[85px] z-50 transition-all duration-500 flex items-center ${
        isScrolled ? "bg-black/70 shadow-lg" : "bg-black/50 hover:bg-black/80"
      }`}
      style={{ paddingTop: "1rem" }}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 md:px-8">
        {/* Left nav */}
        <nav className="flex items-center space-x-8 md:space-x-12">
          <Link
            to="/shop"
            className="text-inherit no-underline cursor-pointer hover:text-gray-500 active:text-gray-600 transition-colors text-base md:text-lg"
          >
            Shop
          </Link>
          <span className="cursor-pointer hover:text-gray-500 active:text-gray-600 transition-colors text-base md:text-lg">
            About
          </span>
        </nav>

        {/* Center logo */}
        <Link
          to="/"
          className="text-inherit no-underline cursor-pointer hover:text-gray-500 active:text-gray-600 transition-colors"
        >
          <h1 className="font-lacquer text-3xl md:text-4xl">GOTHLIAT</h1>
        </Link>

        {/* Right nav */}
        <div className="flex items-center space-x-8">
          <span className="cursor-pointer hover:text-gray-500 active:text-gray-600 transition-colors text-base md:text-lg">
            Help
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
