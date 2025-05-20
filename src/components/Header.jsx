import React from "react";
import Logo from "../assets/logo.png";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Header() {
  return (
    <header className="py-2 bg-white/10 dark:bg-[#080B2A] fixed top-0 z-50 bg-violet-200/20 dark:bg-[#0a0d2a] backdrop-blur transition-all duration-300 animate-fade-down w-screen">
      <div className="px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt="Puwu's Logo" className="h-14" />
        </a>
        <ToggleThemeButton />
      </div>
    </header>
  );
}