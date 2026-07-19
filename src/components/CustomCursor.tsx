import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only run on fine-pointer desktop devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.classList.add('custom-cursor-active');

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle Trail Setup
    interface Particle {
      x: number;
      y: number;
      size: number;
      alpha: number;
      vx: number;
      vy: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ['#06B6D4', '#8B5CF6', '#6366F1', '#38BDF8'];

    let mouseX = width / 2;
    let mouseY = height / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Add trail particles
      if (Math.random() < 0.6) {
        particles.push({
          x: mouseX,
          y: mouseY,
          size: Math.random() * 3 + 1,
          alpha: 1,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Render loop for smooth magnetic ring & particle trail
    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp for ring follower
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRingRef.current) {
        const scale = isHovered ? 1.8 : isClicking ? 0.8 : 1;
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
      }

      // Render & update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          i--;
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isHovered, isClicking]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
      />
      {/* Inner Glowing Cursor Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-neon-cyan pointer-events-none z-[9999] shadow-neon-cyan transition-opacity duration-300"
      />
      {/* Outer Magnetic Glowing Ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-9 h-9 -ml-4.5 -mt-4.5 rounded-full border border-neon-indigo/60 pointer-events-none z-[9998] transition-all ease-out duration-150 ${
          isHovered
            ? 'bg-neon-indigo/20 border-neon-cyan shadow-neon-cyan'
            : 'bg-transparent'
        }`}
      />
    </>
  );
};
