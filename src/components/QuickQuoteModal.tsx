import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { 
  X, 
  Send, 
  Phone, 
  Mail, 
  Clock,
  Users,
  MapPin,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickQuoteModal({ isOpen, onClose }: QuickQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    groupSize: "",
    duration: "",
    interests: "",
    budget: "",
    travelDate: "",
    specialRequests: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Quote request sent successfully!", {
      description: "We'll get back to you within 2 hours with a personalized quote."
    });

    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      groupSize: "",
      duration: "",
      interests: "",
      budget: "",
      travelDate: "",
      specialRequests: ""
    });
  };

  const tourTypes = [
    "Wildlife Safari (Akagera)",
    "Gorilla Trekking (Volcanoes)",
    "Lake Kivu Relaxation",
    "Forest Adventure (Nyungwe)",
    "Cultural Experiences",
    "City Tours (Kigali)",
    "Custom Mix"
  ];

  const budgetRanges = [
    "Under $200 per person",
    "$200 - $400 per person",
    "$400 - $600 per person",
    "$600 - $800 per person",
    "$800+ per person",
    "Let's discuss"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-800 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            Get Your Custom Quote
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-xs text-gray-600">Response Time</div>
                <div className="text-sm">2 Hours</div>
              </div>
              <div>
                <Phone className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-xs text-gray-600">Free Consultation</div>
                <div className="text-sm">Included</div>
              </div>
              <div>
                <CheckCircle className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-xs text-gray-600">Custom Packages</div>
                <div className="text-sm">Available</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@company.com"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+250 788 123 456"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="groupSize">Group Size *</Label>
                <Select value={formData.groupSize} onValueChange={(value) => handleInputChange("groupSize", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select group size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Just me</SelectItem>
                    <SelectItem value="2">2 people</SelectItem>
                    <SelectItem value="3-5">3-5 people</SelectItem>
                    <SelectItem value="6-10">6-10 people</SelectItem>
                    <SelectItem value="11-20">11-20 people</SelectItem>
                    <SelectItem value="20+">20+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Trip Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="duration">Trip Duration *</Label>
                <Select value={formData.duration} onValueChange={(value) => handleInputChange("duration", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="How long?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="half-day">Half day</SelectItem>
                    <SelectItem value="1-day">1 day</SelectItem>
                    <SelectItem value="2-days">2 days</SelectItem>
                    <SelectItem value="3-days">3 days</SelectItem>
                    <SelectItem value="4-5-days">4-5 days</SelectItem>
                    <SelectItem value="1-week">1 week</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="travelDate">Preferred Travel Date</Label>
                <Input
                  id="travelDate"
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => handleInputChange("travelDate", e.target.value)}
                  className="mt-1"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="interests">What interests you most? *</Label>
              <Select value={formData.interests} onValueChange={(value) => handleInputChange("interests", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your main interest" />
                </SelectTrigger>
                <SelectContent>
                  {tourTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select budget range (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="specialRequests">Special Requests or Questions</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="Any specific requirements, dietary needs, accessibility considerations, or questions?"
                className="mt-1"
                rows={3}
              />
            </div>

            {/* Contact Preference */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">How we'll contact you:</span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>✓ Personalized quote within 2 hours</div>
                <div>✓ Free consultation call if needed</div>
                <div>✓ Flexible package options</div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Maybe Later
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Get My Quote
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Emergency Contact */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Need immediate assistance?</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-primary" />
                <span>+250 788 684 804</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@rwandaadventures.com</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
