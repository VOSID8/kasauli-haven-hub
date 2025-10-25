import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Attractions from "@/components/Attractions";
import Amenities from "@/components/Amenities";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Rooms />
      <Attractions />
      <Amenities />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
