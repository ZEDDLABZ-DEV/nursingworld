import ContactRibbon from "@/components/ContactRibbon";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import RequestDemo from "@/components/RequestDemo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ContactRibbon />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Features />
      <Courses />
      <SuccessStories />
      <Testimonials />
      <RequestDemo />
      <Contact />
      <Footer />
    </main>
  );
}



