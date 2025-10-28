import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Attractions from "@/components/Attractions";
import Amenities from "@/components/Amenities";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";
import GalleryDialog from "@/components/GalleryDialog";

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
      <FloatingContactButton />
      <GalleryDialog />
    </div>
  );
};

export default Index;
