import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const rafRef = useRef(null);
  const trailRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) return;

    function onMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    }

    function onDown() { setClicking(true); }
    function onUp() { setClicking(false); }
    function onLeave() { setVisible(false); }
    function onEnter() { setVisible(true); }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    function animateTrail() {
      trailRef.current.x += (pos.x - trailRef.current.x) * 0.12;
      trailRef.current.y += (pos.y - trailRef.current.y) * 0.12;
      setTrailing({ ...trailRef.current });
      rafRef.current = requestAnimationFrame(animateTrail);
    }
    rafRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pos.x, pos.y]);

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  if (isMobile) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
          borderRadius: '50%',
          background: '#6366f1',
          boxShadow: '0 0 12px rgba(99,102,241,0.8), 0 0 24px rgba(99,102,241,0.3)',
          opacity: visible ? 1 : 0,
          transform: clicking ? 'scale(0.8)' : 'scale(1)',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: trailing.x - 18,
          top: trailing.y - 18,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(99,102,241,0.25)',
          opacity: visible ? 0.5 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
}
