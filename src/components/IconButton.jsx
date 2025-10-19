import React from "react";

export default function IconButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "group inline-flex items-center justify-center rounded-full " +
        "w-4 h-4 md:w-5 md:h-5 " +
        "bg-zinc-800 hover:bg-white transition-all duration-200 " +
        "hover:scale-105 hover:cursor-pointer" +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 "
      }
    >
      {children}
    </button>
  );
}
