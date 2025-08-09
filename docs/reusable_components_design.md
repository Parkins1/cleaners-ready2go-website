# Reusable Components Design: ServiceCard and ContactForm

## 1. Goal

This document defines the architectural specifications for two reusable components: `ServiceCard` and `ContactForm`. It will detail their prop interfaces, integrate React Hook Form for validation, and capture their visual specifications from existing page usages.

## 2. ServiceCard Component Design

The `ServiceCard` component will encapsulate the display logic for a single service offering, as currently seen in `client/src/pages/Home.tsx` (lines 169-194).

### Prop Interface (`ServiceCardProps.ts`)

To ensure type safety and clarity, a dedicated TypeScript interface will be defined for the `ServiceCard`'s props.

```typescript
// client/src/components/ServiceCard/types.ts (or client/src/components/ServiceCard/ServiceCard.types.ts)
import React from 'react';

export interface ServiceCardProps {
  id: string;
  title: string;
  blurb: string;
  href: string;
  img: string; // Path to image asset
  icon: React.ReactNode; // Lucide icon component
  className?: string; // Optional for external styling
}
```

### Visual and Functional Specification (from `Home.tsx`)

The `ServiceCard` will replicate the visual design and interactive behavior found in the "Services" section of `client/src/pages/Home.tsx`.

*   **Structure:** An `<a>` tag acting as a block-level link.
*   **Styling:**
    *   `relative group block rounded-lg overflow-hidden`
    *   `border-4 border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-gold`
    *   Background image: `backgroundImage: url(${props.img})`, `backgroundSize: "cover"`, `backgroundPosition: "center"`, `backgroundRepeat: "no-repeat"`
    *   Overlay: `absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors`
    *   Content area: `relative z-10 flex flex-col justify-end items-center h-80 p-6 text-center`
    *   Icon container: `gradient-gold rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`
    *   Title: `text-2xl font-bold text-white mb-3`
    *   Blurb: `text-white/90`
    *   "Learn More" link: `mt-4 inline-flex items-center text-white font-semibold` with `ArrowRight` icon (from Lucide).
*   **Accessibility:** `aria-label` for the link.

### Location

The `ServiceCard` component and its type definition will be placed in a new subdirectory: `client/src/components/ServiceCard/`.
*   `client/src/components/ServiceCard/ServiceCard.tsx`
*   `client/src/components/ServiceCard/types.ts`

### Migration Strategy (for Code Mode)

1.  Create the `client/src/components/ServiceCard/` directory and files.
2.  Move the `ServiceCardProps` interface to `client/src/components/ServiceCard/types.ts`.
3.  Extract the service card JSX from `client/src/pages/Home.tsx` into `client/src/components/ServiceCard/ServiceCard.tsx`.
4.  Update `client/src/pages/Home.tsx` to import and use the new `ServiceCard` component.

## 3. ContactForm Component Design

The `ContactForm` component will centralize the contact form logic and UI, currently duplicated (or implicitly present) in pages like `client/src/pages/Contact.tsx`. It will integrate `react-hook-form` for efficient form handling and validation.

### Prop Interface (`ContactFormProps.ts`)

```typescript
// client/src/components/ContactForm/types.ts (or client/src/components/ContactForm/ContactForm.types.ts)
import { UseFormReturn } from 'react-hook-form';
import * as z from 'zod'; // Assuming Zod for schema validation

// Define the schema for the form data
export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is required." }), // Basic validation
  serviceType: z.string().min(1, { message: "Service type is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactFormProps {
  // Potentially custom submit handler if needed, or rely on RHF's handleSubmit
  onSubmit: (data: ContactFormData) => Promise<void>;
  // Optionally, pass a loading state for the submit button
  isLoading?: boolean;
}
```

### Visual and Functional Specification (from `Contact.tsx`)

The `ContactForm` will replicate the form fields, layout, and basic styling from `client/src/pages/Contact.tsx` (lines 91-187). It will integrate `react-hook-form` for state management, validation, and submission.

*   **Form Fields:** First Name, Last Name, Email, Phone Number, Service Type (Select), Message (Textarea).
*   **UI Components:** Use Shadcn/ui `Input`, `Label`, `Select` (with `SelectContent`, `SelectItem`, `SelectTrigger`, `SelectValue`), and `Textarea`.
*   **Validation:**
    *   Leverage `zod` for schema definition (`contactFormSchema`).
    *   Integrate with `react-hook-form` and its `useForm` hook (`resolver: zodResolver(contactFormSchema)`).
    *   Display validation errors using `form.formState.errors`.
*   **Submission:** The component will receive an `onSubmit` prop that handles the actual API call. The submit button will use `isLoading` to manage its disabled state and text.
*   **Styling:** Retain existing Tailwind CSS classes for layout (`grid md:grid-cols-2 gap-4`, `space-y-6`), labels, inputs, and buttons. Focus ring styles (`focus:ring-brand-gold focus:border-transparent`) should be maintained.

### Location

The `ContactForm` component, its type definitions, and Zod schema will reside in a new subdirectory: `client/src/components/ContactForm/`.
*   `client/src/components/ContactForm/ContactForm.tsx`
*   `client/src/components/ContactForm/types.ts`
*   `client/src/components/ContactForm/schema.ts` (if schema is complex enough to warrant a separate file)

### Migration Strategy (for Code Mode)

1.  Install `react-hook-form` and `zod` and `@hookform/resolvers`.
2.  Create the `client/src/components/ContactForm/` directory and its files.
3.  Define `contactFormSchema` in `client/src/components/ContactForm/types.ts` (or `schema.ts`).
4.  Extract the form JSX and its associated state/handlers from `client/src/pages/Contact.tsx` into `client/src/components/ContactForm/ContactForm.tsx`, adapting it to use `useForm` from `react-hook-form`.
5.  Update `client/src/pages/Contact.tsx` to import and use the new `ContactForm` component.
6.  Migrate client/src/pages/Home.tsx, client/src/pages/Residential.tsx, client/src/pages/DeepCleaning.tsx to use these new reusable components where applicable. For buttons specifically, as the Button standardization is done, ensure they use `shadcn/ui` buttons and `useModal` for opening modals.

This design provides clear contracts and a path for creating modular, type-safe, and validated form components.