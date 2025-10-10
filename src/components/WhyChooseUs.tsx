import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, MapPin, Users, Shield, Zap, Calendar } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: "Quick Response",
      description: "Book your adventure in under 2 hours",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Local Expertise", 
      description: "Born and raised in Rwanda, we know every hidden gem",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Conference Ready",
      description: "Packages designed specifically for business travelers",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Fully Licensed",
      description: "Registered tour operator with full insurance coverage",
      color: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "No waiting lists, immediate confirmation",
      color: "text-red-600"
    },
    {
      icon: Calendar,
      title: "Flexible Dates",
      description: "Adapt to your conference schedule perfectly",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Why Choose Rwanda Adventures
          </Badge>
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
            Designed for Conference Travelers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We understand your time constraints and professional needs. 
            That's why we've built our service around flexibility and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="group text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gray-50/50"
              >
                <CardContent className="p-0">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-primary to-green-600 rounded-2xl px-12 py-8 text-white">
            <div className="text-center">
              <div className="text-3xl mb-1">500+</div>
              <div className="text-white/90">Happy Travelers</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl mb-1">4.9★</div>
              <div className="text-white/90">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl mb-1">24/7</div>
              <div className="text-white/90">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}