import { clsx } from 'clsx';
import { useState } from 'react';

export default function GlowCard({ children, className, hover = true }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    if (!hover) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      className={clsx(
        'relative bg-ns-card border border-ns-border rounded-2xl overflow-hidden',
        hover && 'card-hover group',
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {hover && (
        <div
          className="absolute pointer-events-none w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
            left: mousePos.x - 128,
            top: mousePos.y - 128,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
