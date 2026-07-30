import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 px-6 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="font-mono">Built with Next.js, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}