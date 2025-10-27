import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 rounded-lg bg-card hover:shadow-lg transition-all">
              <div className="p-3 rounded-lg bg-primary/10">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-muted-foreground">
                  Mall Road, Kasauli<br />
                  Himachal Pradesh 173204, India
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg bg-card hover:shadow-lg transition-all">
              <div className="p-3 rounded-lg bg-primary/10">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-muted-foreground">+91 1234 567890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 rounded-lg bg-card hover:shadow-lg transition-all">
              <div className="p-3 rounded-lg bg-primary/10">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground">info@pineneedles.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
