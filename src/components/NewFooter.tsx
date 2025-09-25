import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, Heart } from "lucide-react";
import { motion } from "motion/react";

export function NewFooter() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Adventures", href: "#tours" },
    { name: "Contact", href: "#contact" }
  ];

  const adventures = [
    "Akagera Safari",
    "Gorilla Trekking", 
    "Lake Kivu Escape",
    "Nyungwe Canopy",
    "Cultural Rwanda",
    "Kigali City Tour"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-24 bg-white/20 transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">R</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Rwanda Adventures</h3>
                <p className="text-sm text-gray-400">Beyond Conference Halls</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming business trips into unforgettable adventures. 
              Your trusted partner for discovering Rwanda's magic while maintaining your professional schedule.
            </p>
            
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">
                  Testimonials
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Adventures */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg mb-6 text-white">Our Adventures</h3>
            <ul className="space-y-3">
              {adventures.map((adventure, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('tours')}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {adventure}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg mb-6 text-white">Stay Connected</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+250 788 684 804</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">hello@rwandaadventures.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Kigali, Rwanda</span>
              </div>
            </div>

            <div>
              <p className="text-gray-300 mb-4 text-sm">
                Get exclusive deals and adventure updates!
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
                />
                <Button className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 px-4">
                  ✨
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-16 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Rwanda Adventures. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>in Rwanda</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-800/50">
            <p className="text-gray-500 text-sm">
              🌟 Proudly supporting sustainable tourism in Rwanda • Licensed Tour Operator #RDB2024
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
