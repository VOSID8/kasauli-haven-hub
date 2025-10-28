import { Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-hotel.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import suiteRoom from "@/assets/suite-room.jpg";

const galleryImages = [
  { src: heroImage, alt: "Pine Needles Hotel Exterior" },
  { src: standardRoom, alt: "Standard Room" },
  { src: deluxeRoom, alt: "Deluxe Room" },
  { src: suiteRoom, alt: "Suite Room" },
];

const GalleryDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-24 right-6 z-40 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="View Gallery"
        >
          <Images className="mr-2" />
          Gallery
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Hotel Gallery</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-muted-foreground">
                    {image.alt}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryDialog;
