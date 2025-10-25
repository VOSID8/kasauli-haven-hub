import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Church, Landmark, TreePine, Mountain, Camera } from "lucide-react";

const attractions = [
  {
    title: "Christ Church",
    description: "A beautiful Gothic-style church built in 1853, offering peaceful surroundings and stunning architecture.",
    icon: Church,
    distance: "2 km",
  },
  {
    title: "Monkey Point",
    description: "The highest point in Kasauli, offering panoramic views of the Sutlej river and surrounding valleys.",
    icon: Mountain,
    distance: "3 km",
  },
  {
    title: "Mall Road",
    description: "A charming colonial-era street perfect for evening strolls, shopping, and experiencing local culture.",
    icon: Landmark,
    distance: "1.5 km",
  },
  {
    title: "Gilbert Trail",
    description: "A scenic nature walk through dense pine forests, ideal for bird watching and photography.",
    icon: TreePine,
    distance: "2.5 km",
  },
  {
    title: "Sunset Point",
    description: "Experience breathtaking sunsets over the Himalayas with stunning views of the valley below.",
    icon: Camera,
    distance: "1 km",
  },
  {
    title: "Kasauli Brewery",
    description: "Asia's oldest distillery, offering tours and tastings in a historic colonial setting.",
    icon: MapPin,
    distance: "4 km",
  },
];

const Attractions = () => {
  return (
    <section id="attractions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Explore Kasauli
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the enchanting beauty and colonial charm of Kasauli's top attractions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => {
            const Icon = attraction.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{attraction.distance}</span>
                  </div>
                  <CardTitle className="mt-4">{attraction.title}</CardTitle>
                  <CardDescription>{attraction.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Attractions;
