import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

interface ScrollingHeaderProps {
  onBookNowClick: () => void;
}

export function ScrollingHeader({ onBookNowClick }: ScrollingHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        {/* Top Bar - only show when scrolled */}
        {isScrolled && (
          <div className="hidden md:flex items-center justify-between py-2 border-b border-gray-100">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+250 788 684 804</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@rwandaadventures.com</span>
              </div>
            </div>
            <div className="text-sm text-primary">
              ✈️ Perfect for Conference Extensions
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <div>
              <h1 className={`text-xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>Rwanda Adventures</h1>
              <p className={`text-xs ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>Beyond Conference Halls</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('tours')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant={isScrolled ? "outline" : "secondary"}
              size="sm"
              onClick={onBookNowClick}
              className={isScrolled ? "" : "border-white/30 text-white hover:bg-white/10"}
            >
              Quick Quote
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90" 
              size="sm"
              onClick={onBookNowClick}
            >
              Book Now
            </Button>
          </div>

          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'hover:bg-gray-100' 
                : 'hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 ${
            isScrolled ? 'border-t border-gray-100' : 'border-t border-white/20'
          }`}>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`text-left transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`text-left transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('tours')} 
                className={`text-left transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`text-left transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant={isScrolled ? "outline" : "secondary"} 
                  size="sm"
                  onClick={onBookNowClick}
                  className={isScrolled ? "" : "border-white/30 text-white hover:bg-white/10"}
                >
                  Quick Quote
                </Button>
                <Button 
                  className="bg-primary" 
                  size="sm"
                  onClick={onBookNowClick}
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}