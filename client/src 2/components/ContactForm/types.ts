import { UseFormReturn } from 'react-hook-form';
import { ContactFormData } from './schema';

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isLoading?: boolean;
}