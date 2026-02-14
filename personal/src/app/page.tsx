import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto p-6 sm:p-8 lg:p-12 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
              Ishaan Agrawal
            </h1>
            <p className="text-xs text-muted">
              Eng #2 at{" "}
              <a
                href="https://www.extend.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan underline hover:text-cyan-dim"
              >
                Extend AI
              </a>{" "}
              (YC W23)
            </p>
          </div>
          <Sidebar />
        </div>
        <Hero />
      </main>
    </div>
  );
}
