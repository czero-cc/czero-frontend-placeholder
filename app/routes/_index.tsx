import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "CZero Engine - Personal AI Interface | Your Personal AI Interface | CZero Desktop Overlay" },
    { name: "description", content: "CZero Engine processes your data locally, ensuring your data never leaves your computer. Experience future-proof, privacy-first AI technology with zero-effort local RAG, desktop overlay, and agentic workflow capabilities. Prevent human obsolescence in the AI era with full sovereignty through local processing." },
    
    // Open Graph tags
    { property: "og:title", content: "CZero Engine - Personal AI Interface | Your Personal AI Interface | CZero Desktop Overlay" },
    { property: "og:description", content: "CZero Engine processes your data locally, ensuring your data never leaves your computer. Experience future-proof, privacy-first AI technology with zero-effort local RAG, desktop overlay, and agentic workflow capabilities. Prevent human obsolescence in the AI era with full sovereignty through local processing." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://czero.cc" },
    { property: "og:image", content: "https://czero.cc/c0_logo_1200x630.png" },
    { property: "og:image:alt", content: "CZero - Personal AI Interface Technology Logo" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "CZero Engine" },
    { property: "og:locale", content: "en_US" },
    
    
    // Additional meta tags for better SEO
    { name: "keywords", content: "personal AI Interface, private AI, WebAssembly, client-side processing, data privacy, local AI, personal AI, CZero, privacy-first technology, desktop overlay, agentic workflows, context detection, zero-effort local RAG, AI workspace, future-proof AI, local data processing, AI identity, platform-independent AI, computer user agent, online associative memory, multi-agent coordination, AI era preparation, human obsolescence prevention, AI-ready workspaces, decentralized AI, P2P foundation, AI marketplace, next-gen AI workspace, advanced context injection, workflow automation, consumer device compatibility, high-dimensional data mapping, temporal embedding space, desktop automation, multi-app coordination, workflow orchestration, semantic understanding, privacy-secured AI, minimal installation AI, AI ecosystem, local processing sovereignty" },
    { name: "author", content: "Fiefworks, Inc." },
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
  // const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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

  /* Newsletter form handler - commented out since newsletter form is disabled
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
  */

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
      
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "CZero Engine",
            "alternateName": "C0 Engine",
            "description": "Personal AI Interface, Private AI technology platform offering desktop overlay, agentic workflows, and zero-effort local RAG processing. Future-proof AI workspace with complete data sovereignty and privacy-first architecture.",
            "url": "https://czero.cc",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": ["Windows", "macOS", "Linux"],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "publisher": {
              "@type": "Organization",
              "name": "CZero",
              "url": "https://czero.cc",
              "email": "info@czero.cc"
            },
            "featureList": [
              "Personal AI Interface",
              "100% Local Data Processing",
              "Desktop Overlay Technology",
              "Agentic Workflow Engine",
              "Context Detection and Injection",
              "Zero-Effort Local RAG",
              "Computer User Agent (CUA)",
              "Online Associative Memory (OAM)",
              "Multi-Agent Coordination",
              "Privacy-First Architecture",
              "Platform Independence",
              "Workflow Automation",
              "AI Workspace Management"
            ],
            "keywords": "personal AI interface, private AI, desktop overlay, agentic workflows, local data processing, AI workspace, context detection, privacy-first AI, workflow automation, computer user agent, online associative memory"
          })
        }}
      />
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
            <p className="text-3xl font-light mb-16">
              Personal AI Interface
            </p>

            {/* Mission Overview */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <div className="w-24 h-px bg-[#c1ff20] mx-auto mb-8"></div>
              <p className="text-xl font-light leading-relaxed text-black dark:text-white max-w-3xl mx-auto">
                Keep data <strong className="font-medium text-[#c1ff20]">local</strong>, manage your own AI usage context <strong className="font-medium text-[#c1ff20]">centrally</strong> <br />
                Inject <strong className="font-medium text-[#c1ff20]">everywhere</strong>
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-2xl font-light text-black dark:text-white mb-2">100% Local</div>
                <div className="w-16 h-px bg-[#c1ff20] mx-auto mb-3"></div>
                <div className="text-base font-light text-gray-700 dark:text-gray-300">No data leaves your computer</div>
              </div>
                              <div className="text-center">
                  <div className="text-2xl font-light text-black dark:text-white mb-2">Minimal Effort</div>
                  <div className="w-16 h-px bg-[#c1ff20] mx-auto mb-3"></div>
                  <div className="text-base font-light text-gray-700 dark:text-gray-300">
                    Webapp (Zero-effort)
                    <br />
                    Desktop Overlay (One installer)
                  </div>
                </div>
              <a 
                href="https://app.czero.cc/dashboard/overlay-promo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group cursor-pointer transition-all duration-200 hover:scale-105"
              >
                <div className="text-2xl font-light text-black dark:text-white mb-2 group-hover:text-[#c1ff20] transition-colors">Future Ready</div>
                <div className="w-16 h-px bg-[#c1ff20] mx-auto mb-3 group-hover:w-24 transition-all"></div>
                                 <div className="text-base font-light text-gray-700 dark:text-gray-300 mb-2">AI Era Prepared</div>
                 <div className="text-sm font-light text-gray-600 dark:text-gray-400 mb-2">
                   Maintain your personal usage in one place and inject everywhere
                 </div>
                 <div className="text-sm font-medium text-[#c1ff20] group-hover:text-[#c1ff20] opacity-90 group-hover:opacity-100 transition-all">
                   <strong>CZero Desktop Overlay</strong>
                 </div>
              </a>
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
                    Launch CZero Beta Webapp
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    Experience private and installation-free local data processing
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                    Chromium browser is required
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
                <br />
                Please reach out to discuss how we can help.
              </p>
            </div>
            {/* Newsletter signup section - commented out since we have proper auth in webapp
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
            */}
            
            <p className="text-black dark:text-white text-xl font-light mb-4">
              Contact us: <a 
                href="mailto:info@czero.cc" 
                className="hover:text-[#c1ff20] transition-colors duration-200"
              >
                info@czero.cc
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://blog.czero.cc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#c1ff20] text-black dark:text-white font-medium rounded-md hover:bg-[#c1ff20] hover:bg-opacity-10 transition-colors duration-200"
              >
                Read our Blog
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
          </footer>
        </div>
        
        {/* Hidden SEO Content - Not visible to users but crawled by search engines */}
        <div className="sr-only" aria-hidden="true">
          <h2>CZero Desktop Overlay - Advanced AI Workspace Technology | Personal AI Interface</h2>
          <p>
            CZero offers next-generation AI workspace solutions including context detection and injection, 
            agentic workflow engine capabilities, and online associative memory (OAM) systems. Our platform-independent 
            AI identity provider keeps your data local while enabling advanced workflow automation and multi-agent coordination.
          </p>
          
          <h3>Zero-Effort Local RAG Implementation</h3>
          <p>
            Experience powerful, private, and installation-free local data processing and RAG. Our future-proof 
            local data processing ensures AI era preparation while preventing human obsolescence through full 
            sovereignty and local processing control.
          </p>
          
          <h3>Desktop Overlay Features</h3>
          <p>
            Advanced context detection, content injection, semantic understanding, privacy-first processing, 
            real-time context analysis, multi-device sensor integration, consumer device compatibility, 
            high-dimensional data mapping, temporal embedding space processing, desktop automation, 
            workflow orchestration, multi-app coordination, and learning from user patterns.
          </p>
          
          <h3>Computer User Agent and Workflow Engine</h3>
          <p>
            AI agent interaction with desktop environment, automating workflows with precision through 
            multi-agent coordination, workflow generation, task decomposition, result synthesis, 
            and advanced agentic workflow capabilities for comprehensive AI workspace management.
          </p>
          
          <h4>Privacy-Secured AI Processing</h4>
          <p>
            100% local processing, minimal installation requirements, platform independence across Windows, 
            macOS, and Linux systems. AI context injection across platforms while maintaining complete 
            data sovereignty and privacy-secured operations.
          </p>
          
          <h4>AI Marketplace and P2P Foundation</h4>
          <p>
            Decentralized workspace sharing with core Libp2p infrastructure, enabling users to easily share, 
            discover, and transact on local workspaces. Monetize AI-ready local workspaces through our 
            comprehensive marketplace ecosystem designed for the AI era.
          </p>
        </div>
      </div>
    </>
  );
}
