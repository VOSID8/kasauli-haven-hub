import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import deluxeRoom from "@/assets/deluxe-room.jpg";
import suiteRoom from "@/assets/suite-room.jpg";
import standardRoom from "@/assets/standard-room.jpg";

const rooms = [
  {
    title: "Deluxe Room",
    description: "Spacious room with mountain views and premium amenities",
    image: deluxeRoom,
    features: ["King Size Bed", "Mountain View", "Mini Bar", "Free WiFi"],
    price: "₹4,500/night",
  },
  {
    title: "Premium Suite",
    description: "Luxurious suite with separate living area and panoramic views",
    image: suiteRoom,
    features: ["Separate Living Area", "Panoramic View", "Jacuzzi", "Complimentary Breakfast"],
    price: "₹7,500/night",
  },
  {
    title: "Standard Room",
    description: "Comfortable and cozy room perfect for budget travelers",
    image: standardRoom,
    features: ["Twin Beds", "Garden View", "Air Conditioning", "Tea/Coffee Maker"],
    price: "₹3,000/night",
  },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Rooms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully designed rooms, each offering comfort and stunning views
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>{room.title}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{room.price}</span>
                  <Button
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
