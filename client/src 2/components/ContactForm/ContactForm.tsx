import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "./schema";
import { ContactFormProps } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm({ onSubmit, isLoading }: ContactFormProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-sm font-medium text-text mb-2">
            First Name
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="John"
            {...form.register("firstName")}
            className="focus:ring-accent focus:border-transparent"
          />
          {form.formState.errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="lastName" className="text-sm font-medium text-text mb-2">
            Last Name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Doe"
            {...form.register("lastName")}
            className="focus:ring-accent focus:border-transparent"
          />
          {form.formState.errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="email" className="text-sm font-medium text-text mb-2">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...form.register("email")}
          className="focus:ring-accent focus:border-transparent"
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-text mb-2">
          Phone Number
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(123) 456-7890"
          {...form.register("phone")}
          className="focus:ring-accent focus:border-transparent"
        />
        {form.formState.errors.phone && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="serviceType" className="text-sm font-medium text-text mb-2">
          Service Type
        </Label>
        <Select
          onValueChange={(value) => form.setValue("serviceType", value)}
          defaultValue={form.getValues("serviceType")}
        >
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
        {form.formState.errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.serviceType.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message" className="text-sm font-medium text-text mb-2">
          Message
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Tell us about your cleaning needs..."
          {...form.register("message")}
          className="focus:ring-accent focus:border-transparent"
        />
        {form.formState.errors.message && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        variant="primary"
        className="w-full"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
