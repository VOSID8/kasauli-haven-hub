import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Kasauli Heights
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <Button variant="ghost" onClick={() => scrollToSection("rooms")}>
              Rooms
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("attractions")}>
              Attractions
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("amenities")}>
              Amenities
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("faq")}>
              FAQs
            </Button>
            <Button variant="default" onClick={() => scrollToSection("contact")}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("rooms")}
            >
              Rooms
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("attractions")}
            >
              Attractions
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("amenities")}
            >
              Amenities
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection("faq")}
            >
              FAQs
            </Button>
            <Button
              variant="default"
              className="w-full"
              onClick={() => scrollToSection("contact")}
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
