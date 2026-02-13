import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import RecentActions from "@/components/RecentActions";
import AgentInterop from "@/components/AgentInterop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        <Hero />
        <hr className="border-border" />
        <Capabilities />
        <hr className="border-border" />
        <About />
        <hr className="border-border" />
        <RecentActions />
        <hr className="border-border" />
        <AgentInterop />
        <hr className="border-border" />
        <Footer />
      </main>
    </div>
  );
}
