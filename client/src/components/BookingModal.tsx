import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useModalA11y } from "@/components/modal/useModalA11y";

interface BookingModalProps {
  onClose?: () => void;
}

export default function BookingModal({ onClose }: BookingModalProps) {
  const [serviceType, setServiceType] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();
  const { dialogRef } = useModalA11y(onClose || (() => {}));

  const bookingMutation = useMutation({
    mutationFn: async (data: { serviceType: string; preferredDate: string; phone: string }) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Booking Submitted!",
        description: "We'll contact you shortly to confirm your cleaning appointment.",
      });
      onClose && onClose();
      setServiceType("");
      setPreferredDate("");
      setPhone("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType || !preferredDate || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    bookingMutation.mutate({ serviceType, preferredDate, phone });
  };
  
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" aria-hidden="true">
      <div
        onClick={(e) => e.stopPropagation()}
        className="card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        aria-describedby="booking-modal-description"
        ref={dialogRef}
        tabIndex={-1}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 id="booking-modal-title" className="text-xl font-bold text-text">Book a Cleaning</h3>
          <button type="button" onClick={onClose} className="text-text hover:text-accent">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="booking-modal-description">
          <p id="booking-modal-description" className="sr-only">Select a service, preferred date, and enter your phone to book.</p>
          <div>
            <Label htmlFor="service-type" className="text-sm font-medium text-text mb-1">
              Service Type
            </Label>
            <Select value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger id="service-type">
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential Cleaning</SelectItem>
                <SelectItem value="move-out">Move-Out Cleaning</SelectItem>
                <SelectItem value="deep-clean">One-Time Deep Clean</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="preferred-date" className="text-sm font-medium text-text mb-1">
              Preferred Date
            </Label>
            <Input
              id="preferred-date"
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="focus:ring-accent focus:border-transparent"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-text mb-1">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className="focus:ring-accent focus:border-transparent"
            />
          </div>
          <Button
            type="submit"
            disabled={bookingMutation.isPending}
            className="btn-primary w-full"
          >
            {bookingMutation.isPending ? "Scheduling..." : "Schedule Cleaning"}
          </Button>
        </form>
      </div>
    </div>
  );
}