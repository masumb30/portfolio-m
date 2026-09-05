'use client'
// components/StaggeredText.jsx
import { motion, Variants } from 'framer-motion';

const StaggeredText = () => {
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Slight delay between each text
                delayChildren: 0.1,
            },
        },
    };

    const topTextVariants: Variants = {
        hidden: {
            opacity: 0,
            y: -30, // Starts from top
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
                duration: 0.4,
            },
        },
    };

    const bottomTextVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30, // Starts from bottom
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
                duration: 0.4,
            },
        },
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center my-5 mt-20 space-y-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Top text - appears from top */}
            <motion.div variants={topTextVariants} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse">

                </span>
                Available for opportunities
            </motion.div>

            {/* Second top text - appears from top with slight delay */}
            <motion.h1 variants={bottomTextVariants} className="mt-3 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-cyan-400">Masum Billah</span>
        </motion.h1>

      {/* Bottom text - appears from bottom */ }
    {/* <motion.p 
        className="text-lg text-gray-600 max-w-md text-center mt-4"
        variants={bottomTextVariants}
      >
        Get started with our powerful tools and transform your workflow today
      </motion.p> */}
    </motion.div >
  );
};

export default StaggeredText;