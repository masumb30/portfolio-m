"use client";

import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Qualifications", href: "#education" },
//   { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Stylish M Logo */}
        <a href="#" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 font-mono text-xl font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 group-hover:bg-cyan-500 group-hover:scale-105">
            M
          </div>
          <span className="font-sans text-lg font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors duration-200">
            Masum<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded py-3 px-4 hover:bg-cyan-700/10"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#projects"
            className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            View Projects
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-slate-100 md:hidden focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-slate-800 bg-slate-950 px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center rounded-lg bg-cyan-600 py-2.5 text-sm font-medium text-white hover:bg-cyan-500 transition-colors duration-200"
            >
              View Projects
            </a>
          </div>
        </div>
      )}
    </header>
  );
}