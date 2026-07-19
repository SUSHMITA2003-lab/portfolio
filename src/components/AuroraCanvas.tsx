import React, { useEffect, useRef } from 'react';

export const AuroraCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Stars & Cosmic Dust Setup
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
    }

    const stars: Star[] = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
    }));

    let step = 0;

    const drawAurora = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep Dark Space Background
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      step += 0.005;

      // Render Aurora Wave 1 (Neon Indigo)
      const grad1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(step) * 120,
        height * 0.3 + Math.cos(step * 0.8) * 80,
        10,
        width * 0.3,
        height * 0.3,
        width * 0.5
      );
      grad1.addColorStop(0, 'rgba(99, 102, 241, 0.18)');
      grad1.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Render Aurora Wave 2 (Neon Cyan)
      const grad2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(step * 1.2) * 150,
        height * 0.6 + Math.sin(step * 0.7) * 100,
        10,
        width * 0.7,
        height * 0.6,
        width * 0.55
      );
      grad2.addColorStop(0, 'rgba(6, 182, 212, 0.16)');
      grad2.addColorStop(0.5, 'rgba(59, 130, 246, 0.06)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Twinkling Stars
      stars.forEach((star) => {
        star.alpha += Math.sin(step * 3 + star.x) * star.speed;
        const currentAlpha = Math.max(0.1, Math.min(0.9, star.alpha));

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = star.size > 1.2 ? 6 : 0;
        ctx.shadowColor = '#06B6D4';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(drawAurora);
    };

    drawAurora();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
