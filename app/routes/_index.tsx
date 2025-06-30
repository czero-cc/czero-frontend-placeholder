import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "C0 - Private AI | Your Personal AI Identity" },
    { name: "description", content: "CZero engine processes your local data through WebAssembly-based client-side processing, ensuring your data never leaves your computer. Experience privacy-first AI technology." },
    
    // Open Graph tags
    { property: "og:title", content: "C0 - Private AI | Your Personal AI Identity" },
    { property: "og:description", content: "CZero engine processes your local data through WebAssembly-based client-side processing, ensuring your data never leaves your computer. Experience privacy-first AI technology." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://czero.cc" },
    { property: "og:image", content: "https://czero.cc/c0_logo_1200x630.png" },
    { property: "og:image:alt", content: "CZero - Private AI Technology Logo" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "CZero" },
    { property: "og:locale", content: "en_US" },
    
    
    // Additional meta tags for better SEO
    { name: "keywords", content: "private AI, WebAssembly, client-side processing, data privacy, local AI, personal AI, CZero, privacy-first technology" },
    { name: "author", content: "CZero" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#c1ff20" },
    
    // Canonical URL
    { rel: "canonical", href: "https://czero.cc" },
    
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
          body {
            overflow-y: auto;
          }
        `}
      </style>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col items-center justify-center overflow-y-auto py-20" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        <div className="flex flex-col items-center pt-24 w-full max-w-6xl mx-auto px-4">
          <header className="relative mb-44" ref={setHeaderRef}>
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
            <p className="text-3xl font-light mb-4">
              Your Personal AI Identity
            </p>
            
            <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              CZero engine is realized through WebAssembly-based client-side processing of your local data, 
              ensuring your data never leaves your computer. Experience future-proof, local data processing 
              for AI applications - your companion app suite in the AI future.
            </p>

            {/* Mission Overview */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 max-w-4xl mx-auto mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Our Mission</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                CZero is about preventing <strong className="text-red-600 dark:text-red-400">human obsolescence in the AI era</strong>. 
                We're building tools so you control <strong className="text-blue-600 dark:text-blue-400">your AI interactions and data flows</strong>, 
                achieving <strong className="text-green-600 dark:text-green-400">full sovereignty through local processing</strong>. 
                Our endgame: a marketplace where people can <strong className="text-purple-600 dark:text-purple-400">monetize their AI-ready local workspaces</strong> — 
                <strong className="text-orange-600 dark:text-orange-400">your way to stay valuable</strong> by owning the input that feeds AI systems.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                <div className="text-green-600 dark:text-green-400 font-semibold mb-2">100% Local Processing</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Privacy Secured</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                <div className="text-green-600 dark:text-green-400 font-semibold mb-2">Zero-Effort Access</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Minimal Installation</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center">
                <div className="text-green-600 dark:text-green-400 font-semibold mb-2">Future Ready</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">AI Era Prepared</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 mb-12">
              <p className="text-lg font-medium">Experience the Beta:</p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="flex flex-col items-center">
                  <a 
                    href="https://app.czero.cc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#c1ff20] text-black font-medium rounded-md hover:bg-opacity-90 transition-colors duration-200"
                  >
                    Launch CZero Beta App
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    Experience powerful, private, and installation-free local data processing and RAG
                  </p>
                </div>
              </div>
            </div>
          </main>
          <footer className="relative z-10 text-center mt-12">
            
            <div className="mt-16 mb-12">
              <p className="text-xl font-light mb-4">
                Interested in implementing CZero&apos;s technology?
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                We&apos;d love to hear about your use case and specific requirements. 
                Please reach out to discuss how we can help with your privacy-first AI implementation.
              </p>
            </div>
            <div className="mb-4 flex flex-col items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Join our newsletter to stay updated
              </p>
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto plausible-event-name=Mail+Button+Click"
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
            
            <p className="text-black dark:text-white text-xl font-light mb-4">
              Contact us: <a 
                href="mailto:info@czero.cc" 
                className="hover:text-[#c1ff20] transition-colors duration-200"
              >
                info@czero.cc
              </a>
            </p>
            <a 
                  href="https://discord.gg/yjEUkUTEak" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#c1ff20] text-black dark:text-white font-medium rounded-md hover:bg-[#c1ff20] hover:bg-opacity-10 transition-colors duration-200"
                >
                  Join our Discord
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
