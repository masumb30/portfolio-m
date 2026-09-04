'use client'
// components/WordReveal.jsx
import { motion, Variants } from 'framer-motion';

const WordReveal = ({ text, delay = 0.5, className = "" }: {text:string, delay?:number, className?:string}) => {
  // Split text into words
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Fast reveal - adjust for speed
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-1 ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WordReveal;