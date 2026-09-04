// components/ParticleText.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  scatteredX: number;
  scatteredY: number;
  color: string;
  delay: number;
}

interface ParticleTextProps {
  text: string;
  className?: string;
  particleSize?: number;
  particleSpacing?: number;
  scatterRadius?: number;
  repulsionRadius?: number;
  assemblyDuration?: number;
  colors?: string[];
}

export default function ParticleText({
  text = 'Hello World',
  className = '',
  particleSize = 2,
  particleSpacing = 4,
  scatterRadius = 300,
  repulsionRadius = 150,
  assemblyDuration = 2000,
  colors = ['#61dafb', '#a8e6cf', '#ffd3b6', '#ff8a80', '#b39ddb'],
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isAssembled, setIsAssembled] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const animationRef = useRef<number>();
  const isInViewRef = useRef(false);
  const hasAssembledRef = useRef(false);

  // Initialize particles from text
  // const initParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  //   const newParticles: Particle[] = [];
  //   const fontSize = Math.min(width / text.length * 1.2, 120);
    
  //   ctx.font = `bold ${fontSize}px Arial`;
  //   ctx.textAlign = 'center';
  //   ctx.textBaseline = 'middle';
    
  //   // Measure text and get pixel data
  //   const metrics = ctx.measureText(text);
  //   const textWidth = metrics.width;
  //   const textHeight = fontSize;
    
  //   // Create offscreen canvas for text rendering
  //   const offscreen = document.createElement('canvas');
  //   offscreen.width = textWidth;
  //   offscreen.height = textHeight;
  //   const offCtx = offscreen.getContext('2d')!;
    
  //   offCtx.fillStyle = 'white';
  //   offCtx.font = `bold ${fontSize}px Arial`;
  //   offCtx.textAlign = 'center';
  //   offCtx.textBaseline = 'middle';
  //   offCtx.fillText(text, offscreen.width / 2, offscreen.height / 2);
    
  //   const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
  //   const data = imageData.data;
    
  //   // Sample pixels to create particles
  //   const step = particleSpacing;
  //   const centerX = width / 2;
  //   const centerY = height / 2;
  //   const offsetX = centerX - offscreen.width / 2;
  //   const offsetY = centerY - offscreen.height / 2;
    
  //   for (let y = 0; y < offscreen.height; y += step) {
  //     for (let x = 0; x < offscreen.width; x += step) {
  //       const index = (y * offscreen.width + x) * 4;
  //       const alpha = data[index + 3];
        
  //       if (alpha > 128) {
  //         const targetX = offsetX + x;
  //         const targetY = offsetY + y;
          
  //         // Random scattered position
  //         const angle = Math.random() * Math.PI * 2;
  //         const radius = Math.random() * scatterRadius;
  //         const scatteredX = targetX + Math.cos(angle) * radius;
  //         const scatteredY = targetY + Math.sin(angle) * radius;
          
  //         newParticles.push({
  //           x: scatteredX,
  //           y: scatteredY,
  //           targetX,
  //           targetY,
  //           size: particleSize ,
  //           scatteredX,
  //           scatteredY,
  //           color: colors[Math.floor(Math.random() * colors.length)],
  //           delay: Math.random() * assemblyDuration * 0.7,
  //         });
  //       }
  //     }
  //   }
    
  //   setParticles(newParticles);
  // };
  const initParticles = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const newParticles: Particle[] = [];
  const fontSize = Math.min(width / text.length * 1.2, 120);
  
  // Create offscreen canvas for text rendering
  const offscreen = document.createElement('canvas');
  const offCtx = offscreen.getContext('2d')!;
  
  // Set font and measure text
  offCtx.font = `bold ${fontSize}px Arial`;
  const metrics = offCtx.measureText(text);
  const textWidth = metrics.width;
  const textHeight = fontSize;
  
  // Set offscreen canvas to exact text size
  offscreen.width = textWidth;
  offscreen.height = textHeight;
  
  // Draw text at top-left corner (no centering)
  offCtx.fillStyle = 'white';
  offCtx.font = `bold ${fontSize}px Arial`;
  offCtx.textAlign = 'left';
  offCtx.textBaseline = 'top';
  offCtx.fillText(text, 0, 0);
  
  const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
  const data = imageData.data;
  
  // Sample pixels to create particles
  const step = particleSpacing;
  
  for (let y = 0; y < offscreen.height; y += step) {
    for (let x = 0; x < offscreen.width; x += step) {
      const index = (y * offscreen.width + x) * 4;
      const alpha = data[index + 3];
      
      if (alpha > 128) {
        const targetX = x;
        const targetY = y;
        
        // Random scattered position
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * scatterRadius;
        const scatteredX = targetX + Math.cos(angle) * radius;
        const scatteredY = targetY + Math.sin(angle) * radius;
        
        newParticles.push({
          x: scatteredX,
          y: scatteredY,
          targetX,
          targetY,
          size: particleSize,
          scatteredX,
          scatteredY,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * assemblyDuration * 0.7,
        });
      }
    }
  }
  
  setParticles(newParticles);
};

  // Detect when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAssembledRef.current) {
            isInViewRef.current = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.scale(dpr, dpr);
      // Re-initialize with new dimensions
      // We need to handle this carefully - for simplicity, we'll reinitialize
      // You might want to debounce this
      const ctx2d = ctx;
      initParticles(ctx2d, rect.width, rect.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [text, particleSize, particleSpacing, scatterRadius, colors]);

  // Mouse event handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      let allAssembled = true;
      
      particles.forEach((p) => {
        let targetX = p.targetX;
        let targetY = p.targetY;
        
        // Check if should start assembling
        if (isInViewRef.current && !hasAssembledRef.current) {
          const delayEnd = p.delay;
          if (elapsed > delayEnd) {
            const progress = Math.min((elapsed - delayEnd) / (assemblyDuration * 0.3), 1);
            // Ease in-out cubic
            const eased = progress < 0.5 
              ? 4 * progress * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            p.x = p.scatteredX + (p.targetX - p.scatteredX) * eased;
            p.y = p.scatteredY + (p.targetY - p.scatteredY) * eased;
          } else {
            p.x = p.scatteredX;
            p.y = p.scatteredY;
          }
          
          if (p.x !== p.targetX || p.y !== p.targetY) {
            allAssembled = false;
          }
        } else if (hasAssembledRef.current) {
          // Handle mouse interaction
          if (mousePosition) {
            const dx = p.x - mousePosition.x;
            const dy = p.y - mousePosition.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < repulsionRadius) {
              const force = (1 - distance / repulsionRadius) * 30;
              const angle = Math.atan2(dy, dx);
              targetX = p.targetX + Math.cos(angle) * force;
              targetY = p.targetY + Math.sin(angle) * force;
            }
          }
          
          // Smoothly interpolate
          p.x += (targetX - p.x) * 0.18;
          p.y += (targetY - p.y) * 0.18;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      
      // Check if assembly is complete
      if (isInViewRef.current && !hasAssembledRef.current && allAssembled && elapsed > 1000) {
        hasAssembledRef.current = true;
        setIsAssembled(true);
        // Set all particles exactly to target
        particles.forEach(p => {
          p.x = p.targetX;
          p.y = p.targetY;
        });
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles, mousePosition, repulsionRadius, assemblyDuration]);

  return (
    <div className={`relative w-full  h-full ${className} overflow-visible`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'block' }}
      />
      {!isAssembled && isInViewRef.current && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
          Assembling...
        </div>
      )}
    </div>
  );
}