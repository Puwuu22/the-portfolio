import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ToggleThemeButton() {
  const [theme, setTheme] = useTheme();

  return (
    <li className="list-none ml-10">
      <div className="relative w-24 h-10 bg-[#faf9f3] rounded-full space-x-1 flex items-center dark:bg-zinc-700 dark:text-white overflow-hidden transition-colors">
        {/* Thumb */}
        <span
          className={`
            absolute top-1 left-1 w-12 h-8 rounded-full bg-yellow-400 dark:bg-purple-800
            transition-all duration-300
            ${theme === "dark" ? "translate-x-10" : "translate-x-calc(100%-48px)"}
            z-0
          `}
        />
        {/* Light button */}
        <button
          onClick={() => setTheme("light")}
          className={`relative z-10 flex items-center justify-center w-1/2 left-1 h-full rounded-full transition-colors
            ${theme === "light" ? "text-white" : "text-gray-400"}
          `}
          aria-label="Switch to light mode"
        >
          <Sun size={20} />
        </button>
        {/* Dark button */}
        <button
          onClick={() => setTheme("dark")}
          className={`relative z-10 flex items-center justify-center w-1/2 right-1 h-full rounded-full transition-colors
            ${theme === "dark" ? "text-white/80" : "text-gray-400"}
          `}
          aria-label="Switch to dark mode"
        >
          <MoonStar size={20} />
        </button>
      </div>
    </li>
  );
}