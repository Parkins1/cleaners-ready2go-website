// llm:modal-migrated
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { submitQuote } from "@/lib/api";
import { useModalA11y } from "@/components/modal/useModalA11y";
import DialogHeader from "@/components/modal/DialogHeader";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface QuoteModalProps {
  onClose?: () => void;
  isOpen?: boolean; // allow controlled usage (e.g., Locations page)
}

const quoteSchema = z.object({
  homeSize: z.string().min(1, { message: "Home size is required." }),
  serviceFrequency: z
    .string()
    .min(1, { message: "Service frequency is required." }),
  email: z.string().email({ message: "Invalid email address." }),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function QuoteModal({
  onClose,
  isOpen = true,
}: QuoteModalProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });
  const { toast } = useToast();
  const { dialogRef } = useModalA11y(onClose || (() => {}));

  if (!isOpen) return null;

  const quoteMutation = useMutation({
    mutationFn: async (data: QuoteFormValues) => {
      return submitQuote(data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Requested!",
        description:
          "We'll send your personalized quote to your email within 24 hours.",
      });
      onClose && onClose();
      reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    quoteMutation.mutate(data);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      aria-hidden="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-xl border border-slate-300 bg-white p-6 sm:p-8 shadow"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        aria-describedby="quote-modal-description"
        ref={dialogRef}
        tabIndex={-1}
      >
        <DialogHeader
          title="Get a Quote"
          onClose={onClose}
          titleId="quote-modal-title"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          aria-describedby="quote-modal-description"
        >
          <p id="quote-modal-description" className="sr-only">
            Fill out your home size, service frequency, and email to request a
            quote.
          </p>
          <div>
            <Label
              htmlFor="home-size"
              className="text-sm font-medium text-text mb-1"
            >
              Home Size
            </Label>
            <Controller
              name="homeSize"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="home-size">
                    <SelectValue placeholder="Select home size..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio-1br">Studio/1BR</SelectItem>
                    <SelectItem value="2br-2ba">2BR/2BA</SelectItem>
                    <SelectItem value="3br-plus">3BR/2BA+</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.homeSize && (
              <p className="text-red-500 text-sm mt-1" id="home-size-error">
                {errors.homeSize.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="service-frequency"
              className="text-sm font-medium text-text mb-1"
            >
              Service Frequency
            </Label>
            <Controller
              name="serviceFrequency"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="service-frequency">
                    <SelectValue placeholder="Select frequency..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="one-time">One-time</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.serviceFrequency && (
              <p
                className="text-red-500 text-sm mt-1"
                id="service-frequency-error"
              >
                {errors.serviceFrequency.message}
              </p>
            )}
          </div>
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-text mb-1"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className="focus:ring-accent focus:border-transparent"
              aria-describedby="email-error"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1" id="email-error">
                {errors.email.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={quoteMutation.isPending}
            variant="primary"
            className="w-full"
          >
            {quoteMutation.isPending ? "Submitting..." : "Get My Quote"}
          </Button>
        </form>
      </div>
    </div>
  );
}
