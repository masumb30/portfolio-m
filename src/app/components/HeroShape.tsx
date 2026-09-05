'use client'
// HeroShape.tsx
import { motion } from 'framer-motion';

export default function HeroShape() {
    return (
        <>

            <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 right-0 w-50 h-50 bg-cyan-600/10 rounded-bl-full pointer-events-none"
                style={{ transformOrigin: 'top right' }}
            />
            <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 w-50 h-50 bg-cyan-600/10 rounded-tr-full pointer-events-none"
                style={{ transformOrigin: 'bottom left' }}
            />

        </>
    );
}



