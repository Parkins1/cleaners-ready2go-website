import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import BookingModal from "@/components/BookingModal";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      serviceType: string;
      message: string;
    }) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setServiceType("");
      setMessage("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !serviceType || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate({
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      message,
    });
  };

  return (
    <>
      <title>Contact Us - Cleaners Ready 2Go | Get Your Free Quote Today</title>
      <meta name="description" content="Contact Cleaners Ready 2Go for professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. Call (123) 456-7890 or request a free quote online." />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-6">Contact Us</h1>
            <p className="text-xl text-brand-gray font-medium">Get in touch for a free quote or to schedule your cleaning service</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-brand-black mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-brand-black mb-2">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="focus:ring-brand-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-brand-black mb-2">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="focus:ring-brand-gold focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-brand-black mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="focus:ring-brand-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-brand-black mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="focus:ring-brand-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="serviceType" className="text-sm font-medium text-brand-black mb-2">
                    Service Type
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Cleaning</SelectItem>
                      <SelectItem value="move-out">Move-Out Cleaning</SelectItem>
                      <SelectItem value="deep-clean">One-Time Deep Clean</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-brand-black mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your cleaning needs..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="focus:ring-brand-gold focus:border-transparent"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="btn-primary text-lg w-full py-4"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-black mb-6">Get In Touch</h2>
                <p className="text-brand-gray mb-8 leading-relaxed">
                  Ready to experience the difference professional cleaning makes? Contact us today for a free quote or to schedule your service. We're here to answer any questions about our cleaning services.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-brand-gold p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-black">Phone</div>
                    <a href="tel:+1234567890" className="text-brand-gray hover:text-brand-gold transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-brand-gold p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-black">Email</div>
                    <a href="mailto:info@cleanersready2go.com" className="text-brand-gray hover:text-brand-gold transition-colors">
                      info@cleanersready2go.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-gold p-3 rounded-lg mr-4 mt-1">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-black">Service Areas</div>
                    <div className="text-brand-gray">
                      Spokane Valley, Liberty Lake,<br />
                      and Greenacres, WA
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-brand-gold p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-black">Hours</div>
                    <div className="text-brand-gray">
                      Monday - Saturday: 8AM - 6PM<br />
                      Sunday: 10AM - 4PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-brand-black mb-4">Our Service Area</h3>
                <div className="bg-white rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-brand-gray">
                    <MapPin className="w-12 h-12 mx-auto mb-3" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Embed Google Maps showing service areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="mt-16 bg-brand-black rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Service?</h3>
            <p className="text-gray-300 mb-6">Call us now for same-day cleaning or emergency service</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+1234567890" 
                className="btn-primary text-lg"
              >
                Call (123) 456-7890
              </a>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-secondary text-lg"
              >
                Book Online
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
