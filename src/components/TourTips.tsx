import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Backpack, 
  Camera, 
  Sun, 
  Droplets, 
  MapPin, 
  Heart, 
  Shield,
  Clock,
  Shirt,
  Footprints,
  Zap,
  CheckCircle
} from "lucide-react";

export function TourTips() {
  const essentialItems = [
    {
      category: "Clothing & Protection",
      icon: <Shirt className="w-5 h-5" />,
      color: "bg-blue-500",
      items: [
        "Lightweight, breathable long-sleeved shirts (for sun protection)",
        "Comfortable hiking pants or shorts",
        "Rain jacket or poncho (essential for all seasons)",
        "Wide-brimmed hat or cap",
        "Warm layer for early morning departures",
        "Comfortable sleepwear"
      ]
    },
    {
      category: "Footwear",
      icon: <Footprints className="w-5 h-5" />,
      color: "bg-amber-500",
      items: [
        "Sturdy hiking boots with good ankle support",
        "Waterproof or quick-dry hiking socks",
        "Comfortable walking shoes for city tours",
        "Sandals for lakeside relaxation",
        "Gaiters (recommended for forest trekking)"
      ]
    },
    {
      category: "Health & Safety",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-red-500",
      items: [
        "Personal first aid kit with band-aids",
        "Any prescription medications",
        "Insect repellent (DEET-based recommended)",
        "Sunscreen (SPF 30+ minimum)",
        "Hand sanitizer",
        "Personal water bottle (reusable)"
      ]
    },
    {
      category: "Photography & Electronics",
      icon: <Camera className="w-5 h-5" />,
      color: "bg-purple-500",
      items: [
        "Camera with extra batteries and memory cards",
        "Portable phone charger/power bank",
        "Universal power adapter",
        "Waterproof case or bags for electronics",
        "Binoculars for wildlife viewing"
      ]
    }
  ];

  const importantNotes = [
    {
      title: "Weather Preparation",
      description: "Rwanda has a tropical climate with two rainy seasons. Weather can change quickly, especially in mountainous areas.",
      icon: <Droplets className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Physical Fitness",
      description: "Gorilla trekking and forest walks require moderate fitness. Trails can be steep and muddy.",
      icon: <Zap className="w-5 h-5 text-orange-500" />
    },
    {
      title: "Respectful Tourism",
      description: "Follow your guide's instructions, maintain distance from wildlife, and respect local customs.",
      icon: <Shield className="w-5 h-5 text-green-500" />
    },
    {
      title: "Early Departures",
      description: "Most tours start early (5:30-6:00 AM) to maximize wildlife viewing opportunities.",
      icon: <Clock className="w-5 h-5 text-indigo-500" />
    }
  ];

  const whatWeProvide = [
    "Professional local guides",
    "Transportation in comfortable vehicles",
    "All park entrance fees and permits",
    "Walking sticks for trekking",
    "Basic rain gear (ponchos)",
    "Bottled water during tours",
    "Emergency communication devices",
    "First aid trained guides"
  ];

  return (
    <section id="tour-tips" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
            Essential Tour Tips & What to Bring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepare for your Rwanda adventure with our comprehensive guide. 
            We want you to be comfortable, safe, and ready for incredible experiences.
          </p>
        </div>

        {/* Essential Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {essentialItems.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-800 mb-8 text-center">Important Things to Know</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantNotes.map((note, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {note.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">{note.title}</h4>
                    <p className="text-gray-600 text-sm">{note.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Provide */}
        <div className="bg-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-800 mb-4">What We Provide</h3>
            <p className="text-gray-600">Focus on enjoying your adventure - we'll take care of these essentials</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whatWeProvide.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
            <h4 className="text-lg text-gray-800 mb-4">Questions About What to Pack?</h4>
            <p className="text-gray-600 mb-6 text-sm">
              Our travel experts are here to help you prepare for your adventure.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span>📞</span>
                <span className="text-primary">+250 788 684 804</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✉️</span>
                <span className="text-primary">hello@rwandaadventures.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}