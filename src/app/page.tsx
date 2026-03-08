import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col items-center">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Workflow />
      <Pricing />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
