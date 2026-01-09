import ContactRibbon from "@/components/ContactRibbon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContactRibbon />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
