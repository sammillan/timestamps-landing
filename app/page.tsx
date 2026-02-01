import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <UseCases />
      <FinalCTA />
      <Footer />
    </main>
  );
}
