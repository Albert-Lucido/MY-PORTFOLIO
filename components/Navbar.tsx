"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    navItems.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-[0.2em] text-[#38BDF8]">
          AL
        </a>

        <button
          className="rounded-md p-2 text-[#F8FAFC] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`text-sm capitalize transition-colors hover:text-[#38BDF8] ${
                  activeSection === item ? "text-[#38BDF8]" : "text-[#94A3B8]"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <ul className="space-y-2 border-t border-white/10 px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`block rounded-md px-2 py-2 text-sm capitalize transition-colors hover:text-[#38BDF8] ${
                  activeSection === item ? "text-[#38BDF8]" : "text-[#94A3B8]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
