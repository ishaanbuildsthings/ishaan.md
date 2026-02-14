import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import MathPuzzle from "@/components/MathPuzzle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="h-full flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto py-12 sm:py-16 lg:py-0 lg:min-h-screen">
        <div className="lg:w-80 shrink-0 flex flex-col lg:justify-center">
          <Hero />
        </div>
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <Sidebar />
        </div>
      </main>
      <div className="pb-8 px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <MathPuzzle />
      </div>
    </div>
  );
}
