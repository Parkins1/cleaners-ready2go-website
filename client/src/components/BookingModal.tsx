 // llm:modal-migrated
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useModalA11y } from "@/components/modal/useModalA11y";
import DialogHeader from "@/components/modal/DialogHeader";

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
    <div onClick={onClose} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" aria-hidden="true">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-xl border border-slate-300 bg-white p-6 sm:p-8 shadow"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        aria-describedby="booking-modal-description"
        ref={dialogRef}
        tabIndex={-1}
      >
        <DialogHeader title="Book a Cleaning" onClose={onClose} titleId="booking-modal-title" />
        <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="booking-modal-description">
          <p id="booking-modal-description" className="sr-only">Select a service, preferred date, and enter your phone to book.</p>
          <div>
            <Label htmlFor="service-type" className="text-sm font-medium text-text mb-1">
              Service Type
            </Label>
            <Select value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger id="service-type" className="h-11">
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
              className="focus:ring-accent focus:border-transparent w-full h-11"
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
              className="focus:ring-accent focus:border-transparent w-full h-11"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full"
            disabled={bookingMutation.isPending}
          >
            {bookingMutation.isPending ? "Scheduling..." : "Schedule Cleaning"}
          </button>
        </form>
      </div>
    </div>
  );
}
