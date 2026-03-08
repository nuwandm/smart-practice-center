import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Workflow from "@/components/Workflow";
import Integrations from "@/components/Integrations";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
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
      <Integrations />
      <Comparison />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
