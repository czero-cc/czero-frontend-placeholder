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
      <div className="flex flex-col items-center gap-24">
        <header>
          <img
            src="/c0-logo.svg"
            alt="Czero Logo"
            className="block h-[300px] w-auto"
          />
        </header>
        <main className="text-center">
          <p className="text-2xl font-light">
          Enable your AI-driven Software Development Pipelines
          </p>
        </main>
        <footer>
          <p className="text-gray-700 text-xl">
            Contact us: <a href="mailto:info@czero.cc" className="hover:underline">info@czero.cc</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
