'use client'
// components/ResumeButtons.jsx
// import { motion } from 'framer-motion';
import * as motion from "motion/react-client"

const ResumeButtons = ({
  resumeUrl = "#",
  resumeId = "",
  delay,
  duration = 0.5
}: {
  resumeUrl?: string,
  resumeId?: string,
  delay?: number,
  duration?: number
}) => {

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:justify-start">
      <div className="flex gap-2">
        {/* Left button - comes from left */}
        <motion.a
          href={resumeUrl}
          target="_blank"
          download="Masum_Billah_Resume.pdf"
          className="group inline-flex items-center gap-2 rounded-lg border-cyan-600 px-6 py-3 text-sm font-semibold text-cyan-500 shadow-lg shadow-cyan-600/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950 hover:bg-cyan-500 hover:text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            x: { type: 'spring', bounce: 0.3, duration: 0.5, delay: delay },
            opacity: { duration: 0.5, delay: delay }

          }}

        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-cyan-600 group-hover:text-white"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          View Resume
        </motion.a>

        {/* Right button - comes from right */}
        <motion.a
        target="_blank"
          href={`https://drive.google.com/uc?export=download&id=${resumeId}`}
          download="Masum_Billah_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-lg border-cyan-600 px-6 py-3 text-sm font-semibold text-cyan-500 shadow-lg shadow-cyan-600/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950 hover:bg-cyan-500 hover:text-white"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            x: {
              type: 'spring', bounce: 0.3, duration: 0.5, delay: delay
            },
            opacity: { duration: 0.5, delay: delay }

          }}

        >
          <svg
            className="h-5 w-5 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

export default ResumeButtons;