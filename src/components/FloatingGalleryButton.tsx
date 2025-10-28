import { Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingGalleryButton = () => {
  return (
    <Link to="/gallery">
      <Button
        size="lg"
        className="fixed bottom-24 right-6 z-40 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="View Gallery"
      >
        <Images className="mr-2" />
        Gallery
      </Button>
    </Link>
  );
};

export default FloatingGalleryButton;
