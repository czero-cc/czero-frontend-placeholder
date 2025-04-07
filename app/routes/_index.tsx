import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "C0 - AI-driven Software Development" },
    { name: "C0", content: "C0 - AI-driven Software Development" },
    {
      name: "google-font",
      content: "https://fonts.googleapis.com/css2?family=Baskervville&display=swap",
    },
  ];
};

export default function Index() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headerRef) return;
      
      const rect = headerRef.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const maxRadius = 50;
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

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    
    // Submit the form data in the background
    fetch(
      "https://script.google.com/macros/s/AKfycbyW9koin5aV_cZtgSDfzXjGNUc7HCsr5UyPbFfMX5SA0lqh1Y9x3UtnJ33lhlxriB9JKA/exec",
      {
        method: "POST",
        body: formData,
      }
    ).catch(error => {
      console.error("Form submission error:", error);
    });
    
    // Immediately show success and reset form
    setTimeout(() => {
      setFormStatus("success");
      e.currentTarget.reset();
    }, 500);
  };

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
      <div className="bg-white dark:bg-black text-black dark:text-white flex h-screen items-center justify-center overflow-hidden fixed inset-0 font-medium" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <div className="flex flex-col items-center gap-24">
          <header className="relative" ref={setHeaderRef}>
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-[#c1ff20]"
              aria-hidden="true"
              id="bg_green_circle"
            />
            <div 
              className="absolute w-[600px] h-[600px] rounded-full"
              style={{
                transform: `translate(calc(${mousePos.x}px - 300px), calc(${mousePos.y}px - 300px))`,
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
              className="block h-[150px] w-auto relative"
            />
          </header>
          <main className="text-center relative z-10">
            <p className="text-2xl font-light mb-4">
              private by design, personally adaptive, and consistent
            </p>
            
            <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              CZero engine is realized through WebAssembly-based client-side processing of your local data, 
              ensuring your data never leaves your computer.
            </p>
            
            <div className="flex flex-col gap-6 mb-12">
              <p className="text-lg font-medium">Try our solutions:</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://demo.czero.cc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#c1ff20] text-black font-medium rounded-md hover:bg-opacity-90 transition-colors duration-200"
                >
                  Proof-of-Concept Demo
                </a>
                
                <a 
                  href="https://discord.gg/yjEUkUTEak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#c1ff20] text-black dark:text-white font-medium rounded-md hover:bg-[#c1ff20] hover:bg-opacity-10 transition-colors duration-200"
                >
                  Join our Discord
                </a>
              </div>
            </div>
          </main>
          <footer className="relative z-10 text-center">
            <p className="text-black dark:text-white text-xl font-light mb-8">
              Contact us: <a 
                href="mailto:info@czero.cc" 
                className="hover:text-[#c1ff20] transition-colors duration-200"
              >
                info@czero.cc
              </a>
            </p>
            
            <div className="mt-8">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Join our newsletter to stay updated
              </p>
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input 
                  name="Email" 
                  type="email" 
                  placeholder="Email" 
                  required
                  className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c1ff20] dark:bg-gray-800"
                />
                
                <button 
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="px-6 py-2 bg-[#c1ff20] text-black font-medium rounded-md hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50"
                >
                  {formStatus === "submitting" ? "Submitting..." : "Subscribe"}
                </button>
              </form>
              {formStatus === "success" && (
                <p className="text-green-600 dark:text-green-400 mt-2">
                  Thank you for your interest!
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-red-600 dark:text-red-400 mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
