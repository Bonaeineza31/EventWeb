import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";

export function NewContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    days: "",
    interests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 2 hours 🚀");
    setFormData({
      name: "",
      email: "",
      phone: "",
      days: "",
      interests: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      info: "+250 788 684 804",
      subtext: "Available 24/7 for urgent inquiries",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@rwandaadventures.com",
      subtext: "We respond within 2 hours",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      title: "Meet Us",
      info: "Kigali Convention Centre Area",
      subtext: "Kigali, Rwanda",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Response Time",
      info: "Under 2 Hours",
      subtext: "Usually much faster!",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-primary/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Let's Plan Your Adventure
          </Badge>
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
            Ready to Transform Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">
              {" "}Conference Trip?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your schedule and interests. We'll craft the perfect Rwanda adventure 
            that fits your timeline and exceeds your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl text-gray-800">Quick Adventure Planner</h3>
                <p className="text-gray-600">Fill this out and we'll send you a custom itinerary within 2 hours!</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Your Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Phone/WhatsApp</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 xxx xxx xxxx"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Available Days *</label>
                      <Input
                        required
                        value={formData.days}
                        onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                        placeholder="e.g., 2-3 days after conference"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">What interests you most? *</label>
                    <Input
                      required
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      placeholder="Safari, gorillas, culture, adventure sports..."
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Additional Details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conference dates, group size, special requirements, budget range..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-green-600/5 p-6 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Send className="w-5 h-5 text-primary" />
                      <span className="text-primary">What happens next?</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✅ We'll review your preferences and create a custom itinerary</li>
                      <li>🚀 You'll receive detailed options within 2 hours</li>
                      <li>💬 We'll schedule a quick call to finalize details</li>
                      <li>🎉 Your Rwanda adventure is ready to book!</li>
                    </ul>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send My Adventure Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center ${contact.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-gray-800 mb-1">{contact.title}</h4>
                            <p className="text-gray-900 mb-1">{contact.info}</p>
                            <p className="text-sm text-gray-500">{contact.subtext}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Google Maps */}
            <Card className="overflow-hidden shadow-lg border-0">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4932649992896!2d30.058945414610744!3d-1.9456375370558926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca425f3a96e65%3A0x9c8c6b0d7f9faa12!2sKigali%20Convention%20Centre!5e0!3m2!1sen!2srw!4v1642684234567!5m2!1sen!2srw"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rwanda Adventures Location"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md">
                    <p className="text-sm text-gray-800">📍 Find us near Kigali Convention Centre</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-primary to-green-600 text-white shadow-lg border-0">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h3 className="text-lg mb-3">Need Immediate Help?</h3>
                <p className="text-sm mb-4 text-white/90">
                  Our team is available 24/7 for urgent travel assistance and last-minute bookings.
                </p>
                <Button variant="secondary" className="w-full bg-white text-primary hover:bg-gray-100">
                  WhatsApp Us Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}