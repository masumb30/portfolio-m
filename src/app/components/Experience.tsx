import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
          Work <span className="text-cyan-400">Experience</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-cyan-600"></div>

        <div className="mt-12 space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <p className="text-sm font-semibold text-cyan-400">{exp.company}</p>
                </div>
                <span className="inline-block rounded bg-slate-800 px-3 py-1 font-mono text-xs text-slate-400 w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-400">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 font-mono text-xs text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}