import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Website Title" },
    { name: "description", content: "Your website description" },
    {
      name: "google-font",
      content:
        "https://fonts.googleapis.com/css2?family=Baskervville&display=swap",
    },
  ];
};

export default function Index() {
  return (
    <div className="bg-white text-black flex h-screen items-center justify-center font-serif" style={{ fontFamily: 'Baskervville, serif' }}>
      <div className="flex flex-col items-center gap-12">
        <header>
          <img
            src="/c0-logo.svg"
            alt="Czero Logo"
            className="block h-80 w-auto"
          />
        </header>
        <main className="text-center">
          <p className="text-xl font-light">
          Enable your AI-driven Software Development Pipelines
          </p>
        </main>
        <footer>
          <p className="text-gray-700">
            Contact us: <a href="mailto:contact@example.com" className="hover:underline">info@czero.cc</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
