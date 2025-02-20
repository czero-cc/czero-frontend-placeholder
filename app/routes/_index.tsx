import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "C0 - AI-driven Software Development" },
    { name: "C0", content: "C0 - AI-driven Software Development" },
    {
      name: "google-font",
      content:
        "https://fonts.googleapis.com/css2?family=Baskervville&display=swap",
    },
  ];
};

export default function Index() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null);
  const [boundingRect, setBoundingRect] = useState({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef) return;
      
      const rect = headerRef.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      setBoundingRect(rect);
      
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const maxRadius = 160;
      if (distance > maxRadius) {
        const angle = Math.atan2(dy, dx);
        const x = Math.cos(angle) * maxRadius;
        const y = Math.sin(angle) * maxRadius;
        setMousePos({ x, y });
      } else {
        setMousePos({ x: dx, y: dy });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [headerRef]);

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div className="bg-white dark:bg-black text-black dark:text-white flex h-screen items-center justify-center font-serif" style={{ fontFamily: 'Baskervville, serif' }}>
        <div className="flex flex-col items-center gap-24">
          <header className="relative" ref={setHeaderRef}>
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#c1ff20]"
              aria-hidden="true"
              id="bg_green_circle"
            />
            <div 
              className="absolute w-[1200px] h-[1200px] rounded-full"
              style={{
                transform: `translate(calc(${mousePos.x}px - 600px), calc(${mousePos.y}px - 600px))`,
                top: '50%',
                left: '50%',
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img
                src="/c0_bg_spray.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  animation: 'rotate 10s linear infinite'
                }}
                aria-hidden="true"
              />
            </div>
            <img
              src="/c0_logo_simple.svg"
              alt="Czero Logo"
              className="block h-[300px] w-auto relative"
            />
          </header>
          <main className="text-center relative z-10">
            <p className="text-2xl font-light">
              Enable your AI-driven Software Development
            </p>
          </main>
          <footer className="relative z-10">
            <p className="text-black dark:text-white text-xl">
              Contact us: <a 
                href="mailto:info@czero.cc" 
                className="hover:text-[#c1ff20] transition-colors duration-200"
              >
                info@czero.cc
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
