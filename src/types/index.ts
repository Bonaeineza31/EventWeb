export interface DestinationData {
  id?: number;
  name: string;
  location: string;
  image: string;
  duration: string;
  rating: string;
  category: string;
  price: string;
  groupSize: string;
  difficulty?: string;
  bestTime?: string;
  description: string;
  highlights: string[];
  gallery?: string[];
  included?: string[];
  notIncluded?: string[];
  packingList?: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
};
  itinerary?: Array<{
    day: string;
    title: string;
    description: string;
  }>;
}

export interface PackageData {
  id: number;
  name: string;
  location: string;
  image: string;
  duration: string;
  price: number;
  category: string;
  rating?: string;
  description: string;
  highlights: string[];
  groupSize?: string;
}

export type ViewType = 'home' | 'destination' | 'booking-packages' | 'booking-form';
export type PreviousViewType = 'home' | 'destination' | 'booking-packages';