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

interface QuoteModalProps {
  onClose?: () => void;
}

export default function QuoteModal({ onClose }: QuoteModalProps) {
  const [homeSize, setHomeSize] = useState("");
  const [serviceFrequency, setServiceFrequency] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { dialogRef } = useModalA11y(onClose || (() => {}));

  const quoteMutation = useMutation({
    mutationFn: async (data: { homeSize: string; serviceFrequency: string; email: string }) => {
      const response = await apiRequest("POST", "/api/quotes", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Requested!",
        description: "We'll send your personalized quote to your email within 24 hours.",
      });
      onClose && onClose(); // Use onClose directly
      setHomeSize("");
      setServiceFrequency("");
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!homeSize || !serviceFrequency || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    quoteMutation.mutate({ homeSize, serviceFrequency, email });
  };

  return (
      <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" aria-hidden="true">
        <div
          onClick={(e) => e.stopPropagation()}
          className="card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
          aria-describedby="quote-modal-description"
          ref={dialogRef}
          tabIndex={-1}
        >
        <div className="flex justify-between items-center mb-4">
          <h3 id="quote-modal-title" className="text-xl font-bold text-text">Get a Quote</h3>
          <button type="button" onClick={onClose} className="text-text hover:text-accent">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="quote-modal-description">
          <p id="quote-modal-description" className="sr-only">Fill out your home size, service frequency, and email to request a quote.</p>
          <div>
            <Label htmlFor="home-size" className="text-sm font-medium text-text mb-1">
              Home Size
            </Label>
            <Select value={homeSize} onValueChange={setHomeSize}>
              <SelectTrigger>
                <SelectValue placeholder="Select home size..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="studio-1br">Studio/1BR</SelectItem>
                <SelectItem value="2br-2ba">2BR/2BA</SelectItem>
                <SelectItem value="3br-plus">3BR/2BA+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="service-frequency" className="text-sm font-medium text-text mb-1">
              Service Frequency
            </Label>
            <Select value={serviceFrequency} onValueChange={setServiceFrequency}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="one-time">One-time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-text mb-1">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:ring-accent focus:border-transparent"
            />
          </div>
          <Button
            type="submit"
            disabled={quoteMutation.isPending}
            className="btn-primary w-full"
          >
            {quoteMutation.isPending ? "Submitting..." : "Get My Quote"}
          </Button>
        </form>
      </div>
    </div>
  );
}