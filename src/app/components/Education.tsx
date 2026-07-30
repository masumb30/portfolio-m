import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
          Educational <span className="text-cyan-400">Qualification</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-cyan-600"></div>

        <div className="mt-12 space-y-6">
          {educationData.map((edu, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                <span className="inline-block rounded bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 font-mono text-xs font-medium text-cyan-300 w-fit">
                  {edu.period}
                </span>
              </div>
              <p className="mt-2 text-base font-medium text-cyan-400">{edu.institution}</p>
              {edu.grade && (
                <p className="mt-4 font-mono text-xs text-slate-300">{edu.grade}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}