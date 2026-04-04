// src/components/MouseBubblesBackground.tsx
import React, { useEffect, useRef } from 'react';

const NUM_BUBBLES = 50;

const MouseBubblesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    // Create bubbles
    const bubbles = Array.from({ length: NUM_BUBBLES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 5 + Math.random() * 15,
      dx: -0.5 + Math.random(),
      dy: -0.5 + Math.random(),
      opacity: 0.1 + Math.random() * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let b of bubbles) {
        // Mouse parallax effect
        const dx = (mouse.current.x - canvas.width / 2) * 0.00005;
        const dy = (mouse.current.y - canvas.height / 2) * 0.00005;

        b.x += b.dx + dx;
        b.y += b.dy + dy;

        if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.dy *= -1;

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${b.opacity})`; // emerald-500
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default MouseBubblesBackground;
