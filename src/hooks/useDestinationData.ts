import { useLanguage } from "../contexts/LanguageContext";
import { destinationsData } from "../components/destinationData";
import { destinationsDataFr } from "../components/destinationData.fr";

export function useDestinationData() {
  const { language } = useLanguage();
  
  return language === 'fr' ? destinationsDataFr : destinationsData;
}
