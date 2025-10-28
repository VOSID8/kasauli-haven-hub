import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContactButton = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToContact}
      size="lg"
      className="fixed bottom-6 right-6 z-40 shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Contact Us"
    >
      <MessageCircle className="mr-2" />
      Contact Us
    </Button>
  );
};

export default FloatingContactButton;
