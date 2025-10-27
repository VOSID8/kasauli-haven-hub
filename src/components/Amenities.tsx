import { Wifi, Coffee, Car, Utensils, Trophy, Shield } from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet throughout the property",
  },
  {
    icon: Utensils,
    title: "Restaurant & Bar",
    description: "Multi-cuisine restaurant with local specialties",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Secure parking for all guests",
  },
  {
    icon: Coffee,
    title: "24/7 Room Service",
    description: "Round-the-clock service for your comfort",
  },
  {
    icon: Trophy,
    title: "Games & Recreation",
    description: "Badminton, carrom, board games and more",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Your safety is our priority",
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Hotel Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience comfort and convenience with our premium facilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-card hover:shadow-lg transition-all"
              >
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
