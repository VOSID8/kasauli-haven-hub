import { MessageCircle, Phone, Mail, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FloatingContactButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 z-40 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Contact Us"
        >
          <MessageCircle className="mr-2" />
          Contact Us
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
            <div className="p-2 rounded-lg bg-primary/10">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p className="text-sm text-muted-foreground">
                Mall Road, Kasauli<br />
                Himachal Pradesh 173204, India
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
            <div className="p-2 rounded-lg bg-primary/10">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-sm text-muted-foreground">+91 1234 567890</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
            <div className="p-2 rounded-lg bg-primary/10">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-sm text-muted-foreground">info@pineneedles.com</p>
            </div>
          </div>
          <a 
            href="https://wa.me/911234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">WhatsApp</h4>
              <p className="text-sm text-muted-foreground">+91 1234 567890</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FloatingContactButton;
