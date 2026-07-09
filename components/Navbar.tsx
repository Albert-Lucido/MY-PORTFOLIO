"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/site";

const navItems = ["home", "about", "experience", "projects", "skills", "contact"];

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.32em] text-cyan-300">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(34,211,238,0.18)]">
            <Image src={profile.image} alt={`${profile.name} avatar`} fill sizes="36px" className="object-cover" />
          </span>
          <span className="hidden sm:inline">ALBERT</span>
        </a>

        <button
          className="rounded-md p-2 text-white md:hidden"
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
                className={`text-sm capitalize transition-colors hover:text-cyan-300 ${
                  activeSection === item ? "text-cyan-300" : "text-slate-300"
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
                className={`block rounded-md px-2 py-2 text-sm capitalize transition-colors hover:text-cyan-300 ${
                  activeSection === item ? "text-cyan-300" : "text-slate-300"
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
