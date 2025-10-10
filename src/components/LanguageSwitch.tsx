import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 border-primary/20 hover:border-primary hover:bg-primary/5"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{language === 'en' ? 'FR' : 'EN'}</span>
    </Button>
  );
}
