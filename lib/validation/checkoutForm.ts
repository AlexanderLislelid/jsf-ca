import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  address: z.string().trim().min(1, "Address is required"),
  zipCode: z
    .string()
    .trim()
    .min(1, "Zip code is required")
    .regex(/^\d{4}$/, "Zip code must be 4 digits"),
  email: z.email("Enter a valid email address"),
  country: z.string().trim().min(1, "Country is required"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^\+?[0-9\s]{8,15}$/, "Enter a valid phone number"),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
