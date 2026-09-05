'use client'
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiLaravel,
    SiPhp,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiPostman,
    SiVercel,
    SiGoogle,
} from "react-icons/si";
import { TbShieldLock, TbPrompt } from "react-icons/tb";

export const skills = [
    // Frontend
    { name: "React.js", category: "Frontend", color: "#61DAFB", icon: SiReact },
    { name: "Next.js", category: "Frontend", color: "#FFFFFF", icon: SiNextdotjs },
    { name: "TypeScript", category: "Frontend", color: "#3178C6", icon: SiTypescript },
    { name: "JavaScript", category: "Frontend", color: "#F7DF1E", icon: SiJavascript },
    { name: "HTML5", category: "Frontend", color: "#E34F26", icon: SiHtml5 },
    { name: "CSS3", category: "Frontend", color: "#1572B6", icon: SiCss },
    { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", icon: SiTailwindcss },

    // Backend & DB
    { name: "Node.js", category: "Backend/DB", color: "#5FA04E", icon: SiNodedotjs },
    { name: "Express.js", category: "Backend/DB", color: "#E0E0E0", icon: SiExpress },
    { name: "MongoDB", category: "Backend/DB", color: "#47A248", icon: SiMongodb },
    // { name: "Laravel", category: "Backend/DB", color: "#FF2D20", icon: SiLaravel },
    // { name: "PHP", category: "Backend/DB", color: "#777BB4", icon: SiPhp },
    // { name: "PostgreSQL", category: "Backend/DB", color: "#4169E1", icon: SiPostgresql },
    { name: "BetterAuth", category: "Backend/DB", color: "#00DC82", icon: TbShieldLock },

    // Tools
    { name: "Git", category: "Tools", color: "#F05032", icon: SiGit },
    { name: "GitHub", category: "Tools", color: "#FFFFFF", icon: SiGithub },
    { name: "Postman", category: "Tools", color: "#FF6C37", icon: SiPostman },
    { name: "Vercel", category: "Tools", color: "#FFFFFF", icon: SiVercel },

    // AI & Prompts
    { name: "Gemini", category: "AI & Prompts", color: "#8E75FF", icon: SiGoogle },
    { name: "Prompt Eng.", category: "AI & Prompts", color: "#00E5FF", icon: TbPrompt },
];

const categories = ["All Tech", "Frontend", "Backend/DB", "Tools"];

export function SkillsSection() {
    const cardWrapperRef = useRef(null);
    const isCardWrapperInView = useInView(cardWrapperRef, { once: false, amount: 0.3 });
    const [activeTab, setActiveTab] = useState("All Tech");

    const filteredSkills =
        activeTab === "All Tech"
            ? skills
            : skills.filter((s) => s.category === activeTab);

    return (
        <motion.section initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }} id="skills" className="py-20 border-t border-slate-900/60">
            <div className="max-w-6xl mx-auto px-6 space-y-8">
                <motion.div variants={{
                    hidden: { opacity: 0, y: -40 },
                    show: { opacity: 1, y: 0 }
                }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2 text-center">

                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
                        Technical <span className="text-cyan-400">Skills</span>
                    </h2>
                    <div className="mt-2 h-1 w-70 rounded bg-cyan-600 mx-auto"></div>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl max-w-fit mx-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer duration-300 ${activeTab === cat
                                ? "bg-cyan-600 text-slate-100 shadow-md shadow-cyan-950"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Icon Grid */}
                    
                <div  ref={cardWrapperRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <AnimatePresence mode="wait">
                    {filteredSkills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.3 }}
                                animate={isCardWrapperInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
                                exit={{ opacity: 0, scale: 0.3 }}
                                transition={{ duration: 0.5, bounce: 1 }}
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-5 rounded-xl hover:shadow-cyan-500/30 hover:shadow-lg border border-slate-800  cursor-pointer hover:border-transparent transition-shadow duration-300 group "
                            >
                                <div
                                    className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-130"
                                    style={{ color: skill.color }}
                                >
                                    <Icon />
                                </div>
                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-200 transition-colors text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
                </div>

            </div>
        </motion.section>
    );
}