import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-hotel.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import suiteRoom from "@/assets/suite-room.jpg";

const heroImages = [heroImage, standardRoom, deluxeRoom, suiteRoom];

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Carousel
        className="absolute inset-0"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div
                className="h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" style={{ opacity: index === 0 ? 0 : 1 }}></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block bg-background/70 backdrop-blur-sm rounded-lg px-8 py-4 shadow-lg border border-border/30 mb-8">
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-2 text-foreground">
            Welcome to Pine Needles
          </h1>
          <p className="font-playfair text-xl md:text-2xl text-foreground/90">
            Comfort in Kasauli's Mountains
          </p>
        </div>
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
