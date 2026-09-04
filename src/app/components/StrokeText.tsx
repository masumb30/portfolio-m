'use client'
import { motion } from 'framer-motion';

const StrokeText = ({delay}:{delay: number}) => {
  return (
    <div className="w-full">
      <svg height="100" width="auto" fill="none">
        {/* Stroke layer - animated dashoffset */}
        <motion.text
          className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          x="50%"
          y="50%"
          fontFamily="monospace"
          dominantBaseline="middle"
          textAnchor="middle"
          stroke="skyblue"
          strokeWidth="1.5"
          strokeDasharray="200"
          initial={{ strokeDashoffset: 200 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: delay }}
        >
          A Full Stack Developer
        </motion.text>
        
        {/* Fill layer - appears after stroke completes */}
        <motion.text
          className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          x="50%"
          y="50%"
          fontFamily="monospace"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#06B6D4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.2 }}
        >
          A Full Stack Developer
        </motion.text>
      </svg>
    </div>
  );
};

export default StrokeText;