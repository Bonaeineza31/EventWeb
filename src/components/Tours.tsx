import { TourCard } from "./TourCard";
import { useLanguage } from "../contexts/LanguageContext";

interface ToursProps {
  onBookNowClick: () => void;
  onDirectBookClick: (tourData: any) => void;
  onLearnMoreClick: (tourIndex: number) => void;
}

export function Tours({ onBookNowClick, onDirectBookClick, onLearnMoreClick }: ToursProps) {
  const { t } = useLanguage();
  const tours = [
    {
      id: 1,
      title: t('tour.akagera.title'),
      duration: t('tour.akagera.duration'),
      location: t('tour.akagera.location'),
      description: t('tour.akagera.description'),
      highlights: [
        t('tour.akagera.highlight1'),
        t('tour.akagera.highlight2'), 
        t('tour.akagera.highlight3'),
        t('tour.akagera.highlight4')
      ],
      images: [
        "https://images.unsplash.com/photo-1623005804842-44950138a4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBa2FnZXJhJTIwTmF0aW9uYWwlMjBQYXJrJTIwUndhbmRhJTIwc2FmYXJpJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzU4NjEzMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1709686511177-60d6545962fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBa2FnZXJhJTIwd2lsZGxpZmUlMjBlbGVwaGFudHxlbnwxfHx8fDE3NTk5NjQxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1663429975647-3a7f30710049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBzYWZhcmklMjBsaW9uc3xlbnwxfHx8fDE3NTk5NjQxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      price: 425,
      category: "Wildlife"
    },
    {
      id: 2,
      title: t('tour.volcanoes.title'),
      duration: t('tour.volcanoes.duration'), 
      location: t('tour.volcanoes.location'),
      description: t('tour.volcanoes.description'),
      highlights: [
        t('tour.volcanoes.highlight1'),
        t('tour.volcanoes.highlight2'),
        t('tour.volcanoes.highlight3'),
        t('tour.volcanoes.highlight4')
      ],
      images: [
        "https://images.unsplash.com/photo-1722293094576-424bd9b4aef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGElMjB0cmVra2luZ3xlbnwxfHx8fDE3NTg2MTMyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1663924665428-e5b35266f7cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBnb3JpbGxhJTIwZm9yZXN0fGVufDF8fHx8MTc1OTk2NDEzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1573090407445-1a75f059eebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGdvcmlsbGElMjBmYW1pbHl8ZW58MXx8fHwxNzU5OTY0MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      price: 650,
      category: "Wildlife"
    },
    {
      id: 3,
      title: t('tour.kivu.title'),
      duration: t('tour.kivu.duration'),
      location: t('tour.kivu.location'),
      description: t('tour.kivu.description'),
      highlights: [
        t('tour.kivu.highlight1'),
        t('tour.kivu.highlight2'), 
        t('tour.kivu.highlight3'),
        t('tour.kivu.highlight4')
      ],
      images: [
        "https://images.unsplash.com/photo-1647849975193-bf78bd1cbf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMFJ3YW5kYSUyMGJvYXRzfGVufDF8fHx8MTc1ODYxMzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1648217720123-6989705a6da5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMGJlYWNofGVufDF8fHx8MTc1OTk2NDEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1707537285375-bf1a0ab8dcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbGFrZSUyMHN1bnNldHxlbnwxfHx8fDE3NTk5NjQxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      price: 285,
      category: "Relaxation"
    },
    {
      id: 4,
      title: t('tour.nyungwe.title'),
      duration: t('tour.nyungwe.duration'),
      location: t('tour.nyungwe.location'), 
      description: t('tour.nyungwe.description'),
      highlights: [
        t('tour.nyungwe.highlight1'),
        t('tour.nyungwe.highlight2'),
        t('tour.nyungwe.highlight3'),
        t('tour.nyungwe.highlight4')
      ],
      images: [
        "https://images.unsplash.com/photo-1753672036773-2f2861882113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOeXVuZ3dlJTIwZm9yZXN0JTIwY2Fub3B5JTIwd2Fsa3dheSUyMFJ3YW5kYXxlbnwxfHx8fDE3NTg2MTMyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1716118804538-44244911b0ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluZm9yZXN0JTIwY2Fub3B5JTIwYnJpZGdlfGVufDF8fHx8MTc1OTk2NDEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1715405911530-67c11cfe8e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGltcGFuemVlJTIwcmFpbmZvcmVzdHxlbnwxfHx8fDE3NTk5NjQxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      price: 385,
      category: "Adventure"
    },
    {
      id: 5,
      title: t('tour.cultural.title'),
      duration: t('tour.cultural.duration'),
      location: t('tour.cultural.location'),
      description: t('tour.cultural.description'),
      highlights: [
        t('tour.cultural.highlight1'),
        t('tour.cultural.highlight2'),
        t('tour.cultural.highlight3'),
        t('tour.cultural.highlight4')
      ],
      images: [
        "https://images.unsplash.com/photo-1515921560173-3633830cb11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjdWx0dXJhbCUyMGRhbmNlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU4NjEzMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1722958100828-5b3de4c9e812?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY3JhZnQlMjBtYXJrZXR8ZW58MXx8fHwxNzU5OTY0MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      price: 150,
      category: "Culture"
    },
    {
      id: 6,
      title: t('tour.kigali.title'), 
      duration: t('tour.kigali.duration'),
      location: t('tour.kigali.location'),
      description: t('tour.kigali.description'),
      highlights: [
        t('tour.kigali.highlight1'),
        t('tour.kigali.highlight2'),
        t('tour.kigali.highlight3'), 
        t('tour.kigali.highlight4')
      ],
      images: [
        "https://images.unsplash.com/photo-1708772565588-33785e13aa46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBLaWdhbGklMjBjaXR5c2NhcGUlMjBza3lsaW5lfGVufDF8fHx8MTc1ODYxMzIzOXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1648708511872-5426c0f29c27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaWdhbGklMjBjaXR5JTIwbW9kZXJufGVufDF8fHx8MTc1OTk2NDEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1646186582146-7fb4aedc3579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtZW1vcmlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc1OTk2NDEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      price: 75,
      category: "Culture"
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
            {t('tours.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('tours.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard 
              key={index} 
              {...tour} 
              price={`${tour.price}`}
              onLearnMore={() => onLearnMoreClick(index)}
              onBookNow={() => onDirectBookClick({
                id: tour.id,
                name: tour.title,
                location: tour.location,
                image: tour.images[0],
                duration: tour.duration,
                price: tour.price,
                category: tour.category,
                description: tour.description,
                highlights: tour.highlights
              })}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            {t('tours.customNote')}
          </p>
        </div>
      </div>
    </section>
  );
}