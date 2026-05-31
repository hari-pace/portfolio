import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
    } catch {}
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return [theme, toggleTheme];
};
