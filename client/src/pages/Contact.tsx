// llm:brand-config-migrated
// llm:callout-banner-migrated
// llm:cta-migrated
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import ContactForm from "@/components/ContactForm/ContactForm";
import SnippetContactForm from "@/components/ContactForm/SnippetContactForm";
import { ContactFormData } from "@/components/ContactForm/schema";
import CalloutBanner from "@/components/CalloutBanner/CalloutBanner";
import { brand } from "@/config/brand";
import { SEO } from "@/components/seo/SEO";

export default function Contact() {
  const { open, close } = useModal();
  const { toast } = useToast();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      close();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });
  const handleSubmit = async (data: ContactFormData) => {
    await mutateAsync(data);
  };

  const openContactModal = () => {
    open("contact", {
      title: "Send Us a Message",
      description: "Fill out the form below and we'll get back to you as soon as possible.",
      form: <ContactForm onSubmit={handleSubmit} isLoading={isPending} />,
    });
  };

  const useNewForm = import.meta.env.VITE_USE_NEW_CONTACT_FORM === "true";

  return (
    <>
      <SEO
        title="Contact Us - Cleaners Ready 2Go | Get Your Free Quote Today"
        description={`Contact Cleaners Ready 2Go for professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. Call ${brand.phone} or request a free quote online.`}
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text mb-6">Contact Us</h1>
            <p className="text-xl text-text font-medium">Get in touch for a free quote or to schedule your cleaning service</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-surface p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-text mb-6">Send Us a Message</h2>
              {useNewForm ? (
                <ContactForm onSubmit={handleSubmit} isLoading={isPending} />
              ) : (
                <SnippetContactForm onSubmit={handleSubmit} isLoading={isPending} />
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text mb-6">Get In Touch</h2>
                <p className="text-text mb-8 leading-relaxed">
                  Ready to experience the difference professional cleaning makes? Contact us today for a free quote or to schedule your service. We're here to answer any questions about our cleaning services.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-accent p-3 rounded-lg mr-4">
                    <Icon name="Phone" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">Phone</div>
                    <a href={`tel:${brand.phone}`} className="text-text hover:text-accent transition-colors">
                      {brand.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-accent p-3 rounded-lg mr-4">
                    <Icon name="Mail" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">Email</div>
                    <a href={`mailto:${brand.email}`} className="text-text hover:text-accent transition-colors">
                      {brand.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-lg mr-4 mt-1">
                    <Icon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">Service Areas</div>
                    <div className="text-text">
                      {brand.serviceAreas.cities.slice(1, 4).join(', ')},<br />
                      and {brand.serviceAreas.cities[8]}, WA
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-accent p-3 rounded-lg mr-4">
                    <Icon name="Clock" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">Hours</div>
                    <div className="text-text">
                      {brand.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-surface rounded-xl p-6">
                <h3 className="text-lg font-semibold text-text mb-4">Our Service Area</h3>
                <div className="bg-white rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-text">
                    <Icon name="MapPin" className="w-12 h-12 mx-auto mb-3" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Embed Google Maps showing service areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CalloutBanner
            title="Need Immediate Service?"
            body="Call us now for same-day cleaning or emergency service"
            variant="gold"
            className="mt-16"
            actions={
              <>
                <a href={`tel:${brand.phone}`} aria-label={`Call ${brand.phone}`} className="inline-flex">
                  <Button
                    variant="primary"
                    className="w-full sm:w-72"
                  >
                    Call {brand.phone}
                  </Button>
                </a>
                <Button
                  onClick={() => open("booking")}
                  variant="primary"
                  className="w-full sm:w-72"
                  aria-label="Book Online"
                >
                  Book Online
                </Button>
              </>
            }
          />
        </div>
      </section>

    </>
  );
}
