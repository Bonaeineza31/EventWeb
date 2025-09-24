import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Users, 
  Clock, 
  MapPin, 
  Calendar,
  CreditCard,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { toast } from "sonner";

interface BookingFormPageProps {
  onBack: () => void;
  packageData: any;
}

export function BookingFormPage({ onBack, packageData }: BookingFormPageProps) {
  const [formData, setFormData] = useState({
    familyName: "",
    email: "",
    phone: "",
    numberOfPeople: 1,
    travelDate: "",
    specialRequests: "",
    paymentOption: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculateTotal = () => {
    return packageData.price * formData.numberOfPeople;
  };

  const handleInputChange = (field: string, value: any) => {
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

    if (formData.paymentOption === "pay-later") {
      toast.success("Booking confirmed! We'll send payment reminders via email.", {
        description: "Thank you for choosing Rwanda Adventures!"
      });
    } else {
      toast.success("Booking confirmed and payment processed!", {
        description: "Welcome to your Rwanda adventure!"
      });
    }

    setIsSubmitting(false);
  };

  const groupSizeOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Packages</span>
            </button>
            <div className="text-right">
              <h1 className="text-2xl text-gray-800">Complete Your Booking</h1>
              <p className="text-sm text-gray-600">Secure your Rwanda adventure</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Booking Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="familyName">Family/Group Name *</Label>
                      <Input
                        id="familyName"
                        type="text"
                        required
                        value={formData.familyName}
                        onChange={(e) => handleInputChange("familyName", e.target.value)}
                        placeholder="Enter your family or group name"
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
                        placeholder="Enter your email"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+250 788 123 456"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="numberOfPeople">Number of People *</Label>
                      <Select 
                        value={formData.numberOfPeople.toString()} 
                        onValueChange={(value:any) => handleInputChange("numberOfPeople", parseInt(value))}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select group size" />
                        </SelectTrigger>
                        <SelectContent>
                          {groupSizeOptions.map((size) => (
                            <SelectItem key={size} value={size.toString()}>
                              {size} {size === 1 ? 'Person' : 'People'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="travelDate">Preferred Travel Date *</Label>
                    <Input
                      id="travelDate"
                      type="date"
                      required
                      value={formData.travelDate}
                      onChange={(e) => handleInputChange("travelDate", e.target.value)}
                      className="mt-1"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests or Dietary Requirements</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special accommodations, dietary requirements, or preferences..."
                      className="mt-1"
                    />
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-4">
                    <Label className="text-lg">Payment Option *</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div
                        onClick={() => handleInputChange("paymentOption", "pay-now")}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          formData.paymentOption === "pay-now"
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">Pay Now</div>
                            <div className="text-sm text-gray-600">Secure online payment</div>
                          </div>
                        </div>
                      </div>
                      
                      <div
                        onClick={() => handleInputChange("paymentOption", "pay-later")}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          formData.paymentOption === "pay-later"
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium">Pay Later</div>
                            <div className="text-sm text-gray-600">We'll send payment reminders</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        <p className="mb-2">By booking this package, you agree to our terms and conditions:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Free cancellation up to 48 hours before travel date</li>
                          <li>• Travel insurance is recommended but not included</li>
                          <li>• Valid passport required for all participants</li>
                          <li>• Final payment due 24 hours before departure if "Pay Later" selected</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={!formData.paymentOption || isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : formData.paymentOption === "pay-now" ? (
                      `Pay $${calculateTotal()} & Confirm Booking`
                    ) : (
                      "Confirm Booking (Pay Later)"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Package Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-0 shadow-lg mb-6">
                <div className="relative">
                  <div className="aspect-[4/3] relative">
                    <ImageWithFallback
                      src={packageData.image}
                      alt={packageData.name}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg"></div>
                    
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        {packageData.category}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-lg mb-1">{packageData.name}</h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>{packageData.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{packageData.duration}</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Price per person</span>
                        <span className="text-lg">${packageData.price}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Number of people</span>
                        <span className="text-lg">{formData.numberOfPeople}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between items-center">
                        <span className="font-medium">Total Amount</span>
                        <span className="text-2xl text-primary">${calculateTotal()}</span>
                      </div>
                    </div>

                    {formData.travelDate && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-green-700">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Travel Date: {new Date(formData.travelDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-green-600/5">
                <CardContent className="p-6 text-center">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Our travel experts are available 24/7 to assist you with your booking.
                  </p>
                  <div className="text-sm text-primary font-medium">
                    📞 +250 788 684 804<br />
                    ✉️ hello@rwandaadventures.com
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}