import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Careers | CZero - Personal AI Interface" },
    { name: "description", content: "Join CZero in building the future of personal AI interfaces. While we don't have open positions right now, we're always interested in connecting with talented individuals who share our vision for privacy-first AI technology." },
    
    // Open Graph tags
    { property: "og:title", content: "Careers | CZero - Personal AI Interface" },
    { property: "og:description", content: "Join CZero in building the future of personal AI interfaces. While we don't have open positions right now, we're always interested in connecting with talented individuals who share our vision for privacy-first AI technology." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://czero.cc/careers" },
    { property: "og:image", content: "https://czero.cc/c0_logo_1200x630.png" },
    { property: "og:image:alt", content: "CZero - Personal AI Interface Technology Logo" },
    { property: "og:site_name", content: "CZero" },
    
    // Additional meta tags
    { name: "keywords", content: "CZero careers, AI jobs, privacy-first AI, personal AI interface jobs, WebAssembly development, local AI processing, desktop overlay development, agentic workflow engineering" },
    { name: "author", content: "CZero" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#c1ff20" },
    
    // Canonical URL
    { rel: "canonical", href: "https://czero.cc/careers" },
  ];
};

export default function Careers() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Careers at CZero",
            "description": "Career opportunities at CZero, building the future of personal AI interfaces with privacy-first technology.",
            "url": "https://czero.cc/careers",
            "publisher": {
              "@type": "Organization",
              "name": "CZero",
              "url": "https://czero.cc",
              "email": "info@czero.cc"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://czero.cc"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Careers",
                  "item": "https://czero.cc/careers"
                }
              ]
            }
          })
        }}
      />
      
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
        {/* Header */}
        <header className="max-w-6xl mx-auto px-4 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/c0_logo_simple.svg"
              alt="CZero Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-light">CZero</span>
          </Link>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-black dark:text-white mb-6">
              Careers at CZero
            </h1>
            <div className="w-24 h-px bg-[#c1ff20] mx-auto mb-8"></div>
            <p className="text-xl font-light text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building the future of <strong className="font-medium text-[#c1ff20]">personal AI interfaces</strong> with privacy-first technology
            </p>
          </div>

          {/* Current Status */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-light text-black dark:text-white mb-4">
                No Open Positions Currently
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                While we don't have any open positions at the moment, we're always interested in connecting with talented individuals who share our vision.
              </p>
              <div className="inline-flex items-center gap-2 text-[#c1ff20]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">We'll update this page when positions become available</span>
              </div>
            </div>
          </div>

          {/* What We're Building */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-black dark:text-white mb-8 text-center">
              What We're Building
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c1ff20] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c1ff20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-3">Privacy-First AI</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  100% local data processing ensuring your information never leaves your computer
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c1ff20] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c1ff20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-3">Desktop Overlay</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced context detection and workflow automation across all applications
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c1ff20] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c1ff20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-3">Agentic Workflows</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Multi-agent coordination and intelligent workflow orchestration
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#c1ff20] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c1ff20]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-black dark:text-white mb-3">Future-Ready Platform</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Platform-independent AI workspace designed for the AI era
                </p>
              </div>
            </div>
          </div>

          {/* What We Look For */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-black dark:text-white mb-8 text-center">
              What We Look For
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c1ff20] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">Privacy & Security Advocates</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      People who believe in user data sovereignty and understand the importance of local processing
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c1ff20] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">Technical Excellence</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Expertise in areas like WebAssembly, AI/ML, desktop application development, or distributed systems
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c1ff20] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">Future-Oriented Thinking</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Vision for how AI will transform work and the importance of maintaining human agency
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#c1ff20] rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-medium text-black dark:text-white mb-2">Collaborative Spirit</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ability to work in a small, focused team building cutting-edge technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-light text-black dark:text-white mb-4">
              Interested in Our Mission?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Even though we don't have open positions right now, we'd love to hear from passionate individuals who want to shape the future of personal AI interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:info@czero.cc?subject=Interest in CZero Career Opportunities"
                className="px-6 py-3 bg-[#c1ff20] text-black font-medium rounded-md hover:bg-opacity-90 transition-colors duration-200"
              >
                Get in Touch
              </a>
              <Link 
                to="/"
                className="px-6 py-3 border border-[#c1ff20] text-black dark:text-white font-medium rounded-md hover:bg-[#c1ff20] hover:bg-opacity-10 transition-colors duration-200"
              >
                Back to Home
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We'll keep your information and reach out when relevant opportunities arise
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Home
              </Link>
              <a 
                href="https://blog.czero.cc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Blog
              </a>
              <a 
                href="https://discord.gg/yjEUkUTEak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                Discord
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2025 CZero. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
} 