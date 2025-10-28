import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-hotel.jpg";
import standardRoom from "@/assets/standard-room.jpg";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import suiteRoom from "@/assets/suite-room.jpg";

const galleryImages = [
  { src: heroImage, alt: "Pine Needles Hotel Exterior", category: "Exterior" },
  { src: standardRoom, alt: "Standard Room", category: "Rooms" },
  { src: deluxeRoom, alt: "Deluxe Room", category: "Rooms" },
  { src: suiteRoom, alt: "Suite Room", category: "Rooms" },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Hotel Gallery
          </h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <p className="text-sm font-medium text-accent">{image.category}</p>
                  <p className="text-foreground font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </Button>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <p className="text-center mt-4 text-lg text-foreground">
              {galleryImages[selectedImage].alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
