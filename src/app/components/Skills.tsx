import { skillsData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-cyan-600"></div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skillsData.map((cat) => (
            <div key={cat.category} className="rounded-xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-bold text-slate-200 mb-6">{cat.category}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-mono mb-2">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-cyan-600 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}