"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="rounded-md px-3 py-1 text-lg hover:bg-white/10"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  );
}