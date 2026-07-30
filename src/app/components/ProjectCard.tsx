import Image from "next/image";
import { Project } from "../types/portfolio";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-slate-700 hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-400 line-clamp-2">{project.shortDescription}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-800 px-2.5 py-1 font-mono text-[11px] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onSelect(project)}
          className=" cursor-pointer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-600/10 border border-cyan-500/20 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          View More / Details
        </button>
      </div>
    </div>
  );
}