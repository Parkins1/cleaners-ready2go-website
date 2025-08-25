
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "@/components/ui/select";
import { ContactFormData } from "@/components/ContactForm/schema";

export interface SnippetContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isLoading?: boolean;
}

export default function SnippetContactForm({ onSubmit, isLoading = false }: SnippetContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cleaningOptions = [
    { value: "", label: "Select cleaning service..." },
    { value: "residential", label: "Residential Cleaning" },
    { value: "commercial", label: "Commercial Cleaning" },
    { value: "deep", label: "Deep Cleaning" },
    { value: "move", label: "Move-in/Move-out Cleaning" },
    { value: "construction", label: "Post-Construction Cleanup" },
    { value: "other", label: "Other (please specify in message)" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): Partial<Record<keyof ContactFormData, string>> => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s\-\/(\/)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a cleaning service";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSubmit(formData)
      .then(() => {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          serviceType: "",
          message: ""
        });
      })
      .catch(() => {});
  };

  if (isSubmitted) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card max-w-md w-full p-8 text-center">
        <div className="success-message p-6 mb-6">
          <i className="fas fa-check-circle text-3xl mb-4"></i>
          <h2 className="text-xl font-bold mb-2">Thank You!</h2>
          <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
        </div>
        <button
          className="btn-primary"
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card max-w-lg w-full p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-broom text-white text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-text">
            Get Your Free Quote
          </h1>
          <p className="mt-2 text-text">
            Tell us about your cleaning needs and we'll get back to you with a customized quote.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="label-text">
              <i className="fas fa-user header-icon mr-2"></i>
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="input-field w-full px-4 py-3"
              placeholder="Enter your first name"
            />
            {errors.firstName && <div className="error-message">{errors.firstName}</div>}
          </div>

          {/* Last Name */}
          <div>
            <label className="label-text">
              <i className="fas fa-user header-icon mr-2"></i>
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="input-field w-full px-4 py-3"
              placeholder="Enter your last name"
            />
            {errors.lastName && <div className="error-message">{errors.lastName}</div>}
          </div>

          {/* Phone */}
          <div>
            <label className="label-text">
              <i className="fas fa-phone header-icon mr-2"></i>
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="input-field w-full px-4 py-3"
              placeholder="(555) 123-4567"
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>

          {/* Email */}
          <div>
            <label className="label-text">
              <i className="fas fa-envelope header-icon mr-2"></i>
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-field w-full px-4 py-3"
              placeholder="your.email@example.com"
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          {/* Service Type */}
          <div>
            <label className="label-text">
              <i className="fas fa-spray-can header-icon mr-2"></i>
              Type of Cleaning Service *
            </label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
            >
              <SelectTrigger className="input-field w-full px-4 py-3">
                <SelectValue placeholder="Select cleaning service..." />
              </SelectTrigger>
              <SelectContent className="z-[99999] mt-2 bg-white opacity-100 rounded-lg shadow-lg">
                {cleaningOptions.map(option => (
                  <SelectItem key={option.value} value={option.value} className="py-2 px-3 hover:bg-gray-100">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceType && <div className="error-message">{errors.serviceType}</div>}
          </div>

          {/* Message */}
          <div>
            <label className="label-text">
              <i className="fas fa-envelope-open-text header-icon mr-2"></i>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="input-field w-full px-4 py-3"
              placeholder="Enter your message (at least 10 characters)"
              rows={4}
            ></textarea>
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>

          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Sending Request...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane mr-2"></i>
                Get My Free Quote
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-text">
          <i className="fas fa-shield-alt header-icon mr-1"></i>
          Your information is secure and will only be used to contact you about your cleaning service request.
        </div>
      </div>
    </div>
  );
}
