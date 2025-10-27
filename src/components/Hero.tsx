import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Welcome to Pine Needles
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto">
          Experience comfort and tranquility in the heart of Kasauli's misty mountains
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="outline"
            className="bg-background/80 backdrop-blur-sm"
            onClick={() =>
              document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
