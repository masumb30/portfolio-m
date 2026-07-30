"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "../types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
        >
          ✕
        </button>

        <h3 className="text-2xl font-extrabold text-slate-100">{project.title}</h3>

        <div className="relative mt-4 h-60 w-full overflow-hidden rounded-lg bg-slate-950">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="mt-6 space-y-6 text-sm text-slate-300">
          {/* Tech Stack */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Tech Stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded bg-slate-800 px-2.5 py-1 font-mono text-xs text-cyan-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Overview</h4>
            <p className="mt-2 leading-relaxed text-slate-300">{project.fullDescription}</p>
          </div>

          {/* Challenges */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Challenges Faced</h4>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-400">
              {project.challenges.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">Future Improvements</h4>
            <ul className="mt-2 space-y-1 list-disc list-inside text-slate-400">
              {project.futureImprovements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-500 transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-slate-600 transition-colors"
            >
              GitHub (Client)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}