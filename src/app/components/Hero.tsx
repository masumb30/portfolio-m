import Image from "next/image";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-10 md:py-20">
            <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 px-6 md:flex-row">
                {/* Left Content */}
                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse">

                        </span>
                        Available for opportunities
                    </div>

                    <h1 className="hidden md:block mt-6 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                        Hi, I&apos;m <span className="text-cyan-400">{personalInfo.name}</span>
                    </h1>

                    <p className="hidden md:block mt-2 font-mono text-lg font-medium text-cyan-300 sm:text-xl">
                        {personalInfo.title}
                    </p>

                    <p className="hidden md:block mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
                        {personalInfo.tagline}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:justify-start">
                        <div className="flex gap-2">

                            <a
                                href={personalInfo.resumeUrl}
                                download="Masum_Billah_Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition-all duration-200 hover:bg-cyan-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5 text-white"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                View Resume
                            </a>
                            <a
                                href={`https://drive.google.com/uc?export=download&id=${personalInfo.resumeId}`}
                                download="Masum_Billah_Resume.pdf"
                                className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition-all duration-200 hover:bg-cyan-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                                <svg className="h-5 w-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>

                        </div>

                        <div>

                            {/* <a
                            href="#contact"
                            className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-slate-600 hover:bg-slate-800/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                            Contact Me
                        </a> */}

                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-5 flex items-center gap-5">
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
                        {Object.entries(personalInfo.socials).map(([key, value]) => (
                            <a
                                key={key}
                                href={value}
                                target="_blank"
                                rel="noreferrer"
                                className="capitalize text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                            >
                                {key}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Photo Placeholder */}
                <div className="relative flex flex-col justify-center items-center">

                    <div className="flex md:hidden flex-col items-center justify-center">

                        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                            Hi, I&apos;m <span className="text-cyan-400">{personalInfo.name}</span>
                        </h1>

                        <p className="mt-2 font-mono text-lg font-medium text-cyan-300 sm:text-xl text-center">
                            {personalInfo.title}
                        </p>

                        <p className="mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
                            {personalInfo.tagline}
                        </p>

                    </div>

                    <Image style={{ filter: 'grayscale(100%)' }} src="/profile.jpg" alt="Masum Billah" width={350} height={220} className="rounded-full" />



                </div>
            </div>
        </section>
    );
}