import Hero from "@/components/Hero";
import RecentActions from "@/components/RecentActions";

export default function Home() {
  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-background">
      <main className="h-full flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <Hero />
        </div>
        <div className="lg:w-80 shrink-0 flex flex-col justify-center">
          <RecentActions />
        </div>
      </main>
    </div>
  );
}
