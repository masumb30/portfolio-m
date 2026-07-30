import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="mt-2 h-1 w-12 rounded bg-cyan-600"></div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
            <span className="text-xs font-mono text-slate-500 uppercase">Email</span>
            <a href="mailto:masum30.b@gmail.com" className="mt-2 text-base block  font-semibold text-cyan-300">{personalInfo.contact.email}</a>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
            <span className="text-xs font-mono text-slate-500 uppercase">Phone</span>
            <p className="mt-2 text-base font-semibold text-slate-200">{personalInfo.contact.phone}</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center">
            <span className="text-xs font-mono text-slate-500 uppercase">WhatsApp</span>
            <p className="mt-2 text-base font-semibold text-slate-200">{personalInfo.contact.whatsapp}</p>
          </div>
        </div>
      </div>
    </section>
  );
}