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
import { useLanguage } from "../contexts/LanguageContext";

export function TourTips() {
  const { t } = useLanguage();
  
  const essentialItems = [
    {
      categoryKey: "travelTips.clothing.title",
      icon: <Shirt className="w-5 h-5" />,
      color: "bg-blue-500",
      itemKeys: [
        "travelTips.clothing.item1",
        "travelTips.clothing.item2",
        "travelTips.clothing.item3",
        "travelTips.clothing.item4",
        "travelTips.clothing.item5",
        "travelTips.clothing.item6"
      ]
    },
    {
      categoryKey: "travelTips.footwear.title",
      icon: <Footprints className="w-5 h-5" />,
      color: "bg-amber-500",
      itemKeys: [
        "travelTips.footwear.item1",
        "travelTips.footwear.item2",
        "travelTips.footwear.item3",
        "travelTips.footwear.item4",
        "travelTips.footwear.item5"
      ]
    },
    {
      categoryKey: "travelTips.health.title",
      icon: <Heart className="w-5 h-5" />,
      color: "bg-red-500",
      itemKeys: [
        "travelTips.health.item1",
        "travelTips.health.item2",
        "travelTips.health.item3",
        "travelTips.health.item4",
        "travelTips.health.item5",
        "travelTips.health.item6"
      ]
    },
    {
      categoryKey: "travelTips.photography.title",
      icon: <Camera className="w-5 h-5" />,
      color: "bg-purple-500",
      itemKeys: [
        "travelTips.photography.item1",
        "travelTips.photography.item2",
        "travelTips.photography.item3",
        "travelTips.photography.item4",
        "travelTips.photography.item5"
      ]
    }
  ];

  const importantNotes = [
    {
      titleKey: "travelTips.notes.weather.title",
      descriptionKey: "travelTips.notes.weather.desc",
      icon: <Droplets className="w-5 h-5 text-blue-500" />
    },
    {
      titleKey: "travelTips.notes.fitness.title",
      descriptionKey: "travelTips.notes.fitness.desc",
      icon: <Zap className="w-5 h-5 text-orange-500" />
    },
    {
      titleKey: "travelTips.notes.respectful.title",
      descriptionKey: "travelTips.notes.respectful.desc",
      icon: <Shield className="w-5 h-5 text-green-500" />
    },
    {
      titleKey: "travelTips.notes.earlyStart.title",
      descriptionKey: "travelTips.notes.earlyStart.desc",
      icon: <Clock className="w-5 h-5 text-indigo-500" />
    }
  ];

  const whatWeProvideKeys = [
    "travelTips.provided.item1",
    "travelTips.provided.item2",
    "travelTips.provided.item3",
    "travelTips.provided.item4",
    "travelTips.provided.item5",
    "travelTips.provided.item6",
    "travelTips.provided.item7",
    "travelTips.provided.item8"
  ];

  return (
    <section id="tour-tips" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
            {t('travelTips.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('travelTips.subtitle')}
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
                  {t(category.categoryKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.itemKeys.map((itemKey, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{t(itemKey)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mb-16">
          <h3 className="text-2xl text-gray-800 mb-8 text-center">{t('travelTips.importantNotes')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantNotes.map((note, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {note.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">{t(note.titleKey)}</h4>
                    <p className="text-gray-600 text-sm">{t(note.descriptionKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Provide */}
        <div className="bg-primary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-800 mb-4">{t('travelTips.whatWeProvide')}</h3>
            <p className="text-gray-600">{t('travelTips.whatWeProvideSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeProvideKeys.map((itemKey, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-2" />
                <p className="text-sm text-gray-700">{t(itemKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
            <h4 className="text-lg text-gray-800 mb-4">{t('travelTips.questionsTitle')}</h4>
            <p className="text-gray-600 mb-6 text-sm">
              {t('travelTips.questionsSubtitle')}
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
