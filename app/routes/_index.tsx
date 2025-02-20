import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Website Title" },
    { name: "description", content: "Your website description" },
  ];
};

export default function Index() {
  return (
    <div className="bg-black text-white flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        <header>
          <img
            src="/logo.png"
            alt="Your Logo"
            className="block h-32 w-auto"
          />
        </header>
        <main className="text-center">
          <p className="text-xl font-light">
            Your mission statement here.
          </p>
        </main>
        <footer>
          <p className="text-gray-400">
            Contact us: <a href="mailto:contact@example.com" className="text-white hover:underline">contact@example.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
