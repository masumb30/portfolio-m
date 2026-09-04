'use client'
// components/SocialIcons.jsx
import { motion, Variants} from 'framer-motion';
import Image from 'next/image';

const SocialIcons = ({ 
  delay = 0, 
  duration = 0.6,
  links = {
     github: "https://github.com/masumb30",
    linkedin: "https://www.linkedin.com/in/masumbm/",
    
    facebook: "https://web.facebook.com/masum.mim.685364/"
  }
}) => {
  
  const socialData = [
    {
      name: 'GitHub',
      link: links.github,
      icon: '/github.png', // Path to your icon
      color: '#333',
    },
    {
      name: 'LinkedIn',
      link: links.linkedin,
      icon: '/linkedin.png',
      color: '#0A66C2',
    },
    {
      name: 'Facebook',
      link: links.facebook,
      icon: '/facebook.png',
      color: '#1877F2',
    },
  ].filter(item => item.link);

  const iconVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotateY: 90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 180,
        damping: 14,
        duration: duration,
        delay: delay,
      },
    },
    hover: {
      scale: 1.15,
      rotateY: 10,
      y: -6,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 15,
      },
    },
  };

  return (
    <div className="flex items-center gap-4 my-6">
      {socialData.map((social) => (
        <motion.a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-10 h-10 rounded-md bg-slate-800  border-slate-700 hover:border-cyan-500/50 transition-colors duration-300"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          aria-label={social.name}
        >
          <Image
            src={social.icon}
            alt={social.name}
            width={28}
            height={28}
            className="object-cover w-full h-full rounded-md"
          />
          
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;