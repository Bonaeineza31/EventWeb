import { useState, useMemo } from "react";
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
  CreditCard,
  CheckCircle,
  AlertCircle,
  Lock
} from "lucide-react";
import { toast } from "sonner";

interface UpdatedBookingFormPageProps {
  onBack: () => void;
  packageData: any;
}

export function UpdatedBookingFormPage({ onBack, packageData }: UpdatedBookingFormPageProps) {
  const [formData, setFormData] = useState({
    familyName: "",
    email: "",
    phone: "",
    numberOfPeople: 1,
    travelDate: "",
    specialRequests: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate discount based on number of people
  const calculateDiscount = (basePrice: number, numPeople: number) => {
    let discountPercentage = 0;
    if (numPeople >= 2) discountPercentage = 5;
    if (numPeople >= 4) discountPercentage = 10;
    if (numPeople >= 6) discountPercentage = 15;
    if (numPeople >= 8) discountPercentage = 20;
    
    const discountAmount = (basePrice * discountPercentage) / 100;
    const discountedPrice = basePrice - discountAmount;
    
    return {
      originalPrice: basePrice,
      discountedPrice,
      discountPercentage,
      discountAmount,
      totalSavings: discountAmount * numPeople
    };
  };

  // Memoize discount calculation to prevent infinite re-renders
  const discountData = useMemo(() => {
    return calculateDiscount(packageData.price, formData.numberOfPeople);
  }, [packageData.price, formData.numberOfPeople]);

  const calculateTotal = () => {
    return Math.round(discountData.discountedPrice * formData.numberOfPeople);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle expiry date formatting (MM/YY)
  const handleExpiryDateChange = (value: string) => {
    // Remove all non-numeric characters
    const cleaned = value.replace(/\D/g, '');
    
    // Add slash after MM
    let formatted = cleaned;
    if (cleaned.length >= 2) {
      formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    
    handleInputChange('expiryDate', formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success("Booking confirmed and payment processed!", {
      description: "Welcome to your Rwanda adventure!"
    });

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
                        onValueChange={(value) => handleInputChange("numberOfPeople", parseInt(value))}
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

                  {/* Payment Information */}
                  <div className="space-y-4 border-t pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <Label className="text-lg">Payment Information</Label>
                      <Lock className="w-4 h-4 text-green-500" />
                    </div>
                    
                    <div>
                      <Label htmlFor="cardName">Cardholder Name *</Label>
                      <Input
                        id="cardName"
                        type="text"
                        required
                        value={formData.cardName}
                        onChange={(e) => handleInputChange("cardName", e.target.value)}
                        placeholder="Full name as it appears on card"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        type="text"
                        required
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1"
                        maxLength={19}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          type="text"
                          required
                          value={formData.expiryDate}
                          onChange={(e) => handleExpiryDateChange(e.target.value)}
                          placeholder="MM/YY"
                          className="mt-1"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          type="password"
                          required
                          value={formData.cvv}
                          onChange={(e) => handleInputChange("cvv", e.target.value)}
                          placeholder="123"
                          className="mt-1"
                          maxLength={4}
                        />
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
                          <li>• Your payment is processed securely via encrypted connection</li>
                        </ul>
                        <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded">
                          <p className="font-medium text-blue-800 text-xs mb-1">NOTE: Shared Room Occupancy</p>
                          <p className="text-blue-700 text-xs">
                            In case of shared room occupancy and a guest wants to pay an extra amount to be in a room alone, 
                            they can contact us to assist with that arrangement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                  >
                    {isSubmitting ? (
                      "Processing Payment..."
                    ) : (
                      `Pay $${calculateTotal()} & Confirm Booking`
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
                        <div className="text-right">
                          {discountData.discountPercentage > 0 ? (
                            <div>
                              <span className="text-gray-400 line-through text-sm">${packageData.price}</span>
                              <span className="text-lg ml-2">${Math.round(discountData.discountedPrice)}</span>
                            </div>
                          ) : (
                            <span className="text-lg">${packageData.price}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Number of people</span>
                        <span className="text-lg">{formData.numberOfPeople}</span>
                      </div>
                      {discountData.discountPercentage > 0 && (
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-green-600">Group Discount ({discountData.discountPercentage}%)</span>
                          <span className="text-green-600">-${Math.round(discountData.totalSavings)}</span>
                        </div>
                      )}
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

              {/* Security Info */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Lock className="w-5 h-5 text-green-500" />
                    <h4 className="font-medium">Secure Payment</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Your payment information is encrypted and secured. We accept all major credit cards.
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