import ContactRibbon from "@/components/ContactRibbon";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdMarquee from "@/components/AdMarquee";
import About from "@/components/About";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import RequestDemo from "@/components/RequestDemo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SuccessPopup from "@/components/SuccessPopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SuccessPopup />
      <ContactRibbon />
      <Navbar />
      <AdMarquee />
      <Hero />
      <About />
      <Stats />
      <Features />
      <Courses />
      <SuccessStories />
      <Gallery />
      <Testimonials />
      <RequestDemo />
      <Contact />
      <Footer />
    </main>
  );
}



