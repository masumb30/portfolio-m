import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-cyan-600"></div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {/* Main Story */}
          <div className="lg:col-span-2 space-y-6 text-slate-400 text-base leading-relaxed">
            <p>{personalInfo.bio}</p>
            <p>
              I thrive on converting complex product requirements into clean, manageable codebases. 
              My development philosophy focuses on developer experience, strong typing, and performance accessibility.
            </p>
          </div>

          {/* Hobbies / Beyond Coding */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-bold text-slate-200">Outside of Code</h3>
            <p className="mt-2 text-sm text-slate-400">What keeps me energized when I&apos;m away from the screen:</p>

            <ul className="mt-4 space-y-3">
              {personalInfo.hobbies.map((hobby, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                  {hobby}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}