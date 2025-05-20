import React from "react";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="py-2">
      <div className="container px-4">
        {/* Logo */}
        <a href="#">
          <img src={Logo} alt="Puwu's Logo"  className="h-14 w-auto" />
        </a>
      </div>
    </header>
  );
}
