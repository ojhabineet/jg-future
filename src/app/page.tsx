import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}