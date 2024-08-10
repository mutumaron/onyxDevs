import About from "@/components/Home/About";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Pricing from "@/components/Home/Pricing";
import Projects from "@/components/Home/Projects";

export default function Home() {
  return (
    <section className="py-20">
      <div className="flex flex-col gap-20 min-h-screen">
        <Hero />
        <About />
        <Features />
        <Projects />
        <Pricing />
      </div>
    </section>
  );
}
